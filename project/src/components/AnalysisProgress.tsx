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
    <Card className="w-full shadow-2xl border-2 border-purple-100 dark:border-purple-900 bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950 animate-in slide-in-from-bottom duration-500">
      <CardHeader className="border-b border-slate-200 dark:border-slate-700 pb-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-purple-600 animate-pulse" />
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Analysis Progress
          </CardTitle>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          {isFailed ? 'Analysis encountered an error' : 'Processing your repository...'}
        </p>
      </CardHeader>
      <CardContent className="space-y-2 pt-6">
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
