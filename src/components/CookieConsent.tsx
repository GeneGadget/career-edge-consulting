import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t-2 border-border shadow-brutal p-4 md:p-6 animate-slide-up"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="text-primary mt-1 flex-shrink-0" size={24} />
            <div className="flex-1">
              <h3 id="cookie-consent-title" className="font-bold text-lg mb-2">
                {language === "fr" ? "Nous utilisons des cookies" : "We Use Cookies"}
              </h3>
              <p id="cookie-consent-description" className="text-sm text-muted-foreground mb-2">
                {language === "fr" 
                  ? "Nous utilisons des cookies pour améliorer votre expérience, analyser les performances du site et personnaliser le contenu. En continuant, vous acceptez notre utilisation des cookies."
                  : "We use cookies to enhance your experience, analyze site performance, and personalize content. By continuing, you consent to our use of cookies."
                }
              </p>
              <Link 
                to="/privacy" 
                className="text-sm text-primary hover:underline"
                aria-label={language === "fr" ? "En savoir plus sur notre politique de confidentialité" : "Learn more about our privacy policy"}
              >
                {language === "fr" ? "En savoir plus" : "Learn More"}
              </Link>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="flex-1 md:flex-none"
              aria-label={language === "fr" ? "Refuser les cookies" : "Decline cookies"}
            >
              {language === "fr" ? "Refuser" : "Decline"}
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 md:flex-none shadow-glow"
              aria-label={language === "fr" ? "Accepter les cookies" : "Accept cookies"}
            >
              {language === "fr" ? "Accepter" : "Accept"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

