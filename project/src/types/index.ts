export type AnalysisStep =
  | 'queued'
  | 'forking'
  | 'cloning'
  | 'analyzing'
  | 'fixing'
  | 'pushing'
  | 'creating_pr'
  | 'complete'
  | 'failed';

export interface JobStatus {
  status: AnalysisStep;
  message?: string;
  pr_url?: string;
  error?: string;
  job_id?: string;
}

export interface StepConfig {
  id: AnalysisStep;
  label: string;
  order: number;
}
