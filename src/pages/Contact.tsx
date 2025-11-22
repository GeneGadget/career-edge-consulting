import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DecorativeBlob from "@/components/DecorativeBlob";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitContactForm } from "@/utils/formSubmission";
import { useAnalytics } from "@/hooks/useAnalytics";

const Contact = () => {
  const { t, language } = useLanguage();
  const { trackFormSubmission, trackButtonClick } = useAnalytics();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactMethod: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        contactMethod: formData.contactMethod,
        message: formData.message,
      });

      if (result.success) {
        toast.success(t("messageSent"));
        trackFormSubmission("contact_form", true);
        setFormData({ name: "", email: "", contactMethod: "", message: "" });
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
        trackFormSubmission("contact_form", false);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      trackFormSubmission("contact_form", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t("emailUs"),
      detail: "info@careeredgeconsulting.ca",
      link: "mailto:info@careeredgeconsulting.ca",
      description: t("emailUsDesc"),
    },
    {
      icon: MapPin,
      title: t("location"),
      detail: "Toronto & Online",
      description: t("locationDesc"),
    },
    {
      icon: Clock,
      title: t("officeHours"),
      detail: "Mon-Fri: 6-9 PM | Weekends: 9 AM-5 PM",
      description: t("officeHoursDesc"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <SEO
        title={language === "fr" ? "Contactez-nous" : "Contact Us"}
        description={t("contactSubheading")}
        keywords={language === "fr" ? "contact, consultation, carrière, emploi" : "contact, consultation, career, job search"}
      />
      <Navigation />
      <main id="main-content" className="flex-grow" role="main">
        <section className="py-32 bg-mesh relative">
          <DecorativeBlob className="w-[500px] h-[500px] -top-20 right-0" variant="primary" />
          <DecorativeBlob className="w-[400px] h-[400px] bottom-0 -left-20" variant="accent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
                  {t("contactBadge")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                {t("contactHeading")}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t("contactSubheading")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="bg-card rounded-3xl p-8 border-2 border-border shadow-card">
                  <h2 className="text-2xl font-bold mb-6">{t("sendMessageForm")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-base">{t("yourName")}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base">{t("emailAddress")}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactMethod" className="text-base">{t("preferredContactMethod")}</Label>
                      <Select
                        value={formData.contactMethod}
                        onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder={t("contactMethodPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="zoom">Zoom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base">{t("message")}</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-2"
                        placeholder={t("messagePlaceholder")}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full shadow-glow" 
                      size="lg"
                      disabled={isSubmitting}
                      aria-label={t("sendMessage")}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          {language === "fr" ? "Envoi en cours..." : "Sending..."}
                        </>
                      ) : (
                        <>
                          {t("sendMessage")} →
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 border-2 border-accent/20">
                  <h3 className="text-xl font-bold mb-4">{t("responseTime")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("responseTimeDesc")}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                    <Clock size={16} />
                    {t("usuallyReply")}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-card rounded-3xl p-6 border-2 border-border hover:border-accent/50 hover:shadow-brutal transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                          <div className="relative w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <Icon className="text-primary-foreground" size={24} />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                          {method.link ? (
                            <a
                              href={method.link}
                              target={method.link.startsWith("http") ? "_blank" : undefined}
                              rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-accent hover:text-accent/80 transition-colors font-medium mb-2 inline-block"
                            >
                              {method.detail}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium mb-2">{method.detail}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="bg-primary text-primary-foreground rounded-3xl p-8 relative overflow-hidden">
                  <DecorativeBlob className="w-[200px] h-[200px] -top-10 -right-10 opacity-20" variant="secondary" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">{t("notSureWhereToStart")}</h3>
                    <p className="mb-6 text-primary-foreground/90">
                      {t("notSureDesc")}
                    </p>
                    <Button 
                      asChild 
                      variant="hero" 
                      size="lg" 
                      className="shadow-brutal"
                    >
                      <a 
                        href="mailto:info@careeredgeconsulting.ca?subject=Discovery Call Request"
                        onClick={() => trackButtonClick("schedule_discovery_call", "/contact")}
                      >
                        {t("scheduleDiscoveryCall")} →
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
