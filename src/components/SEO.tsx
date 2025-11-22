import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO = ({ title, description, keywords, image }: SEOProps) => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const baseUrl = window.location.origin;
    const currentPath = location.pathname;
    
    // Update document language
    document.documentElement.lang = language;
    
    // Update title
    const fullTitle = title 
      ? `${title} | Career Edge Consulting Inc.`
      : "Career Edge Consulting Inc. | Resume & Job Search Coaching";
    document.title = fullTitle;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag("description", description);
      updateMetaTag("og:description", description, true);
      updateMetaTag("twitter:description", description);
    }
    
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }
    
    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", `${baseUrl}${currentPath}`, true);
    updateMetaTag("og:image", image || `${baseUrl}/opengraph-image.png`, true);
    updateMetaTag("og:locale", language === "fr" ? "fr_CA" : "en_CA", true);
    
    // Twitter tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:image", image || `${baseUrl}/opengraph-image.png`);
    
    // Language alternates (hreflang)
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(link => link.remove());
    
    ["en", "fr"].forEach((lang) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", lang);
      link.setAttribute("href", `${baseUrl}${currentPath}?lang=${lang}`);
      document.head.appendChild(link);
    });
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${baseUrl}${currentPath}`);
    
  }, [language, location.pathname, title, description, keywords, image]);

  return null;
};

export default SEO;

