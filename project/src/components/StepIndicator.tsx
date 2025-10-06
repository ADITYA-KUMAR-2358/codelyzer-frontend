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
        'flex items-center gap-4 py-4 px-5 rounded-xl transition-all duration-300',
        isCompleted && 'bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500',
        isCurrent && 'bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 shadow-md scale-105',
        isFailedStep && 'bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500',
        !isCompleted && !isCurrent && !isFailedStep && 'bg-slate-50 dark:bg-slate-800/30 border-l-4 border-slate-300 dark:border-slate-700'
      )}
    >
      <div className="flex-shrink-0">
        {isFailedStep ? (
          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
            <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
        ) : isCompleted ? (
          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
        ) : isCurrent ? (
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <Circle className="w-5 h-5 text-slate-400 dark:text-slate-600" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <p
          className={cn(
            'text-base font-medium transition-colors',
            isFailedStep && 'text-red-700 dark:text-red-300 font-semibold',
            isCompleted && 'text-green-700 dark:text-green-300',
            isCurrent && 'text-blue-700 dark:text-blue-300 font-bold text-lg',
            !isCompleted && !isCurrent && !isFailedStep && 'text-slate-500 dark:text-slate-400'
          )}
        >
          {step.label}
        </p>
        {isCurrent && (
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 animate-pulse">
            In progress...
          </p>
        )}
      </div>
    </div>
  );
}
