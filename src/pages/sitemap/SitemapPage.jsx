import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const SitemapPage = () => {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { url: '/', label: 'Homepage' },
        { url: '/shop', label: 'Shop' },
        { url: '/about', label: 'About Us' },
        { url: '/contact', label: 'Contact' },
        { url: '/gallery', label: 'Gallery' },
        { url: '/team', label: 'Our Team' },
        { url: '/blog', label: 'Blog' },
        { url: '/faq', label: 'FAQ' },
      ]
    },
    {
      title: 'Services',
      links: [
        { url: '/services/large-format', label: 'Large Format Printing' },
        { url: '/services/uv-printing', label: 'UV Printing' },
        { url: '/services/cnc-cutting', label: 'CNC Cutting' },
        { url: '/services/laser-cutting', label: 'Laser Cutting' },
        { url: '/services/t-shirt-printing', label: 'T-Shirt Printing' },
        { url: '/services/plotting', label: 'Plotting' },
        { url: '/corporate-services', label: 'Corporate Services' },
        { url: '/corporate/events-exhibitions', label: 'Events & Exhibitions' },
        { url: '/corporate/corporate-branding', label: 'Corporate Branding' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { url: '/privacy-policy', label: 'Privacy Policy' },
        { url: '/terms-of-service', label: 'Terms of Service' },
        { url: '/corporate-terms', label: 'Corporate Terms' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Sitemap | Luna Graphics Kenya"
        description="Browse all pages on the Luna Graphics website. Find printing services, products, blog posts, and company information."
        canonical="/sitemap"
        robots="index, follow"
      />
      <Header />

      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-gray-600 text-lg">
              Browse all pages on the Luna Graphics website.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-emerald-600" />
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <Link 
                        to={link.url}
                        className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"
                      >
                        <Icon name="ChevronRight" size={14} className="text-gray-400" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="FileText" size={20} className="text-emerald-600" />
              XML Sitemap
            </h2>
            <p className="text-gray-600 mb-4">
              For search engines, we also provide an XML sitemap that lists all indexable pages on our site.
            </p>
            <a 
              href="/sitemap.xml"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="ExternalLink" size={16} />
              View XML Sitemap
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
