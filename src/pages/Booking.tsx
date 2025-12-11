import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DecorativeBlob from "@/components/DecorativeBlob";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CreditCard, Shield, Zap, Upload } from "lucide-react";
import { useEffect, useRef, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

declare global {
  interface Window {
    Calendly: any;
  }
}

const Booking = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    // Cleanup previous widget
    if (calendlyRef.current) {
      calendlyRef.current.innerHTML = '';
    }

    // Build Calendly URL with locale parameter
    const baseUrl = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/careeredgeconsulting/";
    // Calendly supports locale via URL parameter: ?locale=fr or ?locale=en
    const locale = language === "fr" ? "fr" : "en";
    const calendlyUrl = baseUrl.includes("?") 
      ? `${baseUrl}&locale=${locale}`
      : `${baseUrl}?locale=${locale}`;

    // Load Calendly script if not already loaded
    const loadCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        window.Calendly.initInlineWidget({
          // Basic Package: 2-Page Resume Review ($75 / $50 for students)
          url: calendlyUrl,
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {
            utmCampaign: "website",
            utmSource: "careeredgeconsulting",
            utmMedium: "website",
          },
        });
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      loadCalendly();
    } else {
      // Wait for script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          loadCalendly();
        }
      }, 100);

      // Cleanup after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000);
    }

    // Cleanup function
    return () => {
      if (calendlyRef.current) {
        calendlyRef.current.innerHTML = '';
      }
    };
  }, [language]); // Re-run when language changes
  
  const features = useMemo(() => [
    {
      icon: Calendar,
      title: t("easyScheduling"),
      description: t("easySchedulingDesc"),
    },
    {
      icon: CreditCard,
      title: t("securePayments"),
      description: t("securePaymentsDesc"),
    },
    {
      icon: Clock,
      title: t("automatedReminders"),
      description: t("automatedRemindersDesc"),
    },
    {
      icon: Shield,
      title: t("flexiblePolicies"),
      description: t("flexiblePoliciesDesc"),
    },
  ], [t]);

  const policies = useMemo(() => [
    {
      title: t("cancellationPolicy"),
      content: t("cancellationPolicyContent"),
    },
    {
      title: t("rescheduling"),
      content: t("reschedulingContent"),
    },
    {
      title: t("payment"),
      content: t("paymentContent"),
    },
    {
      title: t("whatToBring"),
      content: t("whatToBringContent"),
    },
  ], [t]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <SEO
        title={t("bookingTitle")}
        description={t("bookingSubtitle")}
        keywords={language === "fr" ? "réserver, consultation, rendez-vous" : "book, consultation, appointment"}
      />
      <Navigation />
      <main id="main-content" className="flex-grow" role="main">
        <section className="py-32 bg-mesh relative">
          <DecorativeBlob className="w-[500px] h-[500px] -top-20 right-0" variant="primary" />
          <DecorativeBlob className="w-[400px] h-[400px] bottom-0 -left-20" variant="secondary" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
                  {t("bookingBadge")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                {t("bookingTitle")}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t("bookingSubtitle")}
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-10 border-2 border-accent/20 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-primary-foreground" size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{t("bookingHeading")}</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t("bookingDescription")}
                </p>
              </div>

              {/* Preparation section */}
              <div className="bg-card rounded-3xl p-8 border-2 border-border mb-8 animate-fade-in">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-accent/20 rounded-xl blur-lg" />
                    <div className="relative w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Upload className="text-primary-foreground" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-accent">{t("beforeYouBook")}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t("beforeYouBookDesc")}
                    </p>
                    <div className="bg-muted/50 rounded-xl p-4 border border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">{t("resumeServices")}:</strong> {t("uploadResume")}<br/>
                        <strong className="text-foreground">{t("strategyCoaching")}:</strong> {t("noFilesNeeded")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div 
                  ref={calendlyRef}
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-10 text-center">{t("whatToExpect")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-card rounded-3xl p-8 border-2 border-border hover:border-accent/50 hover:shadow-brutal transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                          <div className="relative w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <Icon className="text-primary-foreground" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">{t("finePrint")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {policies.map((policy, idx) => (
                  <div
                    key={idx}
                    className="bg-card rounded-3xl p-8 border-2 border-border animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <h3 className="font-bold text-xl mb-3 text-accent">{policy.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{policy.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
          <DecorativeBlob className="w-[400px] h-[400px] -top-20 -right-20 opacity-20" variant="secondary" />
          <DecorativeBlob className="w-[300px] h-[300px] bottom-0 left-0 opacity-20" variant="accent" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t("stillHaveQuestions")}
            </h2>
            <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
              {t("stillHaveQuestionsDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="hero" className="shadow-brutal">
                <a href="mailto:info@careeredgeconsulting.ca">{t("askQuestion")} →</a>
              </Button>
              <Button asChild size="lg" variant="hero-outline">
                <a href="/services#faq">{t("viewFAQ")}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
