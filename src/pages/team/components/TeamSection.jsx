import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = ({ title, description, members, isLeadership = false }) => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Team Grid */}
        <div className={`grid gap-8 ${
          isLeadership 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {members.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              isLeadership={isLeadership}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;