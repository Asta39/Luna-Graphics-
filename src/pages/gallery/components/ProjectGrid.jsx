import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Icon from '../../../components/AppIcon';

const ProjectGrid = ({ 
  projects, 
  loading, 
  onProjectClick, 
  hasMore, 
  onLoadMore,
  isMobile 
}) => {
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    await onLoadMore();
    setLoadingMore(false);
  };

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-background rounded-lg overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-[4/3] bg-surface-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-surface-200 rounded w-3/4" />
        <div className="h-3 bg-surface-200 rounded w-full" />
        <div className="h-3 bg-surface-200 rounded w-2/3" />
        <div className="flex justify-between">
          <div className="h-3 bg-surface-200 rounded w-1/4" />
          <div className="h-3 bg-surface-200 rounded w-1/4" />
        </div>
      </div>
    </div>
  );

  if (loading && projects.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid gap-6 ${
          isMobile 
            ? 'grid-cols-1 sm:grid-cols-2' :'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}>
          {Array.from({ length: 12 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!loading && projects.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-surface-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Search" size={32} color="var(--color-text-secondary)" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
            No Projects Found
          </h3>
          <p className="text-text-secondary mb-6 max-w-md mx-auto">
            We couldn't find any projects matching your current filters. Try adjusting your search criteria or clearing some filters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-600 transition-colors duration-200"
            >
              <Icon name="RotateCcw" size={16} />
              <span>Reset Filters</span>
            </button>
            <button
              onClick={() => window.open('/contact-page', '_blank')}
              className="flex items-center justify-center space-x-2 px-4 py-2 border border-border text-text-primary rounded-md hover:bg-surface-50 transition-colors duration-200"
            >
              <Icon name="MessageSquare" size={16} />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Projects Grid */}
      <div className={`grid gap-6 ${
        isMobile 
          ? 'grid-cols-1 sm:grid-cols-2' :'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      }`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.id}-${index}`}
            project={project}
            index={index}
            onClick={onProjectClick}
          />
        ))}
        
        {/* Loading more skeleton cards */}
        {loadingMore && Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard key={`loading-${index}`} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && !loadingMore && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-600 transition-all duration-200 transform hover:scale-105"
          >
            <Icon name="Plus" size={16} />
            <span>Load More Projects</span>
          </button>
        </div>
      )}

      {/* End of Results */}
      {!hasMore && projects.length > 0 && (
        <div className="text-center mt-12 py-8 border-t border-border">
          <div className="flex items-center justify-center space-x-2 text-text-secondary">
            <Icon name="CheckCircle" size={16} />
            <span className="text-sm">You've viewed all {projects.length} projects</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;