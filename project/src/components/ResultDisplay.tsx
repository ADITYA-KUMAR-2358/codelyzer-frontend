import { Circle as XCircle, ExternalLink, PartyPopper, Chromium as Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { cn } from '../lib/utils';

interface ResultDisplayProps {
  type: 'success' | 'error';
  title: string;
  message: string;
  prUrl?: string;
  onReset: () => void;
}

export function ResultDisplay({ type, title, message, prUrl, onReset }: ResultDisplayProps) {
  return (
    <div className="w-full space-y-4 sm:space-y-6 px-2 sm:px-0 animate-in slide-in-from-bottom duration-500">
      <Card
        className={cn(
          'shadow-2xl border-2',
          type === 'success'
            ? 'border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950'
            : 'border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950 dark:to-rose-950'
        )}
      >
        <CardContent className="pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 sm:px-6">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div
              className={cn(
                'w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg',
                type === 'success'
                  ? 'bg-green-100 dark:bg-green-900/50'
                  : 'bg-red-100 dark:bg-red-900/50'
              )}
            >
              {type === 'success' ? (
                <PartyPopper className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 dark:text-red-400" />
              )}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h2
                className={cn(
                  'text-2xl sm:text-3xl font-bold',
                  type === 'success'
                    ? 'text-green-800 dark:text-green-200'
                    : 'text-red-800 dark:text-red-200'
                )}
              >
                {title}
              </h2>
              <p
                className={cn(
                  'text-base sm:text-lg max-w-xl mx-auto px-4',
                  type === 'success'
                    ? 'text-green-700 dark:text-green-300'
                    : 'text-red-700 dark:text-red-300'
                )}
              >
                {message}
              </p>
            </div>

            {prUrl && (
              <Button
                asChild
                size="lg"
                className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto"
              >
                <a href={prUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Pull Request
                </a>
              </Button>
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full pt-3 sm:pt-4">
              <Button
                onClick={onReset}
                variant="outline"
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold border-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Analyze Another Repository
              </Button>
              <Button
                onClick={onReset}
                variant="outline"
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold border-2 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
