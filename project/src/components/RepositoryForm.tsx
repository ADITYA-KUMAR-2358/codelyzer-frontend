import { useState } from 'react';
import { Github, Loader as Loader2, ArrowLeft, Sparkles } from 'lucide-react';
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
    <div className="w-full max-w-3xl mx-auto space-y-4 animate-in slide-in-from-bottom duration-500">
      {onBack && !isLoading && (
        <Button
          variant="outline"
          onClick={onBack}
          className="gap-2 border-2 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      )}

      <Card className="shadow-2xl border-2 border-blue-100 dark:border-blue-900 bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950">
        <CardHeader className="text-center space-y-3 pb-6">
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <Github className="w-10 h-10 text-slate-800 dark:text-slate-200" />
              <Sparkles className="w-6 h-6 text-blue-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Codelyzer
            </CardTitle>
          </div>
          <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
            Enter your GitHub repository to begin analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="repo-url" className="text-lg font-medium text-slate-700 dark:text-slate-300">
                GitHub Repository URL
              </Label>
              <Input
                id="repo-url"
                type="url"
                placeholder="https://github.com/username/repository"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                disabled={isLoading}
                className="text-base h-14 border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
              />
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Paste the full URL of any public GitHub repository
              </p>
            </div>
            <Button
              type="submit"
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isValidUrl(repoUrl) || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Analyze Repository
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
