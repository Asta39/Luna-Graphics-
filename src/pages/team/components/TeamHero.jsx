import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const TeamHero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-surface-50 to-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} className="mr-2" />
            Meet Our Expert Team
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6">
            Skilled Professionals
            <span className="block text-primary">Behind Every Print</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Our certified team of printing specialists, designers, and technical experts brings decades of combined experience to deliver exceptional results for your business needs.
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="CheckCircle" size={20} className="text-accent" />
              <span className="font-medium">Certified Professionals</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="Award" size={20} className="text-accent" />
              <span className="font-medium">Industry Experts</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="Star" size={20} className="text-accent" />
              <span className="font-medium">Quality Focused</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => navigate('/contact-page')}
            >
              Work With Our Team
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Eye"
              iconPosition="left"
              onClick={() => navigate('/gallery-page')}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;