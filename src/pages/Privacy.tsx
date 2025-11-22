import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={t("privacyTitle")}
        description={language === "fr" ? "Politique de confidentialité et conditions de service" : "Privacy Policy and Terms of Service"}
        keywords={language === "fr" ? "confidentialité, conditions, politique" : "privacy, terms, policy"}
      />
      <Navigation />
      <main id="main-content" className="flex-grow" role="main">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">{t("privacyTitle")}</h1>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicyHeading")}</h2>
                  <p className="text-muted-foreground mb-4">
                    <strong>{t("lastUpdated")}:</strong> {new Date().toLocaleDateString()}
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("informationWeCollect")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("informationWeCollectDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("howWeUseInfo")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("howWeUseInfoDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("dataRetention")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("dataRetentionDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("yourRights")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("yourRightsDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("security")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("securityDesc")}
                  </p>
                </section>

                <section className="pt-8 border-t">
                  <h2 className="text-2xl font-semibold mb-4">{t("termsOfService")}</h2>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("servicesSection")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("servicesSectionDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("bookingPayment")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("bookingPaymentDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("cancellationRefund")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("cancellationRefundDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("deliverables")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("deliverablesDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("limitationLiability")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("limitationLiabilityDesc")}
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">{t("contactSection")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("contactSectionDesc")}
                  </p>
                </section>

                <section className="pt-8 border-t">
                  <h2 className="text-2xl font-semibold mb-4">{t("compliance")}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t("complianceDesc")}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
