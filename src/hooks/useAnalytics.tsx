import { createContext, useContext, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

// Analytics Context
const AnalyticsContext = createContext<{
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackLanguageChange: (newLanguage: string) => void;
  trackFormSubmission: (formName: string, success: boolean) => void;
  trackButtonClick: (buttonName: string, location?: string) => void;
} | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    // Return no-op functions if context is not available
    return {
      trackEvent: () => {},
      trackLanguageChange: () => {},
      trackFormSubmission: () => {},
      trackButtonClick: () => {},
    };
  }
  return context;
};

// Analytics Provider Component
export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  
  // Get language from localStorage directly to avoid context dependency
  const getLanguage = () => {
    return (localStorage.getItem("language") as "en" | "fr") || "en";
  };

  useEffect(() => {
    // Track page views
    const trackPageView = () => {
      const currentLanguage = getLanguage();
      
      // Example: Google Analytics 4
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("config", import.meta.env.VITE_GA_MEASUREMENT_ID || "", {
          page_path: location.pathname + location.search,
          page_language: currentLanguage,
        });
      }

      // Example: Plausible
      if (typeof window !== "undefined" && (window as any).plausible) {
        (window as any).plausible("pageview", {
          props: { language: currentLanguage, path: location.pathname },
        });
      }

      // Console log for development
      if (import.meta.env.DEV) {
        console.log("Page view tracked:", {
          path: location.pathname,
          language: currentLanguage,
          timestamp: new Date().toISOString(),
        });
      }
    };

    trackPageView();
  }, [location.pathname]);

  // Track custom events
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    const currentLanguage = getLanguage();
    
    // Google Analytics 4
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, {
        ...properties,
        language: currentLanguage,
      });
    }

    // Plausible
    if (typeof window !== "undefined" && (window as any).plausible) {
      (window as any).plausible(eventName, {
        props: { ...properties, language: currentLanguage },
      });
    }

    // Console log for development
    if (import.meta.env.DEV) {
      console.log("Event tracked:", { eventName, properties, language: currentLanguage });
    }
  };

  // Track language change
  const trackLanguageChange = (newLanguage: string) => {
    const currentLanguage = getLanguage();
    trackEvent("language_change", {
      from: currentLanguage,
      to: newLanguage,
    });
  };

  // Track form submission
  const trackFormSubmission = (formName: string, success: boolean) => {
    trackEvent("form_submission", {
      form_name: formName,
      success,
    });
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent("button_click", {
      button_name: buttonName,
      location: location || window.location.pathname,
    });
  };

  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent,
        trackLanguageChange,
        trackFormSubmission,
        trackButtonClick,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

