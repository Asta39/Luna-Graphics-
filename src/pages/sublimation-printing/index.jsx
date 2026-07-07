import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import { services } from '../../data/serviceData';
import Header from '../../components/ui/Header';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceDetails from '../../components/services/ServiceDetails';
import EquipmentShowcase from '../../components/services/EquipmentShowcase';
import SampleGallery from '../../components/services/SampleGallery';
import PricingTable from '../../components/services/PricingTable';
import RelatedServices from '../../components/services/RelatedServices';
import RelatedBlogPosts from '../../components/services/RelatedBlogPosts';
import ContactForm from '../../components/services/ContactForm';
import Breadcrumb from '../../components/services/Breadcrumb';
import logoImage from '../../assets/luna-logo2.png';

const SublimationPrintingPage = () => {
  const navigate = useNavigate();
  const pageData = services['sublimation-printing'];

  if (!pageData) return null;

  const pageTitle = `Sublimation Printing in Nairobi | Dye Sublimation Services | Luna Graphics`;
  const pageDescription = pageData.description;
  const pageUrl = `https://lunagraphics.co.ke${pageData.path}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": pageData.title,
    "name": pageData.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Luna Graphics",
      "telephone": "+254-791-159-618",
      "email": "info@lunagraphics.co.ke",
      "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" },
      "url": "https://lunagraphics.co.ke"
    },
    "areaServed": { "@type": "City", "name": "Nairobi", "containedInPlace": { "@type": "Country", "name": "Kenya" } },
    "description": pageDescription,
    "offers": pageData.pricing.filter(p => p.price).map(pkg => ({
      "@type": "Offer",
      "name": pkg.name,
      "description": pkg.description,
      "price": pkg.price.toString(),
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock"
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lunagraphics.co.ke/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://lunagraphics.co.ke/services" },
      { "@type": "ListItem", "position": 3, "name": pageData.title, "item": pageUrl }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: pageData.title, path: null }
  ];

  const handleGetQuote = () => navigate('/contact', { state: { service: pageData.title } });
  const handleWhatsAppChat = () => {
    const msg = `Hello! I'm interested in Sublimation Printing services. Could you please provide more information?`;
    window.open(`https://wa.me/254791159618?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        ogImage={pageData.heroImage}
        type="business.business"
        keywords="sublimation printing Nairobi, dye sublimation Kenya, custom mug printing Nairobi, sports jersey printing Kenya, all-over print Nairobi, polyester printing Kenya, sublimation gifts Nairobi, branded merchandise Kenya, Luna Graphics sublimation"
        schemaData={[structuredData, breadcrumbSchema, faqSchema]}
        robots="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        geo={{ region: "KE-30", placename: "Nairobi", position: "-1.280302;36.822639" }}
      />
      <Header />
      <main className="pt-16">
        <Breadcrumb items={breadcrumbItems} />
        <ServiceHero service={pageData} onGetQuote={handleGetQuote} onWhatsAppChat={handleWhatsAppChat} />
        <ServiceDetails service={pageData} />
        <EquipmentShowcase equipment={pageData.equipment} />
        <SampleGallery samples={pageData.gallery} />
        <PricingTable pricingPackages={pageData.pricing} />
        <RelatedServices relatedServices={pageData.related} />
        <RelatedBlogPosts posts={pageData.relatedBlogPosts} />
        <ContactForm serviceName={pageData.title} />
      </main>
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImage} alt="Luna Graphics Logo" className="w-12 h-12 rounded-lg object-cover" loading="lazy" />
                <span className="text-xl font-heading font-bold">Luna Graphics</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">Your trusted partner for professional printing services in Nairobi. Quality, speed, and reliability in every project.</p>
              <div className="text-sm text-gray-400">© {new Date().getFullYear()} Luna Graphics. All rights reserved.</div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors">Shop</button></li>
                <li><button onClick={() => navigate('/gallery')} className="hover:text-white transition-colors">Gallery</button></li>
                <li><button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+254 791 159 618</li>
                <li>info@lunagraphics.co.ke</li>
                <li>Nairobi, Kenya</li>
                <li>Mon–Fri: 8AM–6PM</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SublimationPrintingPage;
