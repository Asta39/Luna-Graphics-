import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamStats = () => {
  const stats = [
    {
      icon: "Users",
      value: "15+",
      label: "Team Members",
      description: "Skilled professionals"
    },
    {
      icon: "Award",
      value: "50+",
      label: "Years Combined",
      description: "Industry experience"
    },
    {
      icon: "CheckCircle",
      value: "2000+",
      label: "Projects Completed",
      description: "Successful deliveries"
    },
    {
      icon: "Star",
      value: "98%",
      label: "Client Satisfaction",
      description: "Happy customers"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-primary-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Our Team by Numbers
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering exceptional printing and design solutions
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={32} color="white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-primary-100 mb-1">{stat.label}</div>
              <div className="text-sm text-primary-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamStats;