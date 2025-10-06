import { Github, Sparkles, Code as Code2, GitPullRequest, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface HomePageProps {
  onGetStarted: () => void;
}

export function HomePage({ onGetStarted }: HomePageProps) {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: 'Static Analysis',
      description: 'Comprehensive code analysis to identify bugs, security issues, and code smells',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: 'AI-Powered Fixes',
      description: 'Leverage advanced LLM technology to automatically generate intelligent code improvements',
    },
    {
      icon: <GitPullRequest className="w-8 h-8 text-green-600" />,
      title: 'Automated PRs',
      description: 'Automatically create pull requests with detailed explanations and suggested fixes',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Fast Processing',
      description: 'Quick turnaround time with real-time progress tracking for your analysis',
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'Secure & Safe',
      description: 'Your code is processed securely with industry-standard best practices',
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-600" />,
      title: 'Save Time',
      description: 'Reduce manual code review time and focus on building great features',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-6 pt-8">
        <div className="flex items-center justify-center gap-3">
          <div className="relative">
            <Github className="w-16 h-16 text-slate-800 dark:text-slate-200" />
            <Sparkles className="w-8 h-8 text-blue-500 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Codelyzer
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Automated Code Analysis & Improvement powered by AI
        </p>
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Transform your GitHub repositories with intelligent static analysis and AI-generated fixes.
          Get automated pull requests with code improvements in minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 dark:hover:border-blue-700"
          >
            <CardHeader>
              <div className="mb-3">{feature.icon}</div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-6 pb-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Ready to improve your code?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
            Start by submitting your GitHub repository and let AI do the heavy lifting
          </p>
          <Button
            onClick={onGetStarted}
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Free to use</span>
          </div>
          <div className="hidden sm:block text-slate-300 dark:text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>No sign-up required</span>
          </div>
          <div className="hidden sm:block text-slate-300 dark:text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Instant results</span>
          </div>
        </div>
      </div>
    </div>
  );
}
