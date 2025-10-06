import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { StepIndicator } from './StepIndicator';
import { ANALYSIS_STEPS } from '../config/steps';
import { AnalysisStep } from '../types';
import { Sparkles } from 'lucide-react';

interface AnalysisProgressProps {
  currentStep: AnalysisStep;
  isFailed: boolean;
}

export function AnalysisProgress({ currentStep, isFailed }: AnalysisProgressProps) {
  return (
    <Card className="w-full shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5 dark:from-slate-900 dark:to-primary/10 animate-in slide-in-from-bottom duration-500 mx-2 sm:mx-0">
      <CardHeader className="border-b border-slate-200 dark:border-slate-700 pb-3 sm:pb-4 px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
          <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            Analysis Progress
          </CardTitle>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 sm:mt-2">
          {isFailed ? 'Analysis encountered an error' : 'Processing your repository...'}
        </p>
      </CardHeader>
      <CardContent className="space-y-1.5 sm:space-y-2 pt-4 sm:pt-6 px-4 sm:px-6">
        {ANALYSIS_STEPS.map((step) => (
          <StepIndicator
            key={step.id}
            step={step}
            currentStep={currentStep}
            isFailed={isFailed}
          />
        ))}
      </CardContent>
    </Card>
  );
}
