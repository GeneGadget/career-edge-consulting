import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnalytics } from "@/hooks/useAnalytics";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { trackLanguageChange, trackButtonClick } = useAnalytics();

  const navLinks = [
    { to: "/", label: "navHome" },
    { to: "/services", label: "navServices" },
    { to: "/about", label: "navAbout" },
    { to: "/contact", label: "navContact" },
  ];

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    trackLanguageChange(newLanguage);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b-2 border-border">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
              <h1 className="relative text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                CareerEdge Consulting
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-semibold transition-all duration-300 group ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {t(link.label)}
                {location.pathname === link.to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button 
              asChild 
              className="shadow-glow"
            >
              <Link 
                to="/booking" 
                aria-label={t("navBookNow")}
                onClick={() => trackButtonClick("book_now_nav", "/")}
              >
                {t("navBookNow")} →
              </Link>
            </Button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={language === "fr" ? "Switch to English" : "Passer au français"}
              aria-pressed={language === "fr"}
            >
              <Languages size={18} aria-hidden="true" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.label)}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                {t("navBooking")}
              </Link>
            </Button>
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-accent transition-colors border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={language === "fr" ? "Switch to English" : "Passer au français"}
              aria-pressed={language === "fr"}
            >
              <Languages size={18} aria-hidden="true" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
