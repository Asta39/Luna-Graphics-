import React from 'react';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import FAQ from '../../components/ui/FAQ';
import Button from '../../components/ui/Button';

const FAQPage = () => {
  const pageTitle = "FAQ | Printing Services Questions | Luna Graphics Nairobi";
  const pageDescription = "Find answers about our printing services, pricing, turnaround times, file requirements, and corporate accounts. Get instant answers or contact us for help.";

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="printing FAQ Nairobi, print shop questions, banner printing FAQ, t-shirt printing questions, corporate printing Kenya, file requirements printing, turnaround time printing"
        canonical="https://lunagraphics.co.ke/faq"
        type="website"
        robots="index, follow"
        geo={{
          region: "KE-30",
          placename: "Nairobi",
          position: "-1.2921;36.8219"
        }}
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are your printing turnaround times?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Turnaround times vary by service. Small orders are often ready same-day, while large format and bulk orders typically take 2-3 business days."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer delivery in Nairobi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer reliable delivery services across Nairobi and surrounding areas for all our printing and branding projects."
                }
              }
            ]
          }
        ]}
      />

      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-12 mb-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our printing services. 
              Browse by topic or search for specific information.
            </p>
          </div>
        </section>

        {/* FAQ Component */}
        <section className="max-w-3xl mx-auto px-4">
          <FAQ 
            showTitle={false}
            showSearch={true}
            showCategories={true}
          />
        </section>

        {/* Still Need Help CTA */}
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Can't find what you're looking for? Our team is ready to help with 
              personalized answers for your specific project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                onClick={() => {
                  const phone = '254791159618';
                  const message = 'Hi Luna Graphics, I have a question about...';
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Luna Graphics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;