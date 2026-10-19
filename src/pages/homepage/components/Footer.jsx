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
    window.dispatchEvent(new Event('luna:cookie-settings'));
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


  const exploreLinks = [
    { label: 'Shop', path: '/' },
    { label: 'Corporate', path: '/corporate-services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Our team', path: '/team' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Large format', path: '/services/large-format' },
    { label: 'UV printing', path: '/services/uv-printing' },
    { label: 'T-shirt printing', path: '/services/t-shirt-printing' },
    { label: 'DTF printing', path: '/services/dtf-printing' },
    { label: 'CNC cutting', path: '/services/cnc-cutting' },
    { label: 'Laser cutting', path: '/services/laser-cutting' },
  ];

  const socials = [
    { label: 'Instagram', platform: 'instagram', icon: <Icon name="Instagram" size={18} /> },
    { label: 'Facebook', platform: 'facebook', icon: <Icon name="Facebook" size={18} /> },
    { label: 'TikTok', platform: 'tiktok', icon: <Icon name="TikTok" size={18} /> },
    {
      label: 'Pinterest',
      platform: 'pinterest',
      icon: (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.77 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.31-.24.99-.28 1.13-.04.18-.15.22-.34.13-1.25-.58-2.03-2.41-2.03-3.88 0-3.16 2.3-6.06 6.62-6.06 3.48 0 6.18 2.48 6.18 5.79 0 3.45-2.18 6.23-5.2 6.23-1.02 0-1.97-.53-2.3-1.15l-.62 2.38c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.98.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
    },
  ];

  const linkClass = 'text-sm text-white/70 hover:text-white transition-colors text-left';

  return (
    <footer className="bg-[#05433a] text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <button onClick={() => handleNavigation('/')} className="flex items-center gap-3" aria-label="Luna Graphics home">
              <img src={logoImage} alt="" className="w-11 h-11 rounded-xl object-cover" />
              <span className="flex flex-col leading-tight text-left">
                <span className="text-lg font-semibold">Luna</span>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#bf9b5f]">Graphics</span>
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Printing, signage and branding from Kweria Road, Nairobi.
            </p>
            <div className="mt-4 flex gap-1 -ml-2">
              {socials.map((s) => (
                <button
                  key={s.platform}
                  onClick={() => handleSocialClick(s.platform)}
                  aria-label={s.label}
                  className="press w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links: two columns side by side even on phones */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            <nav aria-label="Explore">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#bf9b5f]">Explore</h3>
              <ul className="mt-3 space-y-2">
                {exploreLinks.map((l) => (
                  <li key={l.path}><button onClick={() => handleNavigation(l.path)} className={linkClass}>{l.label}</button></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Services">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#bf9b5f]">Services</h3>
              <ul className="mt-3 space-y-2">
                {serviceLinks.map((l) => (
                  <li key={l.path}><button onClick={() => handleNavigation(l.path)} className={linkClass}>{l.label}</button></li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Visit and reach us */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#bf9b5f]">Visit us</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Matumbo House, Kweria Road, Nairobi</li>
              <li>Mon–Fri 8am–6pm · Sat 9am–4pm</li>
              <li><a href="tel:+254791159618" className="hover:text-white">+254 791 159 618</a></li>
              <li><a href="mailto:info@lunagraphics.co.ke" className="hover:text-white">info@lunagraphics.co.ke</a></li>
            </ul>
            <button
              onClick={handleWhatsAppClick}
              className="press mt-4 h-11 px-5 inline-flex items-center gap-2 rounded-full bg-white text-[#05433a] text-sm font-semibold hover:bg-white/90"
            >
              <Icon name="MessageCircle" size={18} />
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://www.google.com/search?q=Luna+Graphics+Nairobi+reviews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rated 4.9 out of 5 on Google from 150+ reviews"
            className="inline-flex items-center gap-2.5 bg-white rounded-full pl-2 pr-4 py-1.5 hover:bg-white/90"
          >
            <GoogleG className="w-6 h-6" />
            <span className="text-sm font-bold text-gray-900">4.9</span>
            <span className="flex text-amber-400" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current">
                  <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                </svg>
              ))}
            </span>
            <span className="text-xs text-gray-500">150+ reviews</span>
          </a>
          <a
            href="https://www.google.com/preferences/source?q=lunagraphics.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-1.5 hover:bg-white/90"
          >
            <GoogleG className="w-5 h-5" />
            <span className="text-[13px] text-gray-800">Add as a preferred source on <span className="font-semibold">Google</span></span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between text-xs text-white/60">
          <p>© {currentYear} Luna Graphics · Crafted by{' '}
            <a href="https://evoqstudioke.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">EVOQ STUDIO</a>
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-white">Privacy</button>
            <button onClick={() => navigate('/terms-of-service')} className="hover:text-white">Terms</button>
            <button onClick={() => navigate('/corporate-terms')} className="hover:text-white">Corporate terms</button>
            <button onClick={openCookieSettings} className="hover:text-white">Cookie settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const GoogleG = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/>
  </svg>
);

export default Footer;