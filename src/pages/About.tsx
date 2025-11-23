import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DecorativeBlob from "@/components/DecorativeBlob";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, TrendingUp, Target, Zap, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();
  
  const values = [
    {
      icon: Heart,
      title: t("value1Title"),
      description: t("value1Desc"),
    },
    {
      icon: Target,
      title: t("value2Title"),
      description: t("value2Desc"),
    },
    {
      icon: Zap,
      title: t("value3Title"),
      description: t("value3Desc"),
    },
  ];

  const credentials = [
    { icon: Award, text: t("credential1") },
    { icon: Users, text: t("credential2") },
    { icon: TrendingUp, text: t("credential3") },
    { icon: Award, text: t("credential4") },
    { icon: Heart, text: t("credential6") },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <SEO
        title={t("aboutTitle")}
        description={t("aboutSubtitle")}
        keywords={language === "fr" ? "à propos, Amy, conseil carrière" : "about, Amy, career consultant"}
      />
      <Navigation />
      <main id="main-content" className="flex-grow" role="main">
        <section className="py-32 bg-mesh relative">
          <DecorativeBlob className="w-[500px] h-[500px] -top-20 -right-20" variant="primary" />
          <DecorativeBlob className="w-[400px] h-[400px] top-1/2 -left-20" variant="secondary" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary">
                    {t("aboutBadge")}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                  {t("aboutHeading")}
                </h1>
                <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                  {t("aboutSubheading")}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    {t("aboutStoryP1")}
                  </p>
                  <p>
                    {t("aboutStoryP2")}
                  </p>
                  <p>
                    {t("aboutStoryP3")}
                  </p>
                  <p className="font-semibold text-xl text-foreground">
                    {t("aboutStoryP4")}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 border-2 border-accent/20">
                  <h3 className="text-2xl font-bold mb-6">{t("whyWorkWithMe")}</h3>
                  <ul className="space-y-4">
                    {[
                      t("whyWork1"),
                      t("whyWork2"),
                      t("whyWork3"),
                      t("whyWork4"),
                      t("whyWork5"),
                      t("whyWork6"),
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-4xl font-bold mb-10 text-center">{t("howIWork")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-card rounded-3xl p-8 border-2 border-border hover:border-accent/50 hover:shadow-brutal transition-all duration-500 animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                            <Icon className="text-primary-foreground" size={28} />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-3xl p-12 relative overflow-hidden">
                <DecorativeBlob className="w-[300px] h-[300px] -top-20 -right-20 opacity-20" variant="secondary" />
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold mb-8 text-center">{t("credentialsTitle")}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {credentials.map((credential, index) => {
                      const Icon = credential.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-2xl border border-primary-foreground/20 animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <Icon className="text-secondary flex-shrink-0" size={24} />
                          <span className="font-medium text-sm">{credential.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t("aboutCtaTitle")}
            </h2>
            <p className="text-xl mb-10 text-muted-foreground max-w-2xl mx-auto">
              {t("aboutCtaSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/booking">{t("navBooking")} →</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">{t("sendAMessage")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
