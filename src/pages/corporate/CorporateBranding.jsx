import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';



const CorporateBranding = () => {
  const navigate = useNavigate();

  const brandName = "Luna Graphics";
  const pageTitle = `Corporate Branding Services Kenya | Business Identity Solutions ${brandName}`;
  const pageDescription = "Professional corporate branding services in Nairobi, Kenya. Business cards, office signage, branded merchandise, and complete company rebranding. Elevate your business identity.";
  const pageUrl = "https://lunagraphics.co.ke/corporate/corporate-branding";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Branding Services",
    "provider": {
      "@type": "Organization",
      "name": "Luna Graphics",
      "url": "https://lunagraphics.co.ke"
    },
    "description": "Professional corporate branding, business printing, and company rebranding solutions in Nairobi, Kenya",
    "areaServed": { "@type": "Country", "name": "Kenya" }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="corporate branding Kenya, business cards printing Nairobi, office signage Kenya, company rebranding, branded merchandise Nairobi, corporate identity design Kenya, business branding services, office branding Nairobi" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Header/>

      <main className="pt-24 pb-16">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50/20 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                <Icon name="Briefcase" size={16} className="text-emerald-600" />
                <span className="text-sm font-medium text-emerald-800">Corporate Solutions</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
                Build a Brand That <span className="text-emerald-600">Commands Respect</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                Your brand is more than a logo—it's the total experience clients have with your business. 
                From the moment someone receives your business card to walking into your office, every touchpoint 
                should communicate professionalism, consistency, and quality. We help companies create that impression.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" onClick={() => navigate('/contact')} className="bg-emerald-600 hover:bg-emerald-700 border-emerald-600">
                  Start Your Branding Project
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('https://wa.me/254791159618', '_blank')}>
                  Get Quick Quote
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Branding Challenge */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Why Most Company Branding Falls Short
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
                You've invested in a beautiful logo and brand guidelines. But when you look around your office 
                or hand out materials, something feels inconsistent. The colors are slightly off, the paper feels cheap, 
                and your signage looks dated. This inconsistency erodes trust before you even speak.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Layout', title: 'Visual Inconsistency', desc: 'Business cards from one vendor, brochures from another, signage from a third. Nothing feels like it belongs to the same company.' },
                { icon: 'TrendingDown', title: 'Cheap Impressions', desc: 'Flimsy paper, fading colors, and peeling vinyl signal that you cut corners. Clients wonder where else you compromise.' },
                { icon: 'MapPin', title: 'Disconnected Experience', desc: 'Your office doesn\'t reflect your brand promise. Visitors feel a disconnect between your marketing and reality.' }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="text-center p-6">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={28} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Fragmented Vendors vs Integrated Partnership
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-8">
              {/* Typical Approach */}
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700">The Typical Approach</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Business Cards</h4>
                    <p className="text-sm text-gray-600">Ordered online from a generic printer. Colors don't quite match your brand. Paper feels thin.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Office Signage</h4>
                    <p className="text-sm text-gray-600">Local sign shop with limited material options. Installation is your problem.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Marketing Materials</h4>
                    <p className="text-sm text-gray-600">Different designer, different printer. Brochures look nothing like your business cards.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Branded Merchandise</h4>
                    <p className="text-sm text-gray-600">Imported items with inconsistent logo application. Long lead times, minimum order headaches.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
                  <p className="text-sm text-red-700 font-medium">Result: Your brand looks amateur. You've spent more time managing vendors than growing your business.</p>
                </div>
              </motion.div>

              {/* Luna Approach */}
              <motion.div variants={fadeInUp} className="bg-emerald-600 p-8 rounded-2xl shadow-lg text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">The Luna Graphics Partnership</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h4 className="font-semibold text-emerald-100 mb-2">Unified Brand Management</h4>
                    <p className="text-sm text-emerald-50">Single point of contact for all materials. Your brand colors are calibrated and consistent across every touchpoint.</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h4 className="font-semibold text-emerald-100 mb-2">Strategic Consultation</h4>
                    <p className="text-sm text-emerald-50">We advise on materials, finishes, and applications that align with your brand positioning and budget.</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h4 className="font-semibold text-emerald-100 mb-2">In-House Production</h4>
                    <p className="text-sm text-emerald-50">From business cards to building signage, everything is produced under one roof with strict quality control.</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h4 className="font-semibold text-emerald-100 mb-2">Installation & Support</h4>
                    <p className="text-sm text-emerald-50">Professional installation of office signage. Ongoing support for reorders and new locations.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/20 rounded-lg border border-white/30">
                  <p className="text-sm text-white font-medium">Result: A cohesive brand experience that builds trust and commands premium pricing.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Complete Corporate Branding Solutions
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything your business needs to present a professional, consistent image to the world.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'CreditCard', title: 'Business Cards', desc: 'Premium cards on substantial stock with finishes that make an impression: matte, gloss, spot UV, foil stamping, and embossing.' },
                { icon: 'FileText', title: 'Stationery Systems', desc: 'Letterheads, envelopes, notepads, and folders that maintain brand consistency in every communication.' },
                { icon: 'Signpost', title: 'Office Signage', desc: 'Reception signs, wayfinding systems, meeting room identifiers, and exterior building signage that welcome visitors professionally.' },
                { icon: 'BookOpen', title: 'Marketing Collateral', desc: 'Brochures, catalogs, presentation folders, and proposal covers that win business and tell your story effectively.' },
                { icon: 'Gift', title: 'Branded Merchandise', desc: 'Quality promotional items your team and clients actually want: apparel, drinkware, tech accessories, and corporate gifts.' },
                { icon: 'Truck', title: 'Vehicle Branding', desc: 'Fleet wraps and vehicle graphics that turn your company cars into mobile billboards.' }
              ].map((service, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="group p-6 rounded-xl hover:bg-emerald-50 transition-colors duration-300 border border-transparent hover:border-emerald-100">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Icon name={service.icon} size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 lg:py-24 bg-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Industries We Serve
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-emerald-100 max-w-3xl mx-auto">
                Each industry has unique branding requirements. We've developed specialized expertise across these sectors.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Financial Services', desc: 'Banks, insurance companies, and investment firms requiring trust-building, professional materials.' },
                { title: 'Technology', desc: 'SaaS companies, startups, and IT consultancies needing modern, innovative brand expressions.' },
                { title: 'Healthcare', desc: 'Hospitals, clinics, and pharmaceutical companies with strict compliance and hygiene requirements.' },
                { title: 'Legal & Professional', desc: 'Law firms, consultancies, and agencies where reputation and prestige are paramount.' },
                { title: 'Manufacturing', desc: 'Industrial companies needing durable signage and comprehensive safety branding.' },
                { title: 'Hospitality', desc: 'Hotels, restaurants, and event venues requiring ambiance-enhancing visual elements.' },
                { title: 'Education', desc: 'Universities, schools, and training institutions with diverse stakeholder audiences.' },
                { title: 'Real Estate', desc: 'Developers and agencies needing high-impact marketing materials and property signage.' }
              ].map((industry, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-emerald-800/50 p-6 rounded-xl hover:bg-emerald-800 transition-colors">
                  <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
                  <p className="text-sm text-emerald-200 leading-relaxed">{industry.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                How We Build Your Brand
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Brand Audit', desc: 'We assess your current materials, identify inconsistencies, and understand your brand positioning and goals.' },
                { step: '02', title: 'Strategic Planning', desc: 'Based on your audit, we recommend a prioritized approach to updating your brand touchpoints for maximum impact.' },
                { step: '03', title: 'Design Refinement', desc: 'Our designers ensure your brand translates beautifully across all applications, from small cards to large signage.' },
                { step: '04', title: 'Material Selection', desc: 'We guide you through substrate and finish options that align with your brand quality and budget parameters.' },
                { step: '05', title: 'Production Excellence', desc: 'Using industrial-grade equipment, we produce your materials with color accuracy and finishing precision.' },
                { step: '06', title: 'Implementation', desc: 'Professional installation of signage, delivery of materials, and establishment of reorder systems for ongoing needs.' }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600">{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16 lg:py-24 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-200 rounded-full mb-6">
                <Icon name="Star" size={16} className="text-amber-700" />
                <span className="text-sm font-medium text-amber-800">Transformation Story</span>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                    Major Kenyan Bank Complete Rebranding
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    When one of Kenya's leading banks underwent a comprehensive rebrand, they faced a massive challenge: 
                    updating every physical touchpoint across 150+ branches while maintaining daily operations and ensuring 
                    zero customer confusion.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The project required meticulous planning, phased rollout, and coordination with branch managers nationwide. 
                    Any mistake would be highly visible and potentially damaging to the bank's reputation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">150+</div>
                      <div className="text-sm text-gray-600">Branches Transformed</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">4 Months</div>
                      <div className="text-sm text-gray-600">Complete Rollout</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">500K</div>
                      <div className="text-sm text-gray-600">Business Cards</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">+45%</div>
                      <div className="text-sm text-gray-600">Brand Recognition</div>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700">
                    "The professionalism and attention to detail shown by Luna Graphics was outstanding. They understood the critical importance of maintaining our operations while executing a flawless transformation."
                    <footer className="mt-2 text-sm font-bold text-gray-900 not-italic">— Head of Marketing, Leading Kenyan Bank</footer>
                  </blockquote>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">What We Delivered</h3>
                  <ul className="space-y-3">
                    {[
                      'New LED-illuminated signage for 150+ branch locations',
                      '500,000 business cards for all staff members',
                      'Complete stationery suite: letterheads, envelopes, folders',
                      'Marketing materials: brochures, flyers, proposal covers',
                      'Branded merchandise for customer gifts and staff',
                      'Vehicle wrapping for 200+ company cars',
                      'Phased rollout schedule minimizing operational disruption',
                      'On-site installation teams across all regions',
                      'Asset management system for future reorders'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Luna */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Why Companies Choose Luna Graphics
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'Palette', title: 'Color Accuracy', desc: 'Calibrated printing ensures your brand colors are consistent across every material and application.' },
                { icon: 'Shield', title: 'Quality Guarantee', desc: 'Premium materials and rigorous quality control. If it doesn\'t meet our standards, we reprint at no charge.' },
                { icon: 'Clock', title: 'Reliable Delivery', desc: 'We hit deadlines. For large rollouts, we create detailed timelines and provide regular progress updates.' },
                { icon: 'Headphones', title: 'Dedicated Support', desc: 'A single account manager who knows your brand and coordinates all your needs.' }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Elevate Your Corporate Brand?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-emerald-100 mb-8">
                Let's discuss how we can transform your business image and create consistency across every customer touchpoint.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" onClick={() => navigate('/contact')} className="bg-emerald-700 text-white  border-white">
                  Schedule Brand Consultation
                </Button>
                <Button variant="secondary" size="lg" onClick={() => window.open('https://wa.me/254791159618', '_blank')} className="border-white text-white hover:bg-white hover:text-emerald-700">
                  WhatsApp Us Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CorporateBranding;