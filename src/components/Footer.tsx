import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Career Edge Consulting</h3>
            <p className="text-primary-foreground/80">
              {t("footerTagline")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t("navServices")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t("navAbout")}
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t("navBooking")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t("navContact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("connect")}</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@careeredgeconsulting.ca"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={18} />
                info@careeredgeconsulting.ca
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>{t("footerCopyright").replace("{year}", currentYear.toString())}</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              {t("privacyPolicy")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
