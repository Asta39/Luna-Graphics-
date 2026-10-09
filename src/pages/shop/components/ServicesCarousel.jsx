import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services, getWhatsAppLink } from '../../../data/services.js';

const SERVICE_ROUTES = {
  'large-format-printing': '/services/large-format',
  'uv-printing': '/services/uv-printing',
  'digital-printing': '/services/digital-printing',
  'sublimation-printing': '/services/sublimation-printing',
  'screen-printing': '/services/t-shirt-printing',
  'embroidery': '/services/t-shirt-printing',
  'laser-engraving': '/services/laser-cutting',
  'vehicle-branding': '/corporate-services',
  'signage-solutions': '/services/cnc-cutting',
  'branding-consultation': '/corporate-services',
};

// hero = large-format (index 0), medium = indices 1-4
// second large = signage-solutions (index 8), fills left of bottom 2x2
// small = embroidery(5), laser(6), vehicle-branding(7), branding-consultation(9)
const hero = services[0];
const medium = services.slice(1, 5);
const secondLarge = services[8]; // signage-solutions
const small = [services[5], services[6], services[7], services[9]];

const ServicesGrid = () => {
  const navigate = useNavigate();

  const go = (id) => navigate(SERVICE_ROUTES[id] || '/corporate-services');
  const wa = (e, service) => { e.stopPropagation(); window.open(getWhatsAppLink(service.name), '_blank'); };

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-1 text-gray-500">Professional printing and branding solutions for your business</p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[220px] lg:auto-rows-[260px]">

          {/* MEDIUM cards first in DOM so hero can be placed top-right via col-start */}
          {medium.map((service) => (
            <div
              key={service.id}
              onClick={() => go(service.id)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-sm lg:text-base font-bold text-white leading-tight mb-1">{service.name}</h3>
                <p className="text-xs text-gray-300 line-clamp-1 hidden lg:block">{service.shortDescription}</p>
                <button
                  onClick={(e) => wa(e, service)}
                  className="mt-2 self-start px-3 py-1.5 bg-emerald-500/90 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}

          {/* HERO card — top-right (col 3-4, rows 1-2), diagonal to second large */}
          <div
            onClick={() => go(hero.id)}
            className="col-span-2 row-span-2 lg:col-start-3 lg:row-start-1 relative rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">Featured</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">{hero.name}</h3>
              <p className="text-sm text-gray-300 mb-4 line-clamp-2 max-w-xs">{hero.shortDescription}</p>
              <div className="flex gap-3">
                <button
                  onClick={(e) => wa(e, hero)}
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Get Quote
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); go(hero.id); }}
                  className="px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-semibold rounded-xl border border-white/30 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* SECOND LARGE card — signage-solutions, bottom-left (diagonal to hero) */}
          <div
            onClick={() => go(secondLarge.id)}
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={secondLarge.image}
              alt={secondLarge.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">{secondLarge.name}</h3>
              <p className="text-sm text-gray-300 mb-4 line-clamp-2 max-w-xs">{secondLarge.shortDescription}</p>
              <div className="flex gap-3">
                <button
                  onClick={(e) => wa(e, secondLarge)}
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Get Quote
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); go(secondLarge.id); }}
                  className="px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-semibold rounded-xl border border-white/30 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* SMALL cards — 4 cards fill right side of second large (2×2) */}
          {small.map((service) => (
            <div
              key={service.id}
              onClick={() => go(service.id)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-sm font-bold text-white leading-tight">{service.name}</h3>
                <button
                  onClick={(e) => wa(e, service)}
                  className="mt-1.5 self-start px-3 py-1 bg-emerald-500/90 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/corporate-services')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors text-sm"
          >
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
