import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={t("notFoundMessage")}
        description={t("notFoundDescription")}
      />
      <Navigation />
      <main id="main-content" className="flex-grow flex items-center justify-center bg-mesh relative" role="main">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-9xl font-bold text-primary/20">{t("notFoundTitle")}</h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("notFoundMessage")}</h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t("notFoundDescription")}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/">
                  <Home className="mr-2" size={20} />
                  {t("returnHome")}
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate(-1)}
                className="shadow-glow"
              >
                <ArrowLeft className="mr-2" size={20} />
                {t("goBack")}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
