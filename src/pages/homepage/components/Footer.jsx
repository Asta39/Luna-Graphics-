import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

import logoImage from '../../../assets/luna-logo2.png';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+254791159618';
    const message = 'Hello! I would like to inquire about your printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // ===== COOKIE SETTINGS HANDLER =====
  const openCookieSettings = () => {
    // Clear the consent to reopen the banner
    localStorage.removeItem('lunaCookieConsent');
    // Reload page to show banner again
    window.location.reload();
  };

  const handleSocialClick = (platform) => {
    const urls = {
      instagram: 'https://www.instagram.com/lunagraphics_ke?igsh=MWY4NDZreXczM25meg==',
      facebook: 'https://www.facebook.com/share/1ZznhZ5yRk/',
      tiktok: 'https://www.tiktok.com/@lunagraphics_k3?_r=1&_d=ejmc62jig91h09&sec_uid=MS4wLjABAAAAZlbjAWOqOjTPynxBOV67SWTQr1V5ENcqjaS35yRfclTqT0nTu4UsCmIjaMZfJ7Jz&share_author_id=7183680267814978566&sharer_language=en&source=h5_m&u_code=e5al48ed8eg3bb&timestamp=1751362691&user_id=7176488124331426822&sec_user_id=MS4wLjABAAAATSIAFkAgEMhoE8rAvPr4ZJc6P66T1hwfNiIzpFFuuvqKGtTCWttlkw1fMcvoDTqM&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7518431460690003768&share_link_id=a40a8793-7ad4-47bc-bbe8-7b06401ba888&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=ChatShellActivity%2Cb5836&social_share_type=5&enable_checksum=1',
      pinterest: 'https://pin.it/3HZXaQKuX'
    };
    window.open(urls[platform], '_blank');
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/large-format' },
    { label: 'Corporate Solutions', path: '/corporate-services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Our Team', path: '/team' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Large Format Printing',
    'UV Printing',
    'T-shirt Printing',
    'CNC Cutting',
    'Laser Cutting',
    'Plotting Services'
  ];

  const Logo = () => (
    <div className="flex items-center space-x-3">
       <img 
        src={logoImage} 
        alt="Luna Graphics Logo" 
        className="w-12 h-12 rounded-lg object-cover" 
      />
      <div className="flex flex-col">
        <span className="text-xl font-heading font-bold text-accent">Luna</span>
        <span className="text-sm font-heading font-semibold text-secondary">Graphics</span>
      </div>
    </div>
  );

  return (
    <footer className="bg-surface-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-surface-300 leading-relaxed">
              Nairobi's premier printing and design services company. We deliver high-quality 
              printing solutions with cutting-edge technology and expert craftsmanship.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} color="var(--color-accent)" />
                <span className="text-sm text-surface-300">
                  Kweria Road, Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} color="var(--color-accent)" />
                <span className="text-sm text-surface-300">+254 791 159 618</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} color="var(--color-accent)" />
                <span className="text-sm text-surface-300">info.lunagraphics@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: 'Instagram', platform: 'instagram' },
                { icon: 'Facebook', platform: 'facebook' },
                { icon: 'TikTok', platform: 'tiktok' },
                { icon: 'Pinterest', platform: 'pinterest' }
              ].map((social) => (
                <button
                  key={social.platform}
                  onClick={() => handleSocialClick(social.platform)}
                  className="w-10 h-10 bg-surface-700 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name={social.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-surface-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavigation('/services')}
                    className="text-surface-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Business Hours</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-surface-300">Monday - Friday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-surface-300">Saturday</span>
                <span className="text-white">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-surface-300">Sunday</span>
                <span className="text-white">Closed</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-accent hover:bg-accent-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Icon name="MessageCircle" size={18} />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-surface-300">
              © {currentYear} Luna Graphics. All rights reserved.
            </div>
            
            {/* ===== LEGAL LINKS WITH COOKIE SETTINGS ===== */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-surface-300">
              <button 
                onClick={() => navigate('/privacy-policy')} 
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button 
                onClick={() => navigate('/terms-of-service')} 
                className="hover:text-accent transition-colors"
              >
                Terms of Service
              </button>
              <span>|</span>
              <button 
                onClick={() => navigate('/corporate-terms')} 
                className="hover:text-accent transition-colors"
              >
                Corporate Terms
              </button>
              <span>|</span>
              {/* ===== COOKIE SETTINGS BUTTON ===== */}
              <button 
                onClick={openCookieSettings}
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                <Icon name="Shield" size={14} />
                Cookie Settings
              </button>
            </div>

            {/* Credit */}
            <div className="flex items-center space-x-2 text-sm text-surface-300">
              <span>Crafted by</span>
              <a 
                href="https://evoqcreative.co.ke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-600 transition-colors duration-200"
              >
                EVOQ TECH
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;