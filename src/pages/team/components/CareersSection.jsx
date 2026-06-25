import React from 'react';
// useNavigate is no longer needed in this component, so it has been removed.
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareersSection = () => {
  
  // --- THIS IS THE UPDATED FUNCTION ---
  const handleApplyClick = () => {
    // This now opens your external careers page in a new tab.
    window.open('https://lunaaccounts.co.ke', '_blank');
  };

  const workBenefits = [
    {
      icon: "Zap",
      title: "Innovative Projects",
      description: "Work with cutting-edge printing technology on exciting and challenging projects."
    },
    {
      icon: "Award",
      title: "Professional Growth",
      description: "We invest in our team's skills with continuous training and development opportunities."
    },
    {
      icon: "Users",
      title: "Collaborative Culture",
      description: "Join a supportive and creative team that values collaboration and new ideas."
    }
  ];

  return (
    <section className="bg-surface-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content: Title and CTA */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Join Our Team
              </h2>
              <p className="text-text-secondary mb-6">
                We're always looking for passionate and talented individuals to join the Luna Graphics family. Explore a rewarding career with us.
              </p>
              <Button
                variant="primary"
                size="lg"
                iconName="Send"
                iconPosition="right"
                onClick={handleApplyClick} // This now calls the updated function
              >
                View Open Positions
              </Button>
            </div>

            {/* Right Content: Benefits */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {workBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon name={benefit.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{benefit.title}</h4>
                      <p className="text-text-secondary text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;