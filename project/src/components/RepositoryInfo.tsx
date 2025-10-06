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
    <div className="w-full space-y-4 animate-in slide-in-from-top duration-500">
      {onBack && (
        <Button
          variant="outline"
          onClick={onBack}
          className="gap-2 border-2 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      )}

      <Card className="shadow-xl border-2 border-blue-100 dark:border-blue-900 bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950">
        <CardHeader className="border-b border-slate-200 dark:border-slate-700 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                <Github className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100 truncate">
                  {repoInfo.repo}
                </CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                  {repoInfo.owner}/{repoInfo.repo}
                </p>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-3 py-1 flex-shrink-0">
              Analyzing
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Code2 className="w-4 h-4" />
              <span className="text-sm">Code Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <GitFork className="w-4 h-4" />
              <span className="text-sm">Auto Fork</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Star className="w-4 h-4" />
              <span className="text-sm">AI Fixes</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Real-time</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-slate-700 dark:text-slate-300 truncate">
              <span className="font-medium">URL:</span>{' '}
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
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
