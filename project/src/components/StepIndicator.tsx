import { CircleCheck as CheckCircle, Circle as XCircle, Loader as Loader2, Circle } from 'lucide-react';
import { cn } from '../lib/utils';
import { AnalysisStep } from '../types';

interface StepIndicatorProps {
  step: {
    id: AnalysisStep;
    label: string;
    order: number;
  };
  currentStep: AnalysisStep;
  isFailed: boolean;
}

export function StepIndicator({ step, currentStep, isFailed }: StepIndicatorProps) {
  const STEP_ORDER: Record<AnalysisStep, number> = {
    queued: 0,
    forking: 1,
    cloning: 2,
    analyzing: 3,
    fixing: 4,
    pushing: 5,
    creating_pr: 6,
    complete: 7,
    failed: -1,
  };

  const currentOrder = STEP_ORDER[currentStep];
  const stepOrder = step.order;

  const isCompleted = currentOrder > stepOrder;
  const isCurrent = currentOrder === stepOrder && !isFailed;
  const isFailedStep = isFailed && currentOrder === stepOrder;

  return (
    <div
      className={cn(
        'flex items-center gap-2 sm:gap-3 md:gap-4 py-3 sm:py-4 px-3 sm:px-4 md:px-5 rounded-lg sm:rounded-xl transition-all duration-300',
        isCompleted && 'bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500',
        isCurrent && 'bg-primary/5 dark:bg-primary/10 border-l-4 border-primary shadow-md scale-[1.02] sm:scale-105',
        isFailedStep && 'bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500',
        !isCompleted && !isCurrent && !isFailedStep && 'bg-slate-50 dark:bg-slate-800/30 border-l-4 border-slate-300 dark:border-slate-700'
      )}
    >
      <div className="flex-shrink-0">
        {isFailedStep ? (
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400" />
          </div>
        ) : isCompleted ? (
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
          </div>
        ) : isCurrent ? (
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-spin" />
          </div>
        ) : (
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 dark:text-slate-600" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <p
          className={cn(
            'text-sm sm:text-base font-medium transition-colors',
            isFailedStep && 'text-red-700 dark:text-red-300 font-semibold',
            isCompleted && 'text-green-700 dark:text-green-300',
            isCurrent && 'text-primary dark:text-primary font-bold text-base sm:text-lg',
            !isCompleted && !isCurrent && !isFailedStep && 'text-slate-500 dark:text-slate-400'
          )}
        >
          {step.label}
        </p>
        {isCurrent && (
          <p className="text-[10px] sm:text-xs text-primary mt-0.5 sm:mt-1 animate-pulse">
            In progress...
          </p>
        )}
      </div>
    </div>
  );
}
