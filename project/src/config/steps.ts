import { StepConfig } from '../types';

export const ANALYSIS_STEPS: StepConfig[] = [
  { id: 'queued', label: 'Queued', order: 0 },
  { id: 'forking', label: 'Forking Repository', order: 1 },
  { id: 'cloning', label: 'Cloning Repository', order: 2 },
  { id: 'analyzing', label: 'Running Static Analysis', order: 3 },
  { id: 'fixing', label: 'Generating LLM Fixes', order: 4 },
  { id: 'pushing', label: 'Pushing Branch', order: 5 },
  { id: 'creating_pr', label: 'Creating Pull Request', order: 6 },
  { id: 'complete', label: 'Analysis Complete', order: 7 },
];
