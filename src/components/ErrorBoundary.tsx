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
        <div className="min-h-screen bg-white flex items-center justify-center p-6 text-black">
          <div className="max-w-md w-full p-8 rounded-2xl bg-white border border-black/15 shadow-md shadow-black/5 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h2 className="font-editorial text-2xl text-black font-semibold">Something went wrong</h2>
            <p className="text-sm text-black/80 font-normal">
              An unexpected render error occurred. Please refresh the page to reload the portfolio.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-mono-code font-semibold rounded-xl shadow-md shadow-emerald-600/30 transition-all"
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
