import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import ErrorBoundary from "@/components/ErrorBoundary";
import CookieConsent from "@/components/CookieConsent";
import { AnalyticsProvider } from "@/hooks/useAnalytics";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <LanguageProvider translations={translations}>
            <AnalyticsProvider>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <CookieConsent />
              <Toaster />
              <Sonner />
            </AnalyticsProvider>
          </LanguageProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
