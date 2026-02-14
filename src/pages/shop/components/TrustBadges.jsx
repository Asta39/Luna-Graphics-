import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const badges = [
  { icon: 'Truck', title: 'Free Delivery', desc: 'Within Nairobi', color: 'blue' },
  { icon: 'RefreshCw', title: 'Easy Returns', desc: '7-day policy', color: 'green' },
  { icon: 'BadgePercent', title: 'Bulk Discounts', desc: 'Save more', color: 'amber' },
  { icon: 'HeadphonesIcon', title: 'Expert Support', desc: 'Mon-Sat 8am-6pm', color: 'purple' }
];

const TrustBadges = () => {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <motion.div 
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                badge.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                badge.color === 'green' ? 'bg-emerald-100 text-emerald-600' :
                badge.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                <Icon name={badge.icon} size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{badge.title}</h3>
                <p className="text-gray-500 text-xs">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;