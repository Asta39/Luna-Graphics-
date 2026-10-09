import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, GraduationCap, Phone, TrendingUp, Settings, Smartphone,
  ChevronDown, ChevronUp, Clock, Check, Star, Send, X, Upload, Camera,
  CreditCard, Download, Share2, Award, Lightbulb, Users, Shield, Target,
  FileText, Zap, ArrowRight, Code, Heart, Info, Mail, CheckCircle,
  FileCheck, MessageCircle, Printer, Palette
} from 'lucide-react';
import Header from '../../components/ui/Header';
import SEO from '../../components/SEO';

// ---------- constants ----------

const POSITIONS = [
  {
    id: 1, key: 'graphic-designer',
    title: 'Graphic Designer', Icon: Palette, experience: '2–4 years', type: 'Full-time',
    deadline: '2027-03-02',
    responsibilities: [
      'Create visual concepts and designs for print materials',
      'Collaborate with clients to understand design requirements',
      'Prepare artwork for printing production',
    ],
    requirements: [
      'Diploma/Degree in Graphic Design or related field',
      'Proficiency in Adobe Creative Suite',
      'Strong portfolio of print design work',
    ],
  },
  {
    id: 2, key: 'designer-intern',
    title: 'Graphics Designer Intern', Icon: GraduationCap, experience: '0–1 years', type: 'Internship',
    deadline: '2026-01-01',
    responsibilities: [
      'Assist senior designers with project development',
      'Learn printing processes and quality standards',
      'Support client presentation preparations',
    ],
    requirements: [
      'Currently pursuing or completed Diploma in Design',
      'Basic knowledge of design software',
      'Eagerness to learn and grow',
    ],
  },
  {
    id: 3, key: 'receptionist',
    title: 'Receptionist', Icon: Phone, experience: '1–2 years', type: 'Full-time',
    deadline: '2026-01-01',
    responsibilities: [
      'Manage front desk operations and client reception',
      'Handle phone calls and appointment scheduling',
      'Maintain office organization and filing systems',
    ],
    requirements: [
      'Certificate/Diploma in Business or related field',
      'Excellent communication skills',
      'Professional appearance and demeanor',
    ],
  },
  {
    id: 4, key: 'sales-rep',
    title: 'Sales Representative', Icon: TrendingUp, experience: '2–3 years', type: 'Full-time',
    deadline: '2026-01-01',
    responsibilities: [
      'Develop new client relationships and maintain existing ones',
      'Present printing solutions to potential customers',
      'Achieve monthly sales targets and KPIs',
    ],
    requirements: [
      'Diploma/Degree in Sales, Marketing or Business',
      'Proven sales track record',
      'Strong negotiation and presentation skills',
    ],
  },
  {
    id: 5, key: 'machine-operator',
    title: 'Machine Operator', Icon: Settings, experience: '1–3 years', type: 'Full-time',
    deadline: '2026-01-01',
    responsibilities: [
      'Operate and maintain printing equipment',
      'Ensure quality control throughout production',
      'Perform routine maintenance and troubleshooting',
    ],
    requirements: [
      'Technical certificate in Machine Operation',
      'Experience with printing machinery',
      'Attention to detail and safety protocols',
    ],
  },
  {
    id: 6, key: 'digital-marketing',
    title: 'Technical Support Specialist', Icon: Smartphone, experience: '2–4 years', type: 'Full-time',
    deadline: '2026-01-01',
    responsibilities: [
      'Manage social media accounts and online presence',
      'Create digital marketing campaigns',
      'Analyze performance metrics and optimize strategies',
    ],
    requirements: [
      'Degree in Marketing, Communications or related field',
      'Experience with digital marketing tools',
      'Strong analytical and creative skills',
    ],
  },
];

const REQUIREMENTS = {
  'graphic-designer': {
    title: 'Graphic Designer', Icon: Palette,
    education: { minimum: 'Diploma in Graphic Design, Visual Arts, or related field', preferred: "Bachelor's degree in Graphic Design or Fine Arts", alternative: 'Equivalent professional experience with strong portfolio' },
    experience: { minimum: '2–4 years of professional graphic design experience', preferred: 'Experience in print design and production processes', specific: ['Print media design (brochures, flyers, banners)', 'Brand identity development', 'Client presentation experience', 'Production file preparation'] },
    skills: { technical: ['Adobe Creative Suite (Photoshop, Illustrator, InDesign)', 'Typography and layout principles', 'Color theory and print production', 'File preparation for various print formats'], soft: ['Creative problem-solving abilities', 'Strong attention to detail', 'Excellent communication skills', 'Ability to work under tight deadlines'] },
    portfolio: 'Strong portfolio showcasing print design work and creative projects',
  },
  'designer-intern': {
    title: 'Graphics Designer Intern', Icon: GraduationCap,
    education: { minimum: 'Currently pursuing or completed Diploma in Graphic Design', preferred: 'Ongoing studies in Design, Visual Arts, or related field', alternative: 'Self-taught with demonstrable design skills' },
    experience: { minimum: '0–1 years or fresh graduate', preferred: 'Some freelance or project-based design experience', specific: ['Basic understanding of design principles', 'Familiarity with design software', 'Eagerness to learn print production', 'Academic or personal design projects'] },
    skills: { technical: ['Basic knowledge of Adobe Creative Suite', 'Understanding of design fundamentals', 'Willingness to learn print processes', 'Computer literacy and file management'], soft: ['Strong desire to learn and grow', 'Good communication skills', 'Team collaboration abilities', 'Positive attitude and work ethic'] },
    portfolio: 'Portfolio of academic work, personal projects, or freelance designs',
  },
  'receptionist': {
    title: 'Receptionist', Icon: Phone,
    education: { minimum: 'Certificate in Business Administration or related field', preferred: 'Diploma in Business, Communications, or Customer Service', alternative: 'High school certificate with relevant experience' },
    experience: { minimum: '1–2 years in customer service or administrative role', preferred: 'Reception or front desk experience', specific: ['Customer service experience', 'Phone handling and communication', 'Administrative and filing tasks', 'Appointment scheduling systems'] },
    skills: { technical: ['Computer literacy (MS Office, email)', 'Phone system operation', 'Basic accounting/invoicing knowledge', 'Filing and record management'], soft: ['Excellent verbal communication', 'Professional appearance and demeanor', 'Multitasking abilities', 'Patience and problem-solving skills'] },
    portfolio: 'Professional references from previous employers or supervisors',
  },
  'sales-rep': {
    title: 'Sales Representative', Icon: TrendingUp,
    education: { minimum: 'Diploma in Sales, Marketing, or Business Administration', preferred: "Bachelor's degree in Business, Marketing, or related field", alternative: 'Proven sales track record with relevant experience' },
    experience: { minimum: '2–3 years in sales or business development', preferred: 'B2B sales experience, preferably in printing or creative services', specific: ['Client relationship management', 'Sales target achievement', 'Presentation and negotiation skills', 'Market research and lead generation'] },
    skills: { technical: ['CRM software proficiency', 'Sales reporting and analytics', 'Presentation software (PowerPoint, etc.)', 'Basic understanding of printing services'], soft: ['Excellent persuasion and negotiation skills', 'Strong interpersonal abilities', 'Goal-oriented mindset', 'Resilience and persistence'] },
    portfolio: 'Sales performance records and client testimonials',
  },
  'machine-operator': {
    title: 'Machine Operator', Icon: Settings,
    education: { minimum: 'Technical certificate in Machine Operation or related field', preferred: 'Diploma in Mechanical Engineering or Industrial Technology', alternative: 'Apprenticeship or on-the-job training in machinery' },
    experience: { minimum: '1–3 years operating industrial machinery', preferred: 'Experience with printing equipment and production processes', specific: ['Machine setup and calibration', 'Quality control procedures', 'Maintenance and troubleshooting', 'Safety protocol adherence'] },
    skills: { technical: ['Mechanical aptitude and troubleshooting', 'Understanding of printing processes', 'Quality control and inspection', 'Basic maintenance and repair skills'], soft: ['Strong attention to detail', 'Safety consciousness', 'Physical stamina and dexterity', 'Team collaboration skills'] },
    portfolio: 'Certifications in machinery operation and safety training',
  },
  'digital-marketing': {
    title: 'Technical Support Specialist', Icon: Smartphone,
    education: { minimum: 'Diploma in Marketing, Communications, or related field', preferred: "Bachelor's degree in Marketing, Digital Media, or Business", alternative: 'Digital marketing certifications with practical experience' },
    experience: { minimum: '2–4 years in digital marketing or online advertising', preferred: 'Experience with B2B marketing and creative industry knowledge', specific: ['Social media management and advertising', 'Content creation and copywriting', 'SEO and SEM campaign management', 'Analytics and performance tracking'] },
    skills: { technical: ['Google Ads and Facebook Ads platforms', 'Social media management tools', 'Analytics tools (Google Analytics, etc.)', 'Content management systems'], soft: ['Creative thinking and content creation', 'Analytical and data-driven mindset', 'Excellent written communication', 'Adaptability to digital trends'] },
    portfolio: 'Portfolio of successful campaigns and performance metrics',
  },
};

const VALUES = [
  { id: 0, title: 'Excellence in Everything', Icon: Award, short: 'We strive for the highest quality in all our work.', full: "At Luna Graphics, excellence isn't just a goal—it's our standard. Every project deserves our absolute best effort. We provide the tools, training, and support necessary to help every employee deliver exceptional results.", principles: ['Quality over quantity in every project', 'Continuous learning and skill development', 'Attention to detail in all processes', 'Client satisfaction as our primary measure of success'] },
  { id: 1, title: 'Innovation & Creativity', Icon: Lightbulb, short: 'We embrace new ideas and creative solutions.', full: "Innovation drives our industry forward, and creativity sets us apart. At Luna Graphics, we foster an environment where new ideas are welcomed, tested, and implemented. From adopting the latest printing technologies to developing unique design solutions.", principles: ['Embrace new technologies and methodologies', 'Encourage creative problem-solving', 'Support experimentation and calculated risks', 'Stay ahead of industry trends'] },
  { id: 2, title: 'Teamwork & Collaboration', Icon: Users, short: 'We achieve more together than we could alone.', full: "Success at Luna Graphics is a team effort. Our open communication culture ensures that ideas flow freely across all departments. We've built a supportive environment where team members help each other grow, share knowledge, and work together.", principles: ['Open communication across all levels', 'Knowledge sharing and mentorship', 'Collaborative problem-solving', 'Mutual support and respect among colleagues'] },
  { id: 3, title: 'Integrity & Trust', Icon: Shield, short: 'We build lasting relationships through honesty.', full: "Trust is the foundation of all our relationships. We conduct our business with the highest ethical standards. Our commitment to honesty and transparency has earned us the trust of hundreds of clients over the years.", principles: ['Honest and transparent communication', 'Ethical business practices', 'Reliability in meeting commitments', 'Building long-term relationships based on trust'] },
  { id: 4, title: 'Growth & Development', Icon: TrendingUp, short: "We invest in our people's professional growth.", full: "At Luna Graphics, our success is directly tied to the growth of our team. We're committed to providing opportunities for advancement, skill development, and career progression for every employee.", principles: ['Structured career advancement pathways', 'Investment in training and development', 'Recognition and reward for achievements', 'Support for work-life balance'] },
];

const POSITION_OPTIONS = [
  { value: 'Graphic Designer', label: 'Graphic Designer' },
  { value: 'Graphics Designer Intern', label: 'Graphics Designer Intern' },
  { value: 'Receptionist', label: 'Receptionist' },
  { value: 'Sales Representative', label: 'Sales Representative' },
  { value: 'Machine Operator', label: 'Machine Operator' },
  { value: 'Technical Support Specialist', label: 'Technical Support Specialist' },
  { value: 'General Application', label: 'General Application' },
];

const daysLeft = (deadline) => {
  const diff = new Date(deadline) - new Date();
  return diff > 0 ? Math.ceil(diff / 86400000) : 0;
};

// ---------- small UI atoms ----------

const AppleCard = ({ children, className = '' }) => (
  <div className={`bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-sm ${className}`}>
    {children}
  </div>
);

const AppleButton = ({ children, variant = 'primary', onClick, disabled, loading, className = '', type = 'button' }) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variants = {
    primary: 'bg-[#1B4332] text-white hover:bg-[#2D5A3D] focus-visible:ring-[#1B4332] px-6 py-3 text-sm',
    secondary: 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] focus-visible:ring-[#6e6e73] px-6 py-3 text-sm',
    ghost: 'text-[#1B4332] hover:text-[#004499] px-4 py-2 text-sm',
    danger: 'bg-red-600 text-white hover:bg-red-700 px-6 py-3 text-sm',
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={`${base} ${variants[variant]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
      {loading ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : children}
    </button>
  );
};

const AppleInput = ({ label, error, description, required, ...props }) => (
  <div>
    {label && <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>}
    <input className={`w-full rounded-xl border px-4 py-3 text-sm text-[#1d1d1f] bg-[#f5f5f7] placeholder-[#86868b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent ${error ? 'border-red-400' : 'border-[#d2d2d7]'}`} {...props} />
    {description && <p className="mt-1 text-xs text-[#86868b]">{description}</p>}
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

const AppleSelect = ({ label, options, value, onChange, error, placeholder, required }) => (
  <div>
    {label && <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>}
    <select value={value} onChange={(e) => onChange(e.target.value)} className={`w-full rounded-xl border px-4 py-3 text-sm text-[#1d1d1f] bg-[#f5f5f7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent ${error ? 'border-red-400' : 'border-[#d2d2d7]'} ${!value ? 'text-[#86868b]' : ''}`}>
      <option value="" disabled>{placeholder}</option>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

// ---------- Hero ----------

const Hero = ({ onViewPositions }) => (
  <section className="relative bg-[#f5f5f7] overflow-hidden pt-24 pb-20">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#1B4332]/8 to-transparent blur-3xl" />
    </div>
    <div className="relative max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm font-semibold tracking-wider text-[#1B4332] uppercase mb-4">Now Hiring</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#1d1d1f] mb-6 tracking-tight leading-[1.05]">
          Join Nairobi's<br />Premier Print Shop
        </h1>
        <p className="text-xl md:text-2xl text-[#86868b] mb-4 font-light">Where Creativity Meets Career Growth</p>
        <p className="text-base text-[#6e6e73] mb-10 max-w-2xl mx-auto leading-relaxed">
          Build your career with Luna Graphics — Nairobi's leading print and fabrication studio. Exciting roles across creative, technical, and business disciplines.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <AppleButton variant="primary" onClick={onViewPositions} className="px-8 py-3.5">
            View Open Positions
          </AppleButton>
          <AppleButton variant="secondary" onClick={() => {
            const s = encodeURIComponent('Spontaneous Application — CV Submission');
            const b = encodeURIComponent("Hello Luna Graphics Team,\n\nI'm writing to express interest in a potential role. Please find my CV attached.\n\nBest regards,\n[Your Name]");
            window.location.href = `mailto:info.lunagraphics@gmail.com?subject=${s}&body=${b}`;
          }}>
            Send Your CV
          </AppleButton>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
        {[['500+', 'Happy Clients'], ['98%', 'Satisfaction Rate'], ['10+', 'Years in Nairobi']].map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="text-2xl font-bold text-[#1d1d1f]">{n}</div>
            <div className="text-xs text-[#86868b] mt-0.5">{l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ---------- Open Positions ----------

const OpenPositions = ({ onApply }) => {
  const [expanded, setExpanded] = useState(null);
  const positionsRef = React.useRef(null);

  return (
    <section id="positions" ref={positionsRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">Open Positions</h2>
          <p className="text-[#86868b] text-lg max-w-xl mx-auto">Discover exciting roles across various departments.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POSITIONS.map((pos) => {
            const days = daysLeft(pos.deadline);
            const isOpen = expanded === pos.id;
            return (
              <motion.div key={pos.id} layout>
                <AppleCard className="p-6 cursor-pointer hover:shadow-md transition-shadow duration-300 h-full flex flex-col" onClick={() => setExpanded(isOpen ? null : pos.id)}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                        <pos.Icon size={20} className="text-[#1d1d1f]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1d1d1f] text-base leading-tight">{pos.title}</h3>
                        <span className="text-xs text-[#86868b]">{pos.type}</span>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp size={16} className="text-[#86868b] flex-shrink-0 mt-1" /> : <ChevronDown size={16} className="text-[#86868b] flex-shrink-0 mt-1" />}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#86868b] mb-4">
                    <Clock size={12} />
                    <span>{pos.experience} experience</span>
                  </div>

                  {days > 0 && (
                    <div className="mb-4">
                      <span className="text-xs font-medium text-[#1B4332] bg-[#1B4332]/8 px-2.5 py-1 rounded-full">{days} days left</span>
                    </div>
                  )}

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="border-t border-[#f5f5f7] pt-4 mb-4 overflow-hidden">
                        <p className="text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">Responsibilities</p>
                        <ul className="space-y-1.5 mb-4">
                          {pos.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#6e6e73]">
                              <Check size={12} className="text-[#34c759] flex-shrink-0 mt-0.5" />{r}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">Requirements</p>
                        <ul className="space-y-1.5">
                          {pos.requirements.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#6e6e73]">
                              <Star size={12} className="text-[#ff9f0a] flex-shrink-0 mt-0.5" />{r}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto">
                    <button
                      onClick={(e) => { e.stopPropagation(); if (days > 0) onApply(pos); }}
                      disabled={days === 0}
                      className={`w-full py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${days > 0 ? 'bg-[#1B4332] text-white hover:bg-[#2D5A3D]' : 'bg-[#f5f5f7] text-[#86868b] cursor-not-allowed'}`}
                    >
                      {days > 0 ? 'Apply Now' : 'Closed'}
                    </button>
                  </div>
                </AppleCard>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-[#86868b] mb-3">Don't see the perfect role? We're always looking for talent.</p>
          <AppleButton variant="secondary" onClick={() => {
            const s = encodeURIComponent('Spontaneous Application — CV Submission');
            const b = encodeURIComponent("Hello Luna Graphics Team,\n\nI'm writing to express interest in a potential role. Please find my CV attached.\n\nBest regards,\n[Your Name]");
            window.location.href = `mailto:info.lunagraphics@gmail.com?subject=${s}&body=${b}`;
          }}>
            <Mail size={14} /> Send Us Your CV
          </AppleButton>
        </div>
      </div>
    </section>
  );
};

// ---------- Values ----------

const CompanyValues = () => {
  const [active, setActive] = useState(0);
  const av = VALUES[active];

  return (
    <section className="py-20 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">Our Core Values</h2>
          <p className="text-[#86868b] text-lg max-w-xl mx-auto">The principles that shape our culture and everything we do.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            {VALUES.map((v, i) => (
              <button key={v.id} onClick={() => setActive(i)} className={`w-full text-left p-4 rounded-2xl transition-all duration-200 ${active === i ? 'bg-[#1B4332] text-white shadow-md' : 'bg-white/80 text-[#1d1d1f] hover:bg-white'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${active === i ? 'bg-white/20' : 'bg-[#f5f5f7]'}`}>
                    <v.Icon size={18} className={active === i ? 'text-white' : 'text-[#1d1d1f]'} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{v.title}</p>
                    <p className={`text-xs mt-0.5 ${active === i ? 'text-white/70' : 'text-[#86868b]'}`}>{v.short}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <AppleCard className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#f5f5f7] flex items-center justify-center">
                      <av.Icon size={28} className="text-[#1d1d1f]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1d1d1f]">{av.title}</h3>
                      <p className="text-sm text-[#86868b]">{av.short}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">{av.full}</p>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {av.principles.map((p, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-[#34c759] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-[#6e6e73]">{p}</span>
                      </div>
                    ))}
                  </div>
                </AppleCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[['98%', 'Client Satisfaction', '#34c759'], ['100%', 'Cross-dept Projects', '#0066cc'], ['85%', 'Internal Promotions', '#ff9f0a']].map(([n, l, c]) => (
            <AppleCard key={l} className="p-6 text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: c }}>{n}</div>
              <p className="text-sm font-medium text-[#1d1d1f] mb-1">{l}</p>
            </AppleCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Requirements ----------

const Requirements = () => {
  const [active, setActive] = useState('graphic-designer');
  const req = REQUIREMENTS[active];
  const reqKeys = Object.keys(REQUIREMENTS);
  const labels = { 'graphic-designer': 'Graphic Designer', 'designer-intern': 'Designer Intern', 'receptionist': 'Receptionist', 'sales-rep': 'Sales Rep', 'machine-operator': 'Machine Operator', 'digital-marketing': 'Digital Marketing' };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">Application Requirements</h2>
          <p className="text-[#86868b] text-lg max-w-xl mx-auto">Understand exactly what we're looking for in each role.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <AppleCard className="p-4 h-fit">
            <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wide mb-3 px-1">Select Role</p>
            <div className="space-y-1">
              {reqKeys.map(k => (
                <button key={k} onClick={() => setActive(k)} className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${active === k ? 'bg-[#1B4332] text-white font-medium' : 'text-[#1d1d1f] hover:bg-[#f5f5f7]'}`}>
                  {labels[k]}
                </button>
              ))}
            </div>
          </AppleCard>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <AppleCard className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#f5f5f7] flex items-center justify-center">
                      <req.Icon size={28} className="text-[#1d1d1f]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1d1d1f]">{req.title}</h3>
                      <p className="text-sm text-[#86868b]">Requirements & qualifications</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {[
                      { label: 'Education', icon: GraduationCap, rows: [['Minimum', req.education.minimum, Check, '#34c759'], ['Preferred', req.education.preferred, Star, '#ff9f0a'], ['Alternative', req.education.alternative, Info, '#0066cc']] },
                      { label: 'Experience', icon: Briefcase, rows: [['Minimum', req.experience.minimum, Clock, '#34c759'], ['Preferred', req.experience.preferred, TrendingUp, '#ff9f0a']] },
                    ].map(({ label, icon: I, rows }) => (
                      <div key={label}>
                        <div className="flex items-center gap-2 mb-3">
                          <I size={16} className="text-[#1d1d1f]" />
                          <h4 className="font-semibold text-[#1d1d1f] text-sm uppercase tracking-wide">{label}</h4>
                        </div>
                        <div className="space-y-2">
                          {rows.map(([tag, text, Ic, color]) => (
                            <div key={tag} className="flex items-start gap-3">
                              <Ic size={14} style={{ color }} className="flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-[#6e6e73]"><span className="font-medium text-[#1d1d1f]">{tag}: </span>{text}</p>
                            </div>
                          ))}
                        </div>
                        {label === 'Experience' && (
                          <div className="grid sm:grid-cols-2 gap-1.5 mt-3">
                            {req.experience.specific.map((s, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <ArrowRight size={12} className="text-[#86868b] flex-shrink-0 mt-1" />
                                <span className="text-xs text-[#6e6e73]">{s}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap size={16} className="text-[#1d1d1f]" />
                        <h4 className="font-semibold text-[#1d1d1f] text-sm uppercase tracking-wide">Skills</h4>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-semibold text-[#86868b] mb-2 uppercase tracking-wide">Technical</p>
                          <ul className="space-y-1.5">
                            {req.skills.technical.map((s, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#6e6e73]">
                                <Code size={12} className="text-[#1B4332] flex-shrink-0 mt-0.5" />{s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#86868b] mb-2 uppercase tracking-wide">Soft Skills</p>
                          <ul className="space-y-1.5">
                            {req.skills.soft.map((s, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#6e6e73]">
                                <Heart size={12} className="text-[#ff2d55] flex-shrink-0 mt-0.5" />{s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#f5f5f7] rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText size={16} className="text-[#1d1d1f]" />
                        <h4 className="font-semibold text-[#1d1d1f] text-sm">Portfolio & Documentation</h4>
                      </div>
                      <p className="text-sm text-[#6e6e73]">{req.portfolio}</p>
                    </div>
                  </div>
                </AppleCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <AppleCard className="mt-8 p-8">
          <h3 className="text-center font-bold text-[#1d1d1f] mb-6">Application Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              [FileCheck, 'Complete Application', 'Fill all required fields and upload every requested document.'],
              [Target, 'Tailor Your CV', 'Customise your cover letter to highlight relevant experience for the role.'],
              [Clock, 'Apply Early', 'We review applications on a rolling basis — sooner is better.'],
            ].map(([I, t, d]) => (
              <div key={t} className="text-center">
                <div className="w-11 h-11 bg-[#f5f5f7] rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <I size={20} className="text-[#1d1d1f]" />
                </div>
                <p className="font-semibold text-sm text-[#1d1d1f] mb-1">{t}</p>
                <p className="text-xs text-[#86868b]">{d}</p>
              </div>
            ))}
          </div>
        </AppleCard>
      </div>
    </section>
  );
};

// ---------- Application Form ----------

const FORM_DEFAULT = { firstName: '', lastName: '', email: '', phone: '', position: '', experience: '', education: '', skills: '', expectedSalary: '', availableDate: '', cvUrl: '', PhotoUrl: '', idPhotoUrl: '', agreeTerms: false, agreePrivacy: false };

const uploadToCloudinary = async (file, resourceType = 'image') => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  if (!cloudName || !preset) return null;
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', preset);
  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    return data.secure_url || null;
  } catch {
    return null;
  }
};

const ApplicationForm = ({ selectedPosition, onClose, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ ...FORM_DEFAULT, position: selectedPosition?.title || '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState({ cv: false, Photo: false, idPhoto: false });
  const [fileNames, setFileNames] = useState({ cv: '', Photo: '', idPhoto: '' });

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('lgApplication') || '{}');
      if (saved.formData) setFormData(p => ({ ...p, ...saved.formData }));
      if (saved.fileNames) setFileNames(p => ({ ...p, ...saved.fileNames }));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try { localStorage.setItem('lgApplication', JSON.stringify({ formData, fileNames })); } catch { /* ignore */ }
  }, [formData, fileNames]);

  const set = (field, val) => {
    setFormData(p => ({ ...p, [field]: val }));
    setErrors(p => ({ ...p, [field]: '' }));
  };

  const handleFile = async (field, file) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setErrors(p => ({ ...p, [field]: 'Max 5 MB' })); return; }
    setUploading(p => ({ ...p, [field]: true }));
    setErrors(p => ({ ...p, [field]: '' }));
    const rt = field === 'cv' ? 'raw' : 'image';
    const url = await uploadToCloudinary(file, rt);
    setUploading(p => ({ ...p, [field]: false }));
    if (url) {
      setFormData(p => ({ ...p, [`${field}Url`]: url }));
      setFileNames(p => ({ ...p, [field]: file.name }));
    } else {
      setErrors(p => ({ ...p, [field]: 'Upload failed. Try again.' }));
    }
  };

  const validate = (s) => {
    const e = {};
    if (s === 1) {
      if (!formData.firstName.trim()) e.firstName = 'Required';
      if (!formData.lastName.trim()) e.lastName = 'Required';
      if (!formData.email.trim()) e.email = 'Required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email';
      if (!formData.phone.trim()) e.phone = 'Required';
      else if (!/^\+254\d{9}$/.test(formData.phone)) e.phone = 'Format: +254XXXXXXXXX';
      if (!formData.position) e.position = 'Select a position';
    }
    if (s === 2) {
      if (!formData.experience) e.experience = 'Required';
      if (!formData.education) e.education = 'Required';
      if (!formData.skills.trim()) e.skills = 'Required';
      if (!formData.expectedSalary.trim()) e.expectedSalary = 'Required';
      if (!formData.availableDate) e.availableDate = 'Required';
    }
    if (s === 3) {
      if (!formData.cvUrl) e.cv = 'CV is required';
      if (!formData.idPhotoUrl) e.idPhoto = 'ID photo is required';
      if (!formData.agreeTerms) e.agreeTerms = 'You must agree';
      if (!formData.agreePrivacy) e.agreePrivacy = 'You must agree';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate(3)) return;
    setSubmitting(true);
    const ref = `LG${Date.now().toString().slice(-6)}`;
    try {
      await emailjs.send(
        import.meta.env.VITE_CAREERS_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_CAREERS_EMAILJS_TEMPLATE_ID,
        { applicantName: `${formData.firstName} ${formData.lastName}`, email: formData.email, phone: formData.phone, position: formData.position, experience: formData.experience, education: formData.education, skills: formData.skills, expectedSalary: formData.expectedSalary, availableDate: formData.availableDate, cv_url: formData.cvUrl, idPhoto_url: formData.idPhotoUrl, referenceNumber: ref },
        import.meta.env.VITE_CAREERS_EMAILJS_PUBLIC_KEY
      );
      localStorage.removeItem('lgApplication');
      onSuccess({ referenceNumber: ref, position: formData.position, applicantName: `${formData.firstName} ${formData.lastName}`, email: formData.email });
    } catch {
      setErrors({ submit: 'Submission failed. Please try again or email us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  const stepLabels = ['Basic Info', 'Professional', 'Documents'];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-xl rounded-t-3xl sm:rounded-t-3xl border-b border-[#f5f5f7] px-6 py-4 z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-[#1d1d1f] text-lg">{selectedPosition ? `Apply — ${selectedPosition.title}` : 'General Application'}</h2>
              <p className="text-xs text-[#86868b]">Step {step} of 3</p>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center hover:bg-[#e8e8ed] transition-colors">
              <X size={14} className="text-[#1d1d1f]" />
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map(s => (
              <React.Fragment key={s}>
                <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold transition-all ${s <= step ? 'bg-[#1B4332] text-white' : 'bg-[#f5f5f7] text-[#86868b]'}`}>{s < step ? <Check size={12} /> : s}</div>
                {s < 3 && <div className={`flex-1 h-0.5 rounded transition-all ${s < step ? 'bg-[#1B4332]' : 'bg-[#f5f5f7]'}`} />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {stepLabels.map(l => <span key={l} className="text-[10px] text-[#86868b]">{l}</span>)}
          </div>
        </div>

        <div className="px-6 py-6 space-y-5">
          {step === 1 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <AppleInput label="First Name" required placeholder="First name" value={formData.firstName} onChange={e => set('firstName', e.target.value)} error={errors.firstName} />
                <AppleInput label="Last Name" required placeholder="Last name" value={formData.lastName} onChange={e => set('lastName', e.target.value)} error={errors.lastName} />
              </div>
              <AppleInput label="Email" type="email" required placeholder="you@example.com" value={formData.email} onChange={e => set('email', e.target.value)} error={errors.email} />
              <AppleInput label="Phone" type="tel" required placeholder="+254712345678" description="Format: +254XXXXXXXXX" value={formData.phone} onChange={e => set('phone', e.target.value)} error={errors.phone} />
              <AppleSelect label="Position" required placeholder="Select a position" options={POSITION_OPTIONS} value={formData.position} onChange={v => set('position', v)} error={errors.position} />
            </>
          )}

          {step === 2 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <AppleSelect label="Experience" required placeholder="Years of experience" options={[{ value: '0-1', label: '0–1 years' }, { value: '1-2', label: '1–2 years' }, { value: '2-4', label: '2–4 years' }, { value: '4-6', label: '4–6 years' }, { value: '6+', label: '6+ years' }]} value={formData.experience} onChange={v => set('experience', v)} error={errors.experience} />
                <AppleSelect label="Education" required placeholder="Highest level" options={[{ value: 'certificate', label: 'Certificate' }, { value: 'diploma', label: 'Diploma' }, { value: 'degree', label: "Bachelor's" }, { value: 'masters', label: "Master's" }, { value: 'other', label: 'Other' }]} value={formData.education} onChange={v => set('education', v)} error={errors.education} />
              </div>
              <AppleInput label="Key Skills" required placeholder="Adobe Photoshop, Customer Service…" description="Separate with commas" value={formData.skills} onChange={e => set('skills', e.target.value)} error={errors.skills} />
              <AppleInput label="Expected Salary (KES)" required placeholder="e.g. 50000" value={formData.expectedSalary} onChange={e => set('expectedSalary', e.target.value)} error={errors.expectedSalary} />
              <AppleInput label="Available Start Date" type="date" required value={formData.availableDate} onChange={e => set('availableDate', e.target.value)} error={errors.availableDate} />
            </>
          )}

          {step === 3 && (
            <>
              {[
                { field: 'cv', label: 'CV / Resume', icon: Upload, accept: '.pdf,.doc,.docx', hint: 'PDF, DOC, DOCX — max 5 MB', required: true },
                { field: 'Photo', label: 'Passport Photo', icon: Camera, accept: 'image/*', hint: 'JPEG or PNG — max 5 MB', required: false },
                { field: 'idPhoto', label: 'National ID Photo', icon: CreditCard, accept: 'image/*', hint: 'JPEG or PNG — max 5 MB', required: true },
              ].map(({ field, label, icon: I, accept, hint, required }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
                  <label htmlFor={`${field}-upload`} className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-6 text-center transition-colors ${uploading[field] ? 'opacity-60 cursor-not-allowed border-[#d2d2d7]' : 'cursor-pointer border-[#d2d2d7] hover:border-[#1B4332] hover:bg-[#1B4332]/4'}`}>
                    <I size={24} className="text-[#86868b] mb-2" />
                    <p className="text-sm text-[#6e6e73]">{uploading[field] ? 'Uploading…' : fileNames[field] || `Upload ${label}`}</p>
                    <p className="text-xs text-[#86868b] mt-0.5">{hint}</p>
                    <input id={`${field}-upload`} type="file" accept={accept} className="hidden" disabled={uploading[field]} onChange={e => handleFile(field, e.target.files[0])} />
                  </label>
                  {errors[field] && <p className="mt-1 text-xs text-red-500">{errors[field]}</p>}
                </div>
              ))}

              <div className="space-y-3 pt-2 border-t border-[#f5f5f7]">
                {[
                  ['agreeTerms', 'I agree to the terms and conditions'],
                  ['agreePrivacy', 'I agree to the privacy policy and data processing'],
                ].map(([field, lbl]) => (
                  <label key={field} className="flex items-start gap-3 cursor-pointer">
                    <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border transition-colors ${formData[field] ? 'bg-[#1B4332] border-[#1B4332]' : 'border-[#d2d2d7]'}`} onClick={() => set(field, !formData[field])}>
                      {formData[field] && <Check size={12} className="text-white" />}
                    </div>
                    <span className="text-sm text-[#6e6e73]">{lbl}</span>
                  </label>
                ))}
                {errors.agreeTerms && <p className="text-xs text-red-500">{errors.agreeTerms}</p>}
                {errors.agreePrivacy && <p className="text-xs text-red-500">{errors.agreePrivacy}</p>}
              </div>

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-600">{errors.submit}</div>
              )}
            </>
          )}
        </div>

        <div className="sticky bottom-0 bg-white/90 backdrop-blur-xl border-t border-[#f5f5f7] px-6 py-4 flex justify-between">
          <AppleButton variant="secondary" onClick={step === 1 ? onClose : () => setStep(s => s - 1)} disabled={submitting}>
            {step === 1 ? 'Cancel' : 'Back'}
          </AppleButton>
          {step < 3 ? (
            <AppleButton variant="primary" onClick={() => { if (validate(step)) setStep(s => s + 1); }}>
              Continue <ArrowRight size={14} />
            </AppleButton>
          ) : (
            <AppleButton variant="primary" onClick={handleSubmit} loading={submitting}>
              <Send size={14} /> Submit Application
            </AppleButton>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// ---------- Success Modal ----------

const SuccessModal = ({ data, onClose }) => {
  const { referenceNumber, position, applicantName, email } = data;

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(20); doc.setFont('helvetica', 'bold');
    doc.text('Luna Graphics', 105, 22, { align: 'center' });
    doc.setFontSize(13); doc.setFont('helvetica', 'normal');
    doc.text('Application Receipt', 105, 31, { align: 'center' });
    autoTable(doc, {
      startY: 44,
      head: [['Field', 'Details']],
      body: [['Reference', referenceNumber], ['Applicant', applicantName], ['Email', email], ['Position', position], ['Date', new Date().toLocaleDateString('en-GB')]],
      theme: 'grid',
      headStyles: { fillColor: [29, 29, 31] },
      styles: { cellPadding: 3, fontSize: 11 },
      columnStyles: { 0: { fontStyle: 'bold' } },
    });
    const finalY = doc.lastAutoTable.finalY;
    doc.setFontSize(10); doc.setTextColor(140);
    doc.text('Keep this receipt for your records.', 105, finalY + 14, { align: 'center' });
    doc.save(`LunaGraphics_Application_${referenceNumber}.pdf`);
  };

  const NEXT_STEPS = [
    { n: 1, title: 'Application Review', desc: 'Our HR team will review your application within 3–5 business days.', time: 'Within 5 days', I: FileText },
    { n: 2, title: 'Initial Screening', desc: 'Qualified candidates will be contacted for a phone or video screening.', time: '5–7 days', I: Phone },
    { n: 3, title: 'In-Person Interview', desc: 'Final candidates will be invited to our Nairobi office.', time: '1–2 weeks', I: Users },
    { n: 4, title: 'Decision & Offer', desc: 'Successful candidates receive a job offer with terms and conditions.', time: '2–3 weeks', I: CheckCircle },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3 }} className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="text-center px-8 pt-10 pb-6 border-b border-[#f5f5f7]">
          <div className="w-16 h-16 bg-[#34c759]/12 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-[#34c759]" />
          </div>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2">Application Submitted</h2>
          <p className="text-sm text-[#86868b]">We've received your application for the <span className="font-medium text-[#1d1d1f]">{position}</span> position.</p>
        </div>

        <div className="px-6 py-6 border-b border-[#f5f5f7]">
          <div className="bg-[#f5f5f7] rounded-2xl p-5 mb-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[['Reference', referenceNumber], ['Position', position], ['Applicant', applicantName], ['Email', email]].map(([l, v]) => (
                <div key={l}><p className="text-[#86868b] text-xs">{l}</p><p className="font-semibold text-[#1d1d1f] mt-0.5 break-all">{v}</p></div>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3 bg-[#1B4332]/8 rounded-2xl p-4">
            <Info size={16} className="text-[#1B4332] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#1d1d1f]">Save your reference number <strong>{referenceNumber}</strong> for future correspondence. A confirmation email has been sent to {email}.</p>
          </div>
        </div>

        <div className="px-6 py-6 border-b border-[#f5f5f7]">
          <h3 className="font-bold text-[#1d1d1f] mb-4">What Happens Next</h3>
          <div className="space-y-4">
            {NEXT_STEPS.map(({ n, title, desc, time, I }) => (
              <div key={n} className="flex items-start gap-4">
                <div className="w-9 h-9 bg-[#f5f5f7] rounded-full flex items-center justify-center flex-shrink-0">
                  <I size={18} className="text-[#1d1d1f]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-semibold text-sm text-[#1d1d1f]">{n}. {title}</p>
                    <span className="text-[10px] text-[#86868b] bg-[#f5f5f7] px-2 py-0.5 rounded-full">{time}</span>
                  </div>
                  <p className="text-xs text-[#6e6e73]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 flex items-center justify-between">
          <AppleButton variant="secondary" onClick={downloadPdf}>
            <Download size={14} /> Download Receipt
          </AppleButton>
          <AppleButton variant="primary" onClick={onClose}>Done</AppleButton>
        </div>
      </motion.div>
    </div>
  );
};

// ---------- Root page ----------

const CareersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [successData, setSuccessData] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToPositions = () => {
    document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-[system-ui,-apple-system,BlinkMacSystemFont,'Helvetica_Neue',sans-serif]">
      <SEO
        title="Careers at Luna Graphics Nairobi | Join Our Team | Printing Jobs Kenya"
        description="Explore career opportunities at Luna Graphics — Nairobi's premier print shop. Roles in graphic design, sales, machine operation, and more. Apply online today."
        canonical="https://lunagraphics.co.ke/careers"
        type="website"
        keywords="Luna Graphics careers, printing jobs Nairobi, graphic designer jobs Kenya, jobs at Luna Graphics, print shop careers Nairobi, machine operator jobs Kenya"
        robots="index, follow"
        geo={{ region: 'KE-30', placename: 'Nairobi', position: '-1.280302;36.822639' }}
      />

      <Header />

      <main>
        <Hero onViewPositions={scrollToPositions} />
        <OpenPositions onApply={(pos) => { setSelectedPosition(pos); setShowForm(true); }} />
        <CompanyValues />
        <Requirements />
      </main>

      <footer className="bg-[#1B4332] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-bold text-lg mb-2">Luna Graphics</p>
              <p className="text-sm text-white/60 leading-relaxed">Nairobi's premier print and fabrication studio. Join a team that creates extraordinary work.</p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-3">Careers</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><button onClick={scrollToPositions} className="hover:text-white transition-colors">Open Positions</button></li>
                <li><a href="mailto:info.lunagraphics@gmail.com" className="hover:text-white transition-colors">Send Your CV</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm mb-3">Contact</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>+254 791 159 618</li>
                <li>info.lunagraphics@gmail.com</li>
                <li>Kweria Road, Nairobi</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Luna Graphics. All rights reserved.
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showForm && (
          <ApplicationForm
            selectedPosition={selectedPosition}
            onClose={() => { setShowForm(false); setSelectedPosition(null); }}
            onSuccess={(d) => { setShowForm(false); setSuccessData(d); }}
          />
        )}
        {successData && (
          <SuccessModal data={successData} onClose={() => setSuccessData(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersPage;
