import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';


const About = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const brandName = "Luna Graphics";
  const pageTitle = `About ${brandName} | Professional Printing & Branding Solutions in Kenya`;
  const pageDescription = "Luna Graphics is a leading printing and branding company in Nairobi, Kenya. We specialize in large format printing, UV printing, laser cutting, CNC cutting, and custom signage for corporate clients, events, and retail.";
  const pageUrl = "https://lunagraphics.co.ke/about";

  // Client logos data - replace with your actual client logo paths
  const clientLogos = [
    { name: "Client 1", logo: "/clients/client1.png" },
    { name: "Client 2", logo: "/clients/client2.png" },
    { name: "Client 3", logo: "/clients/client3.png" },
    { name: "Client 4", logo: "/clients/client4.png" },
    { name: "Client 5", logo: "/clients/client5.png" },
    { name: "Client 6", logo: "/clients/client6.png" },
    { name: "Client 7", logo: "/clients/client7.png" },
    { name: "Client 8", logo: "/clients/client8.png" },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 4));
    }, 5000);
    return () => clearInterval(timer);
  }, [clientLogos.length]);

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
    "@type": "Organization",
    "name": "Luna Graphics",
    "url": "https://lunagraphics.co.ke",
    "logo": "https://lunagraphics.co.ke/logo.png",
    "description": "Professional printing, branding, and fabrication company in Nairobi, Kenya specializing in large format printing, UV printing, laser cutting, and CNC cutting.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kweria Road",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "telephone": "+254791159618",
    "email": "info.lunagraphics@gmail.com",
    "sameAs": [
      "https://wa.me/254791159618"
    ],
    "serviceType": [
      "Large Format Printing",
      "UV Printing",
      "Laser Cutting",
      "CNC Cutting",
      "Custom Signage",
      "Corporate Branding"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="printing company Nairobi, large format printing Kenya, UV printing Nairobi, laser cutting Kenya, CNC cutting Nairobi, custom signage Kenya, corporate branding Nairobi, printing services Kenya, branding company Nairobi, signage fabrication Kenya" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lunagraphics.co.ke/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-50/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-800">About Luna Graphics</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
                Professional Printing & Branding Solutions in{' '}
                <span className="text-green-600">Kenya</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl font-heading text-gray-600 leading-relaxed mb-8 max-w-3xl"
              >
                Luna Graphics is a full-service printing, branding, and fabrication company based in Nairobi, 
                delivering high-quality visual solutions for businesses, events, and creative projects across Kenya. 
                We transform ideas into impactful, tangible results through precision craftsmanship and modern production technology.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => navigate('/services')}
                  className="bg-green-600 hover:bg-green-700 font-heading font-bold border-green-600"
                >
                  Explore Our Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/contact')}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl font-heading text-gray-900 mb-6"
                >
                  Who We Are
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-4 font-heading text-gray-600 leading-relaxed">
                  <p>
                    At <strong>Luna Graphics</strong>, we are more than just a printing company—we are your strategic 
                    production partner. Based in Nairobi and serving clients across Kenya, we specialize in 
                    <strong> large format printing</strong>, <strong>UV printing</strong>, <strong>laser cutting</strong>, 
                    and <strong>CNC cutting</strong>, delivering solutions that help businesses communicate clearly, 
                    stand out visually, and leave lasting impressions.
                  </p>
                  <p>
                    Our facility on Kweria Road houses state-of-the-art production equipment capable of handling 
                    everything from one-off custom pieces to high-volume corporate orders. Whether you need 
                    eye-catching outdoor banners, precision-cut acrylic signage, or branded merchandise for your 
                    next campaign, we combine technical expertise with design awareness to bring your vision to life.
                  </p>
                  <p>
                    Trusted by corporate brands, SMEs, event professionals, and designers who demand precision, 
                    durability, and professional execution, we have built our reputation on consistent quality, 
                    reliable turnaround times, and a deep understanding of both design principles and production realities.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-green-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Our Core Capabilities</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'Printer', title: 'Large Format Printing', desc: 'Banners, posters, and signage for indoor and outdoor advertising' },
                    { icon: 'Zap', title: 'UV Printing Services', desc: 'Direct printing on acrylic, wood, glass, metal, and specialty materials' },
                    { icon: 'Scissors', title: 'Laser Cutting', desc: 'Precision cutting for signage, décor, displays, and custom fabrication' },
                    { icon: 'Cpu', title: 'CNC Cutting & Routing', desc: 'Panels, lettering, architectural elements, and large-scale projects' }
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name={capability.icon} size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{capability.title}</h4>
                        <p className="text-sm text-gray-600">{capability.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Comprehensive Printing & Fabrication Services
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg font-heading text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end visual communication solutions, from concept to installation, 
                ensuring every project meets the highest standards of quality and professionalism.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 font-heading lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Large Format Printing',
                  description: 'High-quality banners, posters, billboards, and signage for retail, events, and outdoor advertising. We use premium inks and materials ensuring weather resistance and vibrant colors that last.',
                  features: ['Indoor & outdoor applications', 'Weather-resistant materials', 'High-resolution output', 'Custom sizes available']
                },
                {
                  title: 'UV Printing Services',
                  description: 'State-of-the-art UV flatbed printing allowing direct printing on virtually any substrate including acrylic, wood, glass, metal, and specialty materials. Perfect for premium signage and decorative pieces.',
                  features: ['Print on any material', 'Scratch and fade resistant', 'Raised texture effects', 'Eco-friendly UV inks']
                },
                {
                  title: 'Laser Cutting & Engraving',
                  description: 'Precision laser cutting for intricate designs, signage, architectural models, and custom fabrication. Ideal for acrylic, wood, leather, and other materials requiring detailed cutting or engraving.',
                  features: ['Precision up to 0.1mm', 'Clean, sealed edges', 'No material distortion', 'Complex geometries']
                },
                {
                  title: 'CNC Cutting & Routing',
                  description: 'Computer-controlled cutting for panels, 3D lettering, architectural elements, and large-scale fabrication projects. Capable of handling wood, MDF, acrylic, aluminum, and composite materials.',
                  features: ['Large format capability', '3D routing & carving', 'Multiple material support', 'High-volume production']
                },
                {
                  title: 'Custom Signage Solutions',
                  description: 'Complete signage fabrication from design to installation. We create wayfinding systems, reception signs, retail displays, and architectural signage that reinforces your brand identity.',
                  features: ['Illuminated & non-illuminated', 'ADA-compliant options', 'Installation services', 'Maintenance programs']
                },
                {
                  title: 'Event & Corporate Branding',
                  description: 'Comprehensive branding solutions for conferences, exhibitions, weddings, and corporate events. From backdrops and stage sets to promotional materials and branded merchandise.',
                  features: ['Stage backdrops & sets', 'Exhibition displays', 'Promotional merchandise', 'Event collateral']
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Our Approach to Printing & Branding
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: '01',
                      title: 'Understanding Your Needs',
                      description: 'We begin by learning about your brand, target audience, and the environment where your materials will be displayed. This ensures our solutions are not just visually appealing but strategically effective.'
                    },
                    {
                      step: '02',
                      title: 'Technical Consultation',
                      description: 'Our team advises on the optimal printing or cutting methods for your specific requirements, considering factors like durability, finish, budget, and timeline to recommend the best approach.'
                    },
                    {
                      step: '03',
                      title: 'Material Selection',
                      description: 'We guide you through selecting the right substrates, finishes, and installation solutions. From weather-resistant outdoor vinyl to premium acrylics for interior signage, every material is chosen for purpose.'
                    },
                    {
                      step: '04',
                      title: 'Precision Production',
                      description: 'Using advanced equipment and rigorous quality control, we ensure color accuracy, clean finishing, and structural integrity. Every project undergoes inspection before delivery.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="order-1 lg:order-2"
              >
                <div className="bg-green-600 text-white p-8 rounded-2xl">
                  <h3 className="text-2xl font-heading font-bold mb-4">Why Choose Luna Graphics</h3>
                  <p className="text-green-100 mb-6">
                    We are more than just a printing company—we are a production partner invested in your success.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'High-quality printing with professional finishes',
                      'Advanced production capabilities (UV, laser, CNC)',
                      'Design-aware execution respecting brand guidelines',
                      'Reliable turnaround times for urgent projects',
                      'Versatility across corporate, retail, and event sectors',
                      'Competitive pricing without compromising quality',
                      'Dedicated support from concept to completion'
                    ].map((point, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Industries We Serve
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
                Our diverse experience allows us to adapt our printing and fabrication services 
                to different environments and technical requirements across multiple sectors.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: 'Building2', title: 'Corporate & SMEs', desc: 'Office branding, wayfinding, and marketing materials' },
                { icon: 'Store', title: 'Retail & Showrooms', desc: 'Point-of-sale displays, window graphics, and signage' },
                { icon: 'Utensils', title: 'Hospitality', desc: 'Restaurant signage, hotel branding, and menu boards' },
                { icon: 'Calendar', title: 'Events & Weddings', desc: 'Stage backdrops, welcome signs, and promotional items' },
                { icon: 'Home', title: 'Interior Design', desc: 'Decorative panels, feature walls, and custom installations' },
                { icon: 'HardHat', title: 'Construction', desc: 'Site hoarding, safety signage, and architectural elements' },
                { icon: 'GraduationCap', title: 'Education', desc: 'School signage, wayfinding, and branding materials' },
                { icon: 'Heart', title: 'Non-Profits', desc: 'Campaign materials, event branding, and awareness signage' }
              ].map((industry, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={industry.icon} size={24} className="text-green-400" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-400">{industry.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Past Clients Carousel */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Trusted By Leading Brands
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
                We have had the privilege of working with diverse clients across Kenya, 
                delivering branding, signage, and custom production projects that drive results.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center py-8">
                      {clientLogos.slice(slideIndex * 4, slideIndex * 4 + 4).map((client, index) => (
                        <div 
                          key={index}
                          className="w-full max-w-[200px] h-24 bg-gray-100 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg"
                        >
                          {/* Replace with actual logo images */}
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <Icon name="Image" size={24} className="text-gray-500" />
                            </div>
                            <span className="text-xs text-gray-500 font-medium">{client.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 grid md:grid-cols-3 gap-8 text-center"
            >
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Vision
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg font-heading text-gray-600 leading-relaxed mb-8">
                To be a leading printing and branding company in Kenya, recognized for quality craftsmanship, 
                modern production techniques, and reliable service—helping businesses and events create 
                visual experiences that truly stand out and drive meaningful engagement.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                  Quality First
                </span>
                <span className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                  Innovation Driven
                </span>
                <span className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                  Client Focused
                </span>
                <span className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                  Integrity Always
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Let's Work Together
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg font-heading text-gray-600 mb-8 max-w-2xl mx-aut     o">
                If you're looking for a professional printing company in Nairobi that understands both 
                design and production, Luna Graphics is ready to help bring your vision to life.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-green-600 hover:bg-green-700 border-green-600"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://wa.me/254791159618', '_blank')}
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  WhatsApp Us
                </Button>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-12 grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900">Visit Us</h4>
                    <p className="text-sm text-gray-600">Kweria Road, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900">Call Us</h4>
                    <p className="text-sm text-gray-600">+254 791 159 618</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900">Email Us</h4>
                    <p className="text-sm text-gray-600">info.lunagraphics@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;