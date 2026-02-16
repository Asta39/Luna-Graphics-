import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-amber-800">New Collection Available</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-4">
              Professional <span className="text-amber-500">Printing</span> Solutions
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 max-w-lg">
              Premium banners, signage, and corporate materials. Fast turnaround, quality guaranteed, delivered across Kenya.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => document.getElementById('products-grid').scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="border-white text-white hover:bg-amber-500"
                onClick={() => navigate('/contact')}
              >
                Get Quote
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-emerald-600" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-emerald-600" />
                <span>24-48h Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-emerald-600" />
                <span>Premium Quality</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
              <img 
                src="/images/shop-hero.png" 
                alt="Printing Products Showcase" 
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold text-emerald-600">KES 800</p>
                    </div>
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border-2 border-white">
                        <Icon name="Award" size={16} className="text-emerald-600" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center border-2 border-white">
                        <Icon name="Zap" size={16} className="text-amber-600" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
                        <Icon name="ThumbsUp" size={16} className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full opacity-50 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-200 rounded-full opacity-50 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;