import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SampleGallery = ({ samples }) => {
  const navigate = useNavigate(); // 2. Initialize the navigate function
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  
  if (!Array.isArray(samples) || samples.length === 0) {
    return null;
  }
  
  const categories = useMemo(() => {
    const allCategories = samples.map(sample => sample.category);
    return ['All', ...new Set(allCategories)];
  }, [samples]);

  const filteredSamples = useMemo(() => {
    if (selectedCategory === 'All') return samples;
    return samples.filter(sample => sample.category === selectedCategory);
  }, [selectedCategory, samples]);

  const openModal = (sample) => setSelectedImage(sample);
  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredSamples.findIndex(sample => sample.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredSamples.length;
    setSelectedImage(filteredSamples[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredSamples.findIndex(sample => sample.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredSamples.length - 1 : currentIndex - 1;
    setSelectedImage(filteredSamples[prevIndex]);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Sample Work Gallery
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing the quality and variety of our printing services.
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
                  ? 'bg-primary text-white' : 'bg-surface-50 text-text-secondary hover:bg-primary-100 hover:text-primary'
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
                <Image src={selectedImage.image} alt={selectedImage.title} className="w-full h-96 object-cover" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200"
                >
                   <Icon name="X" size={24} />
                </button>
                {/* Add Next/Prev buttons if you want */}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">{selectedImage.title}</h3>
                <p className="text-accent font-medium mb-4">{selectedImage.category}</p>
                <p className="text-text-secondary">This project showcases our precision capabilities and commitment to quality.</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            // 3. Update the onClick to use the navigate function
            onClick={() => navigate('/gallery-page')}
          >
            View Complete Gallery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SampleGallery;