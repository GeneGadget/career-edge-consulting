import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import DecorativeBlob from "@/components/DecorativeBlob";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      icon: FileText,
      title: t("service1TitleFull"),
      description: t("service1DescriptionFull"),
      price: t("service1PriceFull"),
      features: [
        t("service1Feature1Full"),
        t("service1Feature2Full"),
        t("service1Feature3Full"),
        t("service1Feature4Full"),
        t("service1Feature5Full"),
        t("service1Feature6Full"),
      ],
    },
    {
      icon: Sparkles,
      title: t("service2TitleFull"),
      description: t("service2DescriptionFull"),
      price: t("service2PriceFull"),
      features: [
        t("service2Feature1Full"),
        t("service2Feature2Full"),
        t("service2Feature3Full"),
        t("service2Feature4Full"),
        t("service2Feature5Full"),
        t("service2Feature6Full"),
      ],
    },
    {
      icon: Target,
      title: t("service3TitleFull"),
      description: t("service3DescriptionFull"),
      price: t("service3PriceFull"),
      features: [
        t("service3Feature1Full"),
        t("service3Feature2Full"),
        t("service3Feature3Full"),
        t("service3Feature4Full"),
        t("service3Feature5Full"),
        t("service3Feature6Full"),
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <SEO
        title={t("servicesTitle")}
        description={t("servicesSubtitle")}
        keywords={language === "fr" ? "services CV, révision CV, coaching carrière" : "resume services, CV review, career coaching"}
      />
      <Navigation />
      <main id="main-content" className="flex-grow" role="main">
        <section className="py-32 bg-mesh relative">
          <DecorativeBlob className="w-[500px] h-[500px] -top-20 right-0" variant="primary" />
          <DecorativeBlob className="w-[400px] h-[400px] bottom-0 -left-20" variant="secondary" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
                  {t("servicesBadge")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                {t("servicesHeading")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("servicesSubheading")}
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  {...service}
                  variant={idx === 1 ? "right" : "left"}
                  delay={idx * 200}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">{t("faqTitle")}</h2>
              <div className="grid gap-6">
                {[
                  {
                    q: t("faq1Question"),
                    a: t("faq1Answer"),
                  },
                  {
                    q: t("faq2Question"),
                    a: t("faq2Answer"),
                  },
                  {
                    q: t("faq3Question"),
                    a: t("faq3Answer"),
                  },
                  {
                    q: t("faq4Question"),
                    a: t("faq4Answer"),
                  },
                  {
                    q: t("faq5Question"),
                    a: t("faq5Answer"),
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-card p-6 rounded-2xl border-2 border-border hover:border-accent/50 transition-all animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
          <DecorativeBlob className="w-[400px] h-[400px] -bottom-20 -left-20 opacity-30" variant="secondary" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {t("servicesCtaTitle")}
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              {t("servicesCtaSubtitle")}
            </p>
            <Button asChild size="lg" variant="hero" className="shadow-brutal hover:translate-y-1 transition-all">
              <Link to="/booking">{t("getStartedToday")} →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
