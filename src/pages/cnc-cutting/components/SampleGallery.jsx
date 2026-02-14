import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SampleGallery = ({ samples }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', ...new Set(samples.map(sample => sample.category))];
  
  const filteredSamples = selectedCategory === 'All' 
    ? samples 
    : samples.filter(sample => sample.category === selectedCategory);

  const openModal = (sample) => {
    setSelectedImage(sample);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            CNC Cutting Gallery
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our portfolio of precision CNC cutting projects showcasing diverse materials and complex geometries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white' :'bg-surface-50 text-text-secondary hover:bg-primary-100 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              className="group cursor-pointer"
              onClick={() => openModal(sample)}
            >
              <div className="aspect-square rounded-lg overflow-hidden shadow-sm border border-border group-hover:shadow-md transition-shadow duration-300">
                <Image
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
                  {sample.title}
                </h3>
                <p className="text-sm text-text-secondary">{sample.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="relative">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-accent font-medium mb-4">{selectedImage.category}</p>
                <p className="text-text-secondary">
                  This project demonstrates our precision CNC cutting capabilities, showcasing clean edges and accurate dimensions for professional fabrication results.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open('/gallery-page', '_self')}
          >
            View Complete Gallery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SampleGallery;