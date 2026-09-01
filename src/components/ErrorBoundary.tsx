import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center p-6 text-stone-900">
          <div className="max-w-md w-full p-8 rounded-2xl bg-white border border-stone-200 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h2 className="font-editorial text-2xl text-stone-900">Something went wrong</h2>
            <p className="text-sm text-stone-600 font-light">
              An unexpected render error occurred. Please refresh the page to reload the portfolio.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-stone-900 text-white text-xs font-mono-code rounded-lg hover:bg-stone-800 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
