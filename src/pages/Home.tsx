import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import DecorativeBlob from "@/components/DecorativeBlob";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Target, ArrowRight, Zap, Users, TrendingUp, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      icon: FileText,
      title: t("service1Title"),
      description: t("service1Description"),
      price: t("service1Price"),
      features: [
        t("service1Feature1"),
        t("service1Feature2"),
        t("service1Feature3"),
        t("service1Feature4"),
      ],
    },
    {
      icon: Sparkles,
      title: t("service2Title"),
      description: t("service2Description"),
      price: t("service2Price"),
      features: [
        t("service2Feature1"),
        t("service2Feature2"),
        t("service2Feature3"),
        t("service2Feature4"),
      ],
    },
    {
      icon: Target,
      title: t("service3Title"),
      description: t("service3Description"),
      price: t("service3Price"),
      features: [
        t("service3Feature1"),
        t("service3Feature2"),
        t("service3Feature3"),
        t("service3Feature4"),
      ],
    },
  ];

  const stats = [
    { icon: Users, value: "50+", label: t("clientsHelped") },
    { icon: TrendingUp, value: "87%", label: t("interviewRate") },
    { icon: Zap, value: "48h", label: t("avgTurnaround") },
    { icon: Star, value: "5.0", label: t("clientRating") },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <SEO
        title={language === "fr" ? "Accueil" : "Home"}
        description={t("homeSubtitle")}
        keywords={language === "fr" ? "conseil carrière, CV, recherche d'emploi, Canada" : "career consulting, resume, job search, Canada"}
      />
      <Navigation />
      <main id="main-content" className="flex-grow" role="main">
        {/* Hero Section - Split Layout */}
        <section className="relative min-h-[90vh] flex items-center bg-mesh">
          <DecorativeBlob className="w-[500px] h-[500px] -top-20 -left-20" variant="primary" />
          <DecorativeBlob className="w-[400px] h-[400px] top-1/2 right-0" variant="secondary" />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary">
                    {t("homeBadge")}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
                  {t("homeTitlePart1")}{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {t("homeTitlePart2")}
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  {t("homeSubtitle")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 shadow-glow hover:shadow-brutal transition-all">
                    <Link to="/booking">{t("startJourney")} →</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8">
                    <Link to="/services">{t("viewServices")}</Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  {stats.slice(0, 2).map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon className="text-accent" size={20} />
                        <div>
                          <div className="font-bold text-lg">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl" />
                <img
                  src={heroImage}
                  alt={language === "fr" ? "Consultant en carrière professionnel" : "Professional career consultant"}
                  className="relative rounded-3xl shadow-brutal border-4 border-primary/10 w-full h-auto object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl shadow-brutal">
                  <div className="text-2xl font-bold">{t("yearsExperience")}</div>
                  <div className="text-sm">{t("expertConsulting")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                    <Icon className="mx-auto mb-3 text-secondary" size={32} />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section - Alternating Layout */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                {t("homeServicesTitle")}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t("homeServicesSubtitle")}
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

        {/* Why Different Section */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 relative overflow-hidden">
          <DecorativeBlob className="w-[600px] h-[600px] -top-40 -right-40" variant="accent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  {t("whyDifferentTitle")}
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    {t("whyDifferentP1")}
                  </p>
                  <p>
                    {t("whyDifferentP2")}
                  </p>
                  <p className="font-semibold text-foreground">
                    {t("whyDifferentP3")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: t("canadianMarketExpert"),
                    description: t("canadianMarketExpertDesc"),
                  },
                  {
                    title: t("atsProofStrategies"),
                    description: t("atsProofStrategiesDesc"),
                  },
                  {
                    title: t("personalizedApproach"),
                    description: t("personalizedApproachDesc"),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card p-6 rounded-2xl border-2 border-border hover:border-accent/50 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Unique Layout */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              {t("testimonialsTitle")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote: t("testimonial1Quote"),
                  author: t("testimonial1Author"),
                  role: t("testimonial1Role"),
                  highlight: t("testimonial1Highlight"),
                },
                {
                  quote: t("testimonial2Quote"),
                  author: t("testimonial2Author"),
                  role: t("testimonial2Role"),
                  highlight: t("testimonial2Highlight"),
                },
                {
                  quote: t("testimonial3Quote"),
                  author: t("testimonial3Author"),
                  role: t("testimonial3Role"),
                  highlight: t("testimonial3Highlight"),
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-card p-8 rounded-3xl border-2 border-border hover:shadow-brutal transition-all duration-300 animate-scale-in relative"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs font-bold">
                    {testimonial.highlight}
                  </div>
                  <div className="text-4xl text-accent mb-4">"</div>
                  <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
          <DecorativeBlob className="w-[500px] h-[500px] -bottom-20 -left-20 opacity-30" variant="secondary" />
          <DecorativeBlob className="w-[400px] h-[400px] top-0 right-0 opacity-20" variant="accent" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {t("ctaFinalTitle")}
            </h2>
            <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
              {t("ctaFinalSubtitle")}
            </p>
            <Button asChild size="lg" variant="hero" className="text-lg px-12 py-6 shadow-brutal hover:translate-y-1 transition-all">
              <Link to="/booking">{t("ctaFinalButton")}</Link>
            </Button>
            <p className="mt-6 text-primary-foreground/70 text-sm">
              {t("limitedAvailability")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
