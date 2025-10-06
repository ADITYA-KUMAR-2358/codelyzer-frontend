import { useState, useEffect, useCallback } from 'react';
import { HomePage } from './components/HomePage';
import { RepositoryForm } from './components/RepositoryForm';
import { RepositoryInfo } from './components/RepositoryInfo';
import { AnalysisProgress } from './components/AnalysisProgress';
import { ResultDisplay } from './components/ResultDisplay';
import { submitRepository, getJobStatus } from './services/api';
import { AnalysisStep, JobStatus } from './types';
import { useToast } from './hooks/use-toast';
import { Toaster } from './components/ui/sonner';

type AppState = 'home' | 'form' | 'submitting' | 'processing' | 'success' | 'error';

function App() {
  const [state, setState] = useState<AppState>('home');
  const [currentStep, setCurrentStep] = useState<AnalysisStep>('queued');
  const [jobId, setJobId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [prUrl, setPrUrl] = useState<string>('');
  const [repoUrl, setRepoUrl] = useState<string>('');
  const { toast } = useToast();

  const pollJobStatus = useCallback(async (id: string) => {
    try {
      const status: JobStatus = await getJobStatus(id);

      if (status.status) {
        setCurrentStep(status.status);
      }

      if (status.status === 'complete' && status.pr_url) {
        setState('success');
        setPrUrl(status.pr_url);
        return true;
      }

      if (status.status === 'failed' || status.error) {
        setState('error');
        setErrorMessage(status.error || status.message || 'Analysis failed');
        return true;
      }

      return false;
    } catch (error) {
      console.error('Polling error:', error);
      return false;
    }
  }, []);

  useEffect(() => {
    if (state !== 'processing' || !jobId) return;

    const interval = setInterval(async () => {
      const shouldStop = await pollJobStatus(jobId);
      if (shouldStop) {
        clearInterval(interval);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [state, jobId, pollJobStatus]);

  const handleGetStarted = () => {
    setState('form');
  };

  const handleBackToHome = () => {
    setState('home');
    setCurrentStep('queued');
    setJobId(null);
    setErrorMessage('');
    setPrUrl('');
    setRepoUrl('');
  };

  const handleSubmit = async (url: string) => {
    setState('submitting');
    setErrorMessage('');
    setPrUrl('');
    setCurrentStep('queued');
    setRepoUrl(url);

    try {
      const response = await submitRepository(url);

      if (response.job_id) {
        setJobId(response.job_id);
        setState('processing');
        toast({
          title: 'Repository submitted successfully',
          description: 'Analysis has started. Please wait...',
        });
      } else if (response.status) {
        setCurrentStep(response.status);
        setState('processing');
      }
    } catch (error) {
      setState('error');
      const message = error instanceof Error ? error.message : 'Failed to submit repository. Please check the URL and try again.';
      setErrorMessage(message);
      toast({
        variant: 'destructive',
        title: 'Submission failed',
        description: message,
      });
    }
  };

  const handleReset = () => {
    setState('home');
    setCurrentStep('queued');
    setJobId(null);
    setErrorMessage('');
    setPrUrl('');
    setRepoUrl('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {state === 'home' ? (
          <HomePage onGetStarted={handleGetStarted} />
        ) : state === 'form' || state === 'submitting' ? (
          <RepositoryForm
            onSubmit={handleSubmit}
            isLoading={state === 'submitting'}
            onBack={handleBackToHome}
          />
        ) : state === 'processing' ? (
          <div className="space-y-6 pt-8 max-w-5xl mx-auto">
            <RepositoryInfo repoUrl={repoUrl} onBack={handleBackToHome} />
            <AnalysisProgress currentStep={currentStep} isFailed={false} />
          </div>
        ) : state === 'success' ? (
          <div className="space-y-6 pt-8 max-w-5xl mx-auto">
            <RepositoryInfo repoUrl={repoUrl} />
            <AnalysisProgress currentStep={currentStep} isFailed={false} />
            <ResultDisplay
              type="success"
              title="Pull Request Created Successfully!"
              message="Your code analysis is complete. A pull request has been created with the recommended fixes and improvements."
              prUrl={prUrl}
              onReset={handleReset}
            />
          </div>
        ) : (
          <div className="space-y-6 pt-8 max-w-5xl mx-auto">
            <RepositoryInfo repoUrl={repoUrl} />
            <AnalysisProgress currentStep={currentStep} isFailed={true} />
            <ResultDisplay
              type="error"
              title="Analysis Failed"
              message={errorMessage || 'An error occurred during analysis. Please try again with a different repository.'}
              onReset={handleReset}
            />
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
