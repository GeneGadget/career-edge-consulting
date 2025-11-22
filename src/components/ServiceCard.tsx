import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  features: string[];
  variant?: "left" | "right" | "center";
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, price, features, variant = "center", delay = 0 }: ServiceCardProps) => {
  const { t } = useLanguage();
  const alignmentClasses = {
    left: "md:flex-row",
    right: "md:flex-row-reverse",
    center: "flex-col",
  };

  return (
    <div
      className={`group flex ${alignmentClasses[variant]} gap-6 items-center bg-card rounded-3xl p-8 border-2 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-brutal hover:-translate-y-1 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-primary rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
            <Icon className="text-primary-foreground" size={40} />
          </div>
        </div>
      </div>

      <div className="flex-grow space-y-4">
        <div>
          <div className="flex items-baseline gap-3 mb-2">
            <h3 className="text-2xl font-bold">{title}</h3>
            <span className="text-2xl font-bold text-secondary">{price}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button asChild className="group-hover:translate-x-1 transition-transform">
          <Link to="/booking">{t("bookThisService")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
