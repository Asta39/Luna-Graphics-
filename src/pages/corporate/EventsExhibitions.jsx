import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';


const EventsExhibitions = () => {
  const navigate = useNavigate();

  const brandName = "Luna Graphics";
  const pageTitle = `Event & Exhibition Printing Services Kenya | Trade Show Solutions ${brandName}`;
  const pageDescription = "Professional event and exhibition printing services in Nairobi, Kenya. Custom trade show displays, exhibition booths, event banners, and conference materials. End-to-end event branding solutions.";
  const pageUrl = "https://lunagraphics.co.ke/corporate/events-exhibitions";

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
    "name": "Event and Exhibition Printing Services",
    "provider": {
      "@type": "Organization",
      "name": "Luna Graphics",
      "url": "https://lunagraphics.co.ke"
    },
    "description": "Professional exhibition printing, trade show materials, and event branding solutions in Nairobi, Kenya",
    "areaServed": { "@type": "Country", "name": "Kenya" }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="exhibition printing Kenya, trade show materials Nairobi, event banners Kenya, exhibition booth design, conference printing Kenya, trade show displays Nairobi, event branding Kenya, exhibition graphics, corporate event materials Kenya" />
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
                <Icon name="Calendar" size={16} className="text-emerald-600" />
                <span className="text-sm font-medium text-emerald-800">Corporate Solutions</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
                Make Your Event <span className="text-emerald-700">Unforgettable</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
                From trade shows to corporate conferences, we create stunning visual experiences that capture attention, 
                communicate your message, and leave lasting impressions. Your event deserves more than just printing— 
                it deserves a partner who understands how to make brands shine in competitive spaces.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" onClick={() => navigate('/contact')} className="bg-emerald-710 hover:bg-emerald-700 border-emerald-600">
                  Discuss Your Event
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('https://wa.me/254791159618', '_blank')}>
                  Get Quick Quote
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                The Challenge Every Event Organizer Faces
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
                You've been there. Months of planning, significant budget allocation, and high stakes. 
                Your event is approaching, but you're worried about whether your visual materials will 
                actually attract visitors to your booth or leave you invisible in a sea of competitors.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'EyeOff', title: 'Getting Lost in the Crowd', desc: 'Hundreds of exhibitors competing for the same attention. Generic banners that blend into the background rather than stand out.' },
                { icon: 'Clock', title: 'Tight Deadlines', desc: 'Event dates are fixed. Delays in printing mean missed opportunities. You need a partner who delivers on time, every time.' },
                { icon: 'Package', title: 'Logistics Nightmares', desc: 'Coordinating delivery of bulky materials to event venues. Damage during transport. Missing pieces when you need them most.' }
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

        {/* What Typical Companies Offer vs Luna */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                What Most Printing Companies Offer vs What You Actually Need
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-8">
              {/* Typical Companies */}
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon name="X" size={20} className="text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700">Typical Printing Companies</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Standard templates with limited customization',
                    'Basic vinyl banners that wrinkle and fade',
                    'One-size-fits-all approach regardless of your industry',
                    'Delivery to your office only—you handle venue logistics',
                    'No installation support—you figure it out yourself',
                    'Reactive service: problems solved after they occur',
                    'Limited material options (vinyl or nothing)',
                    'No design consultation—you must provide print-ready files'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                      <Icon name="Minus" size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Luna Graphics */}
              <motion.div variants={fadeInUp} className="bg-emerald-800 p-8 rounded-2xl shadow-lg text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Luna Graphics Approach</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Fully customized designs tailored to your brand and event goals',
                    'Premium fabric and rigid materials that look professional',
                    'Industry-specific solutions (tech, healthcare, finance, etc.)',
                    'Direct delivery to event venues with setup coordination',
                    'Professional installation and dismantling services',
                    'Proactive project management with timeline checkpoints',
                    'Wide material range: fabric, acrylic, metal, wood, LED',
                    'In-house design team to refine or create your visuals'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-emerald-50">
                      <Icon name="Check" size={16} className="text-emerald-200 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What We Offer Event Organizers */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                What We Offer Event & Exhibition Clients
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions that cover every aspect of your event presence, from initial concept to final installation.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'Image', title: 'Exhibition Booth Design', desc: 'Custom-designed booths that maximize your space and attract foot traffic. From shell scheme upgrades to island exhibits.' },
                { icon: 'Monitor', title: 'Backdrop & Banner Systems', desc: 'Tension fabric displays, roll-up banners, pop-up systems, and rigid backdrops that set up quickly and travel well.' },
                { icon: 'MapPin', title: 'Wayfinding & Signage', desc: 'Directional signage, floor graphics, and informational displays that help attendees navigate your event space.' },
                { icon: 'FileText', title: 'Marketing Collateral', desc: 'Brochures, flyers, catalogs, and promotional materials that attendees actually want to keep.' },
                { icon: 'Gift', title: 'Branded Merchandise', desc: 'Quality promotional items that extend your brand beyond the event: bags, pens, tech accessories, and apparel.' },
                { icon: 'Zap', title: 'Rush Production', desc: 'Last-minute changes? We offer expedited production for those inevitable event emergencies.' }
              ].map((service, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="group p-6 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
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

        {/* Industries We Serve */}
        <section className="py-16 lg:py-24 bg-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Events We Specialize In
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-emerald-100 max-w-3xl mx-auto">
                Every event type has unique requirements. We've refined our approach across these key sectors.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Trade Shows & Expos', desc: 'Multi-day exhibitions requiring durable, reusable materials that withstand heavy foot traffic.' },
                { title: 'Corporate Conferences', desc: 'Professional environments demanding polished, brand-consistent materials.' },
                { title: 'Product Launches', desc: 'High-impact visuals that create buzz and showcase innovation.' },
                { title: 'Political Campaigns', desc: 'High-volume, rapid-turnaround materials for rallies and events.' },
                { title: 'Wedding & Social Events', desc: 'Elegant, personalized touches that make celebrations memorable.' },
                { title: 'Academic & Institutional', desc: 'Informative displays for universities, hospitals, and government.' },
                { title: 'Retail & POP', desc: 'Point-of-purchase displays that drive sales and brand awareness.' },
                { title: 'Sporting Events', desc: 'Outdoor-durable materials that perform in any weather condition.' }
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
                How We Work With You
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Discovery Call', desc: 'We learn about your event goals, audience, space constraints, and budget. This ensures every recommendation aligns with your objectives.' },
                { step: '02', title: 'Strategic Recommendations', desc: 'Based on your needs, we propose specific materials, designs, and approaches that maximize your event ROI.' },
                { step: '03', title: 'Design Development', desc: 'Our designers create visuals that capture your brand essence while optimizing for the event environment.' },
                { step: '04', title: 'Production & Quality Control', desc: 'Using industrial-grade equipment, we produce your materials with rigorous quality checks at every stage.' },
                { step: '05', title: 'Logistics & Installation', desc: 'We deliver to your venue and handle professional installation, ensuring everything is perfect before doors open.' },
                { step: '06', title: 'Post-Event Support', desc: 'Storage for reusable materials, disposal of temporary items, or immediate turnaround for your next event.' }
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
                <span className="text-sm font-medium text-amber-800">Client Success Story</span>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                    Kenya Association of Manufacturers International Trade Show
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    When KAM needed to showcase 200+ Kenyan manufacturers to international buyers, they faced a logistics nightmare. 
                    Each company needed distinct branding while maintaining overall event cohesion.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We delivered custom exhibition stands, backdrops, and marketing materials for all exhibitors, 
                    managed venue delivery and setup, and provided on-site support throughout the 5-day event.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">200+</div>
                      <div className="text-sm text-gray-600">Exhibitors Served</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">$50M+</div>
                      <div className="text-sm text-gray-600">Export Inquiries Generated</div>
                    </div>
                  </div>
                  <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700">
                    "Luna Graphics transformed our vision into reality. The quality and professionalism elevated Kenya's image on the global stage."
                    <footer className="mt-2 text-sm font-bold text-gray-900 not-italic">— Exhibition Director, KAM</footer>
                  </blockquote>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">What We Delivered</h3>
                  <ul className="space-y-3">
                    {[
                      'Custom modular exhibition stands for 200+ companies',
                      'Large-format fabric backdrops with aluminum framing',
                      '10,000+ product catalogs and brochures',
                      'Branded merchandise and promotional items',
                      'Wayfinding signage for the exhibition hall',
                      'Digital displays and interactive kiosks',
                      'On-site technical support team',
                      'Post-event material storage and disposal'
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

        {/* Why Choose Luna */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                The Luna Graphics Difference
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'Target', title: 'Event Expertise', desc: '10+ years managing event materials for Kenya\'s largest exhibitions.' },
                { icon: 'Truck', title: 'End-to-End Service', desc: 'From design to venue installation—we handle everything.' },
                { icon: 'Shield', title: 'Quality Guarantee', desc: 'Premium materials and printing that withstand multi-day events.' },
                { icon: 'Clock', title: 'Deadline Promise', desc: 'We deliver on time, or we cover your rush fees. Guaranteed.' }
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Make Your Next Event Exceptional?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-emerald-100 mb-8">
                Let's discuss how we can help you stand out, attract more visitors, and achieve your event goals.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" onClick={() => navigate('/contact')} className="bg-emerald-700 text-white hover:bg-white hover:text-emerald-700 border-white">
                  Schedule Consultation
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

export default EventsExhibitions;