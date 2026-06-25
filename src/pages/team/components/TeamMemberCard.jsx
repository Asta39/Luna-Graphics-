import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamMemberCard = ({ member, isLeadership = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = member.whatsapp;
    const message = `Hello ${member.name}, I would like to inquire about ${member.specialization} services.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const subject = `Inquiry about ${member.specialization} services`;
    const body = `Hello ${member.name},\n\nI would like to inquire about your ${member.specialization} services.\n\nBest regards`;
    window.location.href = `mailto:${member.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`bg-background rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary-200 ${
      isLeadership ? 'lg:col-span-2' : ''
    }`}>
      {/* Profile Header */}
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-100">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.title}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
              <Icon name="CheckCircle" size={16} color="white" />
            </div>
          </div>

          {/* Basic Info */}
          <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
            {member.name}
          </h3>
          <p className="text-primary font-semibold mb-2">{member.title}</p>
          <p className="text-text-secondary text-sm mb-4">{member.specialization}</p>

          {/* Experience Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
            <Icon name="Award" size={14} className="mr-1" />
            {member.experience} years experience
          </div>

          {/* Brief Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {member.briefDescription}
          </p>

          {/* Key Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {member.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium"
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 3 && (
              <span className="px-2 py-1 bg-surface-200 text-text-secondary text-xs rounded-md font-medium">
                +{member.skills.length - 3} more
              </span>
            )}
          </div>

          {/* Contact Actions */}
          <div className="flex gap-2 mb-4">
            <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              onClick={handleWhatsAppClick}
              className="text-accent border-accent hover:bg-accent hover:text-white"
            >
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Mail"
              onClick={handleEmailClick}
              className="text-primary border-primary hover:bg-primary hover:text-white"
            >
              Email
            </Button>
          </div>

          {/* Expand Button */}
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-text-secondary hover:text-primary"
          >
            {isExpanded ? 'Show Less' : 'View Details'}
          </Button>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-border bg-surface-50 p-6 animate-slide-down">
          <div className="space-y-6">
            {/* Detailed Background */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="User" size={16} className="mr-2 text-primary" />
                Background
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {member.detailedBackground}
              </p>
            </div>

            {/* Certifications */}
            {member.certifications && member.certifications.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                  <Icon name="Certificate" size={16} className="mr-2 text-primary" />
                  Certifications
                </h4>
                <div className="space-y-2">
                  {member.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle2" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Skills */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="Settings" size={16} className="mr-2 text-primary" />
                Expertise Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
                  <Icon name="Trophy" size={16} className="mr-2 text-primary" />
                  Key Achievements
                </h4>
                <div className="space-y-2">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="Star" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Completed */}
            {member.projectsCompleted && (
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{member.projectsCompleted}</div>
                  <div className="text-xs text-text-secondary">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{member.clientSatisfaction}%</div>
                  <div className="text-xs text-text-secondary">Client Satisfaction</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;