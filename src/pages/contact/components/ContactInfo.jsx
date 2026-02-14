import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const currentYear = new Date().getFullYear();

  const contactDetails = [
    {
      icon: 'MapPin',
      title: 'Visit Our Studio',
      primary: 'Luna Graphics',
      secondary: 'Kweria Road, Nairobi CBD',
      tertiary: 'Near Khoja Stage',
      action: {
        label: 'Get Directions',
        onClick: () => window.open('https://maps.google.com/?q=-1.2864,36.8172', '_blank')
      }
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      primary: '+254 791 159 618',
      
      tertiary: 'Available 24/7 for urgent orders',
      action: {
        label: 'Call Now',
        onClick: () => window.open('tel:+254791159618', '_self')
      }
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      primary: 'info.lunagraphics@gmail.com',
      
      tertiary: 'Response within 2-4 hours',
      action: {
        label: 'Send Email',
        onClick: () => window.open('mailto:info.lunagraphics@gmail.com', '_self')
      }
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      primary: '+254 791 159 618',
      secondary: 'Quick quotes & support',
      tertiary: 'Instant response during business hours',
      action: {
        label: 'Chat on WhatsApp',
        onClick: () => {
          const message = 'Hello! I would like to inquire about your printing services.';
          window.open(`https://wa.me/254791159618?text=${encodeURIComponent(message)}`, '_blank');
        }
      }
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed (Emergency only)' },
    { day: 'Public Holidays', hours: 'By Appointment' }
  ];

  const emergencyServices = [
    {
      icon: 'Clock',
      title: 'Rush Orders',
      description: 'Same-day printing available for urgent projects',
      availability: '24-hour turnaround'
    },
    {
      icon: 'Truck',
      title: 'Delivery Service',
      description: 'Free delivery within Nairobi CBD for orders over KES 5,000',
      availability: 'Same-day delivery'
    },
    {
      icon: 'CreditCard',
      title: 'Payment Options',
      description: 'Cash, M-Pesa, Bank Transfer, Visa/Mastercard accepted',
      availability: 'Flexible payment terms'
    }
  ];

const socialLinks = [
  {
    platform: 'Facebook',
    icon: 'Facebook', // Correct name
    url: 'https://www.facebook.com/share/1ZznhZ5yRk/',
    followers: '2.5K'
  },
  {
    platform: 'Instagram',
    icon: 'Instagram', // Correct name
    url: 'https://www.instagram.com/lunagraphics_ke?igsh=MWY4NDZreXczM25meg==',
    followers: '11.5K'
  },
  {
    platform: 'TikTok',
    icon: 'TikTok', // Correct name (case-sensitive)
    url: 'https://www.tiktok.com/@lunagraphics_k3?_r=1&_d=ejmc62jig91h09&sec_uid=MS4wLjABAAAAZlbjAWOqOjTPynxBOV67SWTQr1V5ENcqjaS35yRfclTqT0nTu4UsCmIjaMZfJ7Jz&share_author_id=7183680267814978566&sharer_language=en&source=h5_m&u_code=e5al48ed8eg3bb&timestamp=1751362691&user_id=7176488124331426822&sec_user_id=MS4wLjABAAAATSIAFkAgEMhoE8rAvPr4ZJc6P66T1hwfNiIzpFFuuvqKGtTCWttlkw1fMcvoDTqM&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7518431460690003768&share_link_id=a40a8793-7ad4-47bc-bbe8-7b06401ba888&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=ChatShellActivity%2Cb5836&social_share_type=5&enable_checksum=1', // UPDATE THIS URL
    followers: '15K' // UPDATE THIS
  },
  {
    platform: 'Pinterest',
    icon: 'Pinterest', // Correct name (case-sensitive)
    url: 'https://pin.it/3HZXaQKuX', // UPDATE THIS URL
    followers: '1.2K' // UPDATE THIS
  }
];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-background rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6">
          Get In Touch
        </h2>
        
        <div className="space-y-6">
          {contactDetails.map((contact, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface-50 transition-colors duration-200">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Icon name={contact.icon} size={24} color="var(--color-primary)" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {contact.title}
                </h3>
                <p className="text-text-primary font-medium">
                  {contact.primary}
                </p>
                {contact.secondary && (
                  <p className="text-text-secondary text-sm">
                    {contact.secondary}
                  </p>
                )}
                {contact.tertiary && (
                  <p className="text-text-muted text-xs mt-1">
                    {contact.tertiary}
                  </p>
                )}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={contact.action.onClick}
                  className="mt-3 text-primary border-primary hover:bg-primary hover:text-white"
                >
                  {contact.action.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-background rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Clock" size={24} color="var(--color-primary)" />
          <h3 className="text-xl font-heading font-semibold text-text-primary">
            Business Hours
          </h3>
        </div>
        
        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-surface-200 last:border-b-0">
              <span className="text-text-primary font-medium">
                {schedule.day}
              </span>
              <span className="text-text-secondary">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-accent-50 rounded-lg">
          <p className="text-sm text-accent-700">
            <Icon name="Info" size={16} className="inline mr-1" />
            All times are in East Africa Time (EAT). For urgent orders outside business hours, 
            please call or WhatsApp us directly.
          </p>
        </div>
      </div>

      {/* Emergency Services */}
      <div className="bg-background rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
          Additional Services
        </h3>
        
        <div className="space-y-4">
          {emergencyServices.map((service, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-surface-50">
              <div className="flex-shrink-0 w-8 h-8 bg-secondary-100 rounded-md flex items-center justify-center">
                <Icon name={service.icon} size={16} color="var(--color-secondary)" />
              </div>
              
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-text-primary">
                  {service.title}
                </h4>
                <p className="text-xs text-text-secondary mt-1">
                  {service.description}
                </p>
                <p className="text-xs text-accent font-medium mt-1">
                  {service.availability}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-background rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
          Follow Us
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social, index) => (
            <button
              key={index}
              onClick={() => window.open(social.url, '_blank')}
              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-surface-50 hover:border-primary transition-all duration-200"
            >
              <Icon name={social.icon} size={20} color="var(--color-text-secondary)" />
              <div className="text-left">
                <div className="text-sm font-medium text-text-primary">
                  {social.platform}
                </div>
                <div className="text-xs text-text-muted">
                  {social.followers} followers
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 text-white">
        <h3 className="text-xl font-heading font-semibold mb-3">
          Need Immediate Assistance?
        </h3>
        <p className="text-primary-50 mb-4 text-sm">
          Our team is ready to help with your printing needs. Get instant quotes and expert advice.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.open('tel:+254791159618', '_self')}
            className="flex-1"
          >
            Call Now
          </Button>
          <Button
            variant="accent"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => {
              const message = 'Hello! I need immediate assistance with my printing project.';
              window.open(`https://wa.me/254791159618?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="flex-1 border-white text-white hover:bg-white hover:text-primary"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;