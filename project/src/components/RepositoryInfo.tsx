import { Github, GitFork, Star, Clock, Code as Code2, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface RepositoryInfoProps {
  repoUrl: string;
  onBack?: () => void;
}

export function RepositoryInfo({ repoUrl, onBack }: RepositoryInfoProps) {
  const parseGitHubUrl = (url: string) => {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      return {
        owner: match[1],
        repo: match[2].replace('.git', ''),
      };
    }
    return null;
  };

  const repoInfo = parseGitHubUrl(repoUrl);

  if (!repoInfo) {
    return null;
  }

  return (
    <div className="w-full space-y-3 sm:space-y-4 px-2 sm:px-0 animate-in slide-in-from-top duration-500">
      {onBack && (
        <Button
          variant="outline"
          onClick={onBack}
          className="gap-2 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      )}

      <Card className="shadow-xl border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5 dark:from-slate-900 dark:to-primary/10">
        <CardHeader className="border-b border-slate-200 dark:border-slate-700 pb-3 sm:pb-4 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                <Github className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 truncate">
                  {repoInfo.repo}
                </CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                  {repoInfo.owner}/{repoInfo.repo}
                </p>
              </div>
            </div>
            <Badge className="bg-primary text-white border-0 px-2 sm:px-3 py-0.5 sm:py-1 flex-shrink-0 text-xs sm:text-sm">
              Analyzing
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-slate-400">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Code Analysis</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-slate-400">
              <GitFork className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Auto Fork</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-slate-400">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">AI Fixes</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Real-time</span>
            </div>
          </div>
          <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 break-all sm:truncate">
              <span className="font-medium">URL:</span>{' '}
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                {repoUrl}
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
