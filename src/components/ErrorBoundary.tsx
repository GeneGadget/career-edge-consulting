import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-2xl w-full text-center space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <AlertTriangle className="text-red-500" size={64} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Something went wrong
              </h1>
              <p className="text-xl text-gray-600">
                We're sorry, but something unexpected happened. Please try refreshing the page or return to the homepage.
              </p>
              {this.state.error && (
                <details className="text-left bg-gray-100 p-4 rounded-lg mb-4">
                  <summary className="cursor-pointer font-semibold mb-2 text-gray-800">
                    Error Details
                  </summary>
                  <pre className="text-sm text-gray-600 overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()} 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Refresh Page
              </button>
              <Link 
                to="/"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold inline-flex items-center justify-center gap-2"
              >
                <Home size={20} />
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

