import React from 'react';
import Icon from '../../../components/AppIcon';

const ComplianceSection = () => {
  const complianceAreas = [
    {
      title: 'Political Advertising Compliance',
      icon: 'Shield',
      color: 'primary',
      requirements: [
        'IEBC guidelines for campaign materials',
        'Proper disclaimers and authorization statements',
        'Content approval and verification processes',
        'Material durability standards for outdoor use',
        'Color accuracy for party branding requirements'
      ],
      description: 'We ensure all political campaign materials meet IEBC regulations and electoral guidelines for the 2027 elections.'
    },
    {
      title: 'Material Quality Standards',
      icon: 'Award',
      color: 'secondary',
      requirements: [
        'ISO 9001:2015 quality management certification',
        'UV resistance testing for outdoor materials',
        'Color fastness and fade resistance standards',
        'Weather durability for Kenyan climate conditions',
        'Fire safety compliance for indoor displays'
      ],
      description: 'All materials undergo rigorous quality testing to ensure longevity and performance in Kenya\'s diverse climate.'
    },
    {
      title: 'Environmental Compliance',
      icon: 'Leaf',
      color: 'accent',
      requirements: [
        'NEMA environmental impact compliance',
        'Eco-friendly ink and material options',
        'Waste reduction and recycling programs',
        'Sustainable production practices',
        'Carbon footprint reduction initiatives'
      ],
      description: 'We prioritize environmental responsibility while delivering high-quality printing solutions.'
    },
    {
      title: 'Business Regulatory Compliance',
      icon: 'FileText',
      color: 'warning',
      requirements: [
        'Valid business registration and licensing',
        'KRA tax compliance and PIN registration',
        'Professional indemnity insurance coverage',
        'Data protection and client confidentiality',
        'Intellectual property rights protection'
      ],
      description: 'Full regulatory compliance ensures secure and professional service delivery for all corporate clients.'
    }
  ];

  const deliveryLogistics = [
    {
      area: 'Nairobi Metropolitan',
      coverage: '100% Coverage',
      deliveryTime: 'Same day',
      icon: 'MapPin',
      details: [
        'CBD and surrounding areas',
        'Industrial Area and Eastlands',
        'Westlands and Karen',
        'Kasarani and Embakasi'
      ]
    },
    {
      area: 'Central Kenya',
      coverage: '95% Coverage',
      deliveryTime: '1-2 days',
      icon: 'Truck',
      details: [
        'Kiambu, Murang\'a, Nyeri',
        'Nakuru and surrounding towns',
        'Thika and Machakos',
        'Major urban centers'
      ]
    },
    {
      area: 'National Coverage',
      coverage: '80% Coverage',
      deliveryTime: '2-5 days',
      icon: 'Globe',
      details: [
        'All 47 county headquarters',
        'Major towns and cities',
        'Strategic partner network',
        'Specialized logistics for remote areas'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Compliance & Logistics
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ensuring regulatory compliance and reliable delivery across Kenya for all corporate and political projects
          </p>
        </div>

        {/* Compliance Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Regulatory Compliance
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-surface-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-${area.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={area.icon} size={24} color={`var(--color-${area.color})`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-heading font-bold text-text-primary mb-2">
                      {area.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {area.requirements.map((requirement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className={`text-${area.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-text-secondary">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Logistics */}
        <div>
          <h3 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Delivery Logistics Network
          </h3>
          
          {/* Logistics Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {deliveryLogistics.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={area.icon} size={28} color="white" />
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  {area.area}
                </h4>
                <div className="space-y-2 mb-6">
                  <div className="text-2xl font-heading font-bold text-secondary">
                    {area.coverage}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Delivery: {area.deliveryTime}
                  </div>
                </div>
                <div className="space-y-2">
                  {area.details.map((detail, idx) => (
                    <div key={idx} className="text-sm text-text-secondary">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Logistics Features */}
          <div className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-heading font-bold mb-4">Logistics Capabilities</h4>
              <p className="text-primary-100">
                Comprehensive delivery solutions ensuring your materials reach their destination on time
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: 'Clock', title: 'Real-time Tracking', desc: 'GPS tracking for all deliveries' },
                { icon: 'Shield', title: 'Secure Transport', desc: 'Protected and insured shipments' },
                { icon: 'Users', title: 'Dedicated Team', desc: 'Specialized logistics personnel' },
                { icon: 'Phone', title: '24/7 Support', desc: 'Round-the-clock customer service' }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={24} color="white" />
                  </div>
                  <h5 className="font-semibold mb-2">{feature.title}</h5>
                  <p className="text-sm text-primary-200">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Special Services */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="bg-surface-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Zap" size={24} className="text-warning" />
                <h4 className="text-lg font-semibold text-text-primary">Rush Orders</h4>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Emergency printing and delivery services for urgent political or corporate requirements.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>4-hour express printing available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Same-day delivery in Nairobi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Weekend and holiday service</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Package" size={24} className="text-accent" />
                <h4 className="text-lg font-semibold text-text-primary">Installation Services</h4>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Professional installation and setup services for large format displays and signage.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Trained installation technicians</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Site survey and planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Post-installation support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;