import { Github, Sparkles, Code as Code2, GitPullRequest, ArrowRight, Zap, Shield, Clock, Bug, TrendingUp, CircleCheck as CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface HomePageProps {
  onGetStarted: () => void;
}

export function HomePage({ onGetStarted }: HomePageProps) {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: 'Static Analysis',
      description: 'Comprehensive code analysis to identify bugs, security issues, and code smells',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: 'AI-Powered Fixes',
      description: 'Leverage advanced LLM technology to automatically generate intelligent code improvements',
    },
    {
      icon: <GitPullRequest className="w-8 h-8 text-green-600" />,
      title: 'Automated PRs',
      description: 'Automatically create pull requests with detailed explanations and suggested fixes',
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: 'Fast Processing',
      description: 'Quick turnaround time with real-time progress tracking for your analysis',
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: 'Secure & Safe',
      description: 'Your code is processed securely with industry-standard best practices',
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-600" />,
      title: 'Save Time',
      description: 'Reduce manual code review time and focus on building great features',
    },
    {
      icon: <Bug className="w-8 h-8 text-rose-600" />,
      title: 'Bug Detection',
      description: 'Automatically identify potential bugs and vulnerabilities before they reach production',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-600" />,
      title: 'Code Quality',
      description: 'Improve code maintainability and readability with intelligent suggestions',
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-lime-600" />,
      title: 'Best Practices',
      description: 'Enforce coding standards and best practices across your entire codebase',
    },
  ];

  const stats = [
    { label: 'Repositories Analyzed', value: '10,000+' },
    { label: 'Issues Fixed', value: '50,000+' },
    { label: 'Time Saved', value: '5,000hrs' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 py-2 sm:py-4">
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 pt-2 sm:pt-4">
        <div className="flex items-center justify-center gap-3">
          <div className="relative">
            <Github className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-slate-800 dark:text-slate-200" />
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-primary absolute -top-1 -right-1 sm:-top-2 sm:-right-2 animate-pulse" />
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary border-primary/20">
            AI-Powered Code Analysis
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 bg-clip-text text-transparent leading-tight px-2">
            Codelyzer
          </h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto font-medium px-4">
          Automated Code Analysis & Improvement powered by AI
        </p>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
          Transform your GitHub repositories with intelligent static analysis and AI-generated fixes.
          Get automated pull requests with code improvements in minutes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4 px-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-2 sm:px-0">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary/50 group bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
          >
            <CardHeader>
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit group-hover:scale-110 transition-transform">{feature.icon}</div>
              <CardTitle className="text-lg sm:text-xl font-bold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm sm:text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-6 sm:space-y-8 pb-2 sm:pb-4 px-2 sm:px-0">
        <div className="bg-gradient-to-br from-primary/5 via-cyan-50 to-emerald-50 dark:from-primary/10 dark:via-slate-900 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-primary/30 shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-slate-100">
            Ready to improve your code?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Start by submitting your GitHub repository and let AI do the heavy lifting
          </p>
          <Button
            onClick={onGetStarted}
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-7 bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-300 group hover:scale-105 w-full sm:w-auto"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 px-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Free to use</span>
          </div>
          <div className="hidden sm:block text-slate-300 dark:text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
            <span className="font-medium">No sign-up required</span>
          </div>
          <div className="hidden sm:block text-slate-300 dark:text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Instant results</span>
          </div>
        </div>
      </div>
    </div>
  );
}
