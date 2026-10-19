import React, { useEffect, useRef, useState } from 'react';
import SEO from '../../components/SEO';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import Icon from '../../components/AppIcon';

const PHONE = '+254791159618';
const PHONE_LABEL = '+254 791 159 618';
const EMAIL = 'info@lunagraphics.co.ke';
const LAT = -1.2803021317953365;
const LNG = 36.822639212706925;

const SERVICES = ['Banners and signage', 'T-shirts and apparel', 'UV or DTF printing', 'CNC or laser cutting', 'Corporate branding', 'Something else'];

const FAQS = [
  { q: "What's your typical turnaround time?", a: 'Standard orders take 3–5 business days. Rush orders take 24–48 hours, and same-day service is available for urgent jobs.' },
  { q: 'Do you deliver?', a: 'Yes. Delivery is free within Nairobi CBD for orders over KES 5,000. We also ship nationwide through trusted couriers.' },
  { q: 'How can I pay?', a: 'Cash, M-Pesa, bank transfer, and Visa or Mastercard.' },
  { q: 'Can I see samples before I order?', a: 'Yes. Visit the shop on Kweria Road to see materials and past work.' },
  { q: 'Do you design artwork?', a: "We adjust ready designs for print, like resizing and setting up bleed. We don't create new designs from scratch." },
  { q: 'Which file formats do you accept?', a: 'PDF, AI, EPS, PSD, JPG and PNG. High-resolution PDF works best.' },
];

const isKenyanPhone = (v) => /^(\+254|0)[17]\d{8}$/.test(v.replace(/\s/g, ''));

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const refs = { name: useRef(null), phone: useRef(null), message: useRef(null) };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = (f) => {
    const e = {};
    if (!f.name.trim()) e.name = 'Enter your name.';
    if (!f.phone.trim()) e.phone = 'Enter a phone number so we can reply.';
    else if (!isKenyanPhone(f.phone)) e.phone = 'Use a Kenyan number, like 0712 345 678 or +254 712 345 678.';
    if (f.message.trim().length < 10) e.message = 'Tell us a little more: what, how many, and by when.';
    return e;
  };

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(form);
    setErrors(found);
    const first = ['name', 'phone', 'message'].find((k) => found[k]);
    if (first) {
      refs[first].current?.focus();
      return;
    }
    const text = [
      'Hello Luna Graphics, I have a project.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.service ? `Service: ${form.service}` : null,
      '',
      form.message,
    ].filter((l) => l !== null).join('\n');
    window.open(`https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent('Hello Luna Graphics! I would like a quote.')}`, '_blank');
  };

  const fieldClass = (hasError) =>
    `w-full rounded-xl bg-white px-4 h-12 text-[16px] text-gray-900 placeholder:text-gray-400 outline-none transition-shadow ${
      hasError
        ? 'shadow-[inset_0_0_0_1.5px_#dc2626]'
        : 'shadow-[inset_0_0_0_1px_rgba(16,24,40,0.12)] focus:shadow-[inset_0_0_0_2px_#05433a]'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <SEO
        title="Contact Us | Get a Printing Quote in Nairobi | Luna Graphics"
        description="Get in touch with Luna Graphics for professional printing services in Nairobi. Call +254 791 159 618, WhatsApp, or visit our Kweria Road location for quotes and consultations."
        canonical="https://lunagraphics.co.ke/contact"
        keywords="contact luna graphics, printing services nairobi, print shop contact, nairobi printing company, printing quote nairobi, luna graphics phone number"
        robots="index, follow"
        geo={{ region: 'KE-30', placename: 'Nairobi', position: '-1.280302;36.822639' }}
      />
      <Header />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16">
        {/* Intro */}
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">Talk to us</h1>
          <p className="mt-3 text-lg text-gray-600">
            Tell us what you need printed. Most messages get a reply within minutes on WhatsApp, Monday to Saturday.
          </p>
        </div>

        {/* Ways to reach us */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <button
            onClick={openWhatsApp}
            className="press col-span-2 sm:col-span-1 text-left rounded-3xl bg-[#05433a] text-white p-5 sm:p-6 hover:bg-[#043a32]"
          >
            <Icon name="MessageCircle" size={26} />
            <p className="mt-4 sm:mt-6 text-lg font-semibold">WhatsApp</p>
            <p className="text-sm text-white/75">Fastest reply · {PHONE_LABEL}</p>
          </button>
          <a href={`tel:${PHONE}`} className="press block rounded-3xl bg-white card-surface p-5 sm:p-6">
            <Icon name="Phone" size={26} className="text-[#05433a]" />
            <p className="mt-4 sm:mt-6 text-lg font-semibold text-gray-900">Call</p>
            <p className="text-sm text-gray-500">{PHONE_LABEL}</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="press block rounded-3xl bg-white card-surface p-5 sm:p-6">
            <Icon name="Mail" size={26} className="text-[#05433a]" />
            <p className="mt-4 sm:mt-6 text-lg font-semibold text-gray-900">Email</p>
            <p className="text-sm text-gray-500 truncate">{EMAIL}</p>
          </a>
        </div>

        <div className="mt-14 sm:mt-20 grid gap-8 lg:grid-cols-2 items-start">
          {/* Brief */}
          <section aria-labelledby="brief-heading">
            <h2 id="brief-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900">Send a brief</h2>
            <p className="mt-2 text-gray-500">We'll open WhatsApp with your message ready to send.</p>

            {sent ? (
              <div className="mt-6 bg-white card-surface rounded-3xl p-8 text-center">
                <Icon name="CheckCircle" size={40} className="mx-auto text-[#05433a]" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Your brief is ready in WhatsApp</h3>
                <p className="mt-2 text-gray-500">Press send there and we'll reply with a price and timeline.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', service: '', message: '' }); }}
                  className="press mt-6 h-11 px-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold"
                >
                  Write another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 bg-white card-surface rounded-3xl p-5 sm:p-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-medium text-gray-900 mb-1.5">Name</label>
                    <input
                      id="c-name"
                      ref={refs.name}
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      autoComplete="name"
                      placeholder="Jane Wanjiru"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'c-name-err' : undefined}
                      className={fieldClass(errors.name)}
                    />
                    {errors.name && <p id="c-name-err" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-medium text-gray-900 mb-1.5">Phone</label>
                    <input
                      id="c-phone"
                      ref={refs.phone}
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      onBlur={() => form.phone && !isKenyanPhone(form.phone) && setErrors((p) => ({ ...p, phone: validate(form).phone }))}
                      autoComplete="tel"
                      placeholder="0712 345 678"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'c-phone-err' : undefined}
                      className={fieldClass(errors.phone)}
                    />
                    {errors.phone && <p id="c-phone-err" className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900 mb-2">What do you need? <span className="font-normal text-gray-500">Optional</span></legend>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const on = form.service === s;
                      return (
                        <button
                          key={s}
                          type="button"
                          aria-pressed={on}
                          onClick={() => update('service', on ? '' : s)}
                          className={`press h-10 px-4 rounded-full text-sm font-medium ${
                            on ? 'bg-[#05433a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="c-message" className="block text-sm font-medium text-gray-900 mb-1.5">Your project</label>
                  <textarea
                    id="c-message"
                    ref={refs.message}
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="50 pull-up banners, 85 × 200 cm, needed by Friday"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'c-message-err' : undefined}
                    className={`${fieldClass(errors.message)} h-auto py-3 resize-none`}
                  />
                  {errors.message && <p id="c-message-err" className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="press w-full h-14 rounded-full bg-[#05433a] hover:bg-[#043a32] text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Icon name="MessageCircle" size={20} />
                  Continue in WhatsApp
                </button>
              </form>
            )}
          </section>

          {/* Visit */}
          <section aria-labelledby="visit-heading">
            <h2 id="visit-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900">Visit the shop</h2>
            <p className="mt-2 text-gray-500">See materials and past work in person.</p>
            <div className="mt-6 bg-white card-surface rounded-3xl overflow-hidden">
              <div className="aspect-[16/10] bg-gray-100">
                <iframe
                  title="Map to Luna Graphics on Kweria Road"
                  src={`https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
              <ul className="divide-y divide-black/[0.06]">
                <li className="flex gap-3 px-5 py-4">
                  <Icon name="MapPin" size={20} className="mt-0.5 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Matumbo House, Kweria Road</p>
                    <p className="text-sm text-gray-500">Off Kirinyaga Road, Nairobi CBD · near Khoja stage</p>
                  </div>
                </li>
                <li className="flex gap-3 px-5 py-4">
                  <Icon name="Clock" size={20} className="mt-0.5 text-gray-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-gray-900"><span className="inline-block w-24 text-gray-500">Mon–Fri</span>8am – 6pm</p>
                    <p className="text-gray-900"><span className="inline-block w-24 text-gray-500">Saturday</span>9am – 4pm</p>
                    <p className="text-gray-900"><span className="inline-block w-24 text-gray-500">Sunday</span>Closed</p>
                  </div>
                </li>
              </ul>
              <div className="px-5 pb-5">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press w-full h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold flex items-center justify-center gap-2"
                >
                  <Icon name="Navigation" size={18} />
                  Get directions
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ */}
        <section className="mt-14 sm:mt-20 max-w-3xl" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-semibold text-gray-900">Common questions</h2>
          <div className="mt-6 bg-white card-surface rounded-3xl divide-y divide-black/[0.06]">
            {FAQS.map((item) => (
              <details key={item.q} className="group px-5 sm:px-6">
                <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Icon name="ChevronDown" size={18} className="flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="pb-5 -mt-1 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
