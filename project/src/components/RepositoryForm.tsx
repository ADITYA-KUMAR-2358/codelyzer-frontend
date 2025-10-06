import { useState } from 'react';
import { Github, Loader as Loader2, ArrowLeft, Sparkles, CircleCheck as CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface RepositoryFormProps {
  onSubmit: (repoUrl: string) => void;
  isLoading: boolean;
  onBack?: () => void;
}

export function RepositoryForm({ onSubmit, isLoading, onBack }: RepositoryFormProps) {
  const [repoUrl, setRepoUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repoUrl.trim()) {
      onSubmit(repoUrl.trim());
    }
  };

  const isValidUrl = (url: string) => {
    return url.includes('github.com') && url.trim().length > 0;
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 py-8 animate-in slide-in-from-bottom duration-500">
      {onBack && !isLoading && (
        <Button
          variant="outline"
          onClick={onBack}
          className="gap-2 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      )}

      <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-white via-slate-50 to-primary/5 dark:from-slate-900 dark:via-slate-800 dark:to-primary/10">
        <CardHeader className="text-center space-y-4 pb-8 pt-8">
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <Github className="w-14 h-14 text-slate-800 dark:text-slate-200" />
              <Sparkles className="w-7 h-7 text-primary absolute -top-1 -right-1 animate-pulse" />
            </div>
            <CardTitle className="text-5xl font-bold bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Codelyzer
            </CardTitle>
          </div>
          <CardDescription className="text-xl text-slate-700 dark:text-slate-300 font-medium">
            Enter your GitHub repository to begin analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 px-8 pb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="repo-url" className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                GitHub Repository URL
              </Label>
              <Input
                id="repo-url"
                type="url"
                placeholder="https://github.com/username/repository"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                disabled={isLoading}
                className="text-lg h-16 border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg"
              />
              <p className="text-base text-slate-600 dark:text-slate-400">
                Paste the full URL of any public GitHub repository
              </p>
            </div>
            <Button
              type="submit"
              className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              disabled={!isValidUrl(repoUrl) || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-3 h-7 w-7 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-3 h-6 w-6" />
                  Analyze Repository
                </>
              )}
            </Button>
          </form>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Fast Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Automated PRs</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
