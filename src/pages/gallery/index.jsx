import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/ui/Header';
import FilterChips from './components/FilterChips';
import SearchBar from './components/SearchBar';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import Icon from '../../components/AppIcon';

// --- THIS IS THE MAIN FIX ---
// We are importing the NAMED export 'projects' and renaming it to 'galleryProjects' for use in this file.
import { projects as galleryProjects } from '../../data/galleryData';

const GalleryPage = () => {
  const navigate = useNavigate();

  // Initialize the 'projects' state directly with the imported data
  const [projects, setProjects] = useState(galleryProjects);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const projectsPerPage = 12;

  // SEO Variables
  const pageTitle = `Luna Graphics Gallery in Nairobi | Luna Graphics`;
  const pageDescription = `Explore our portfolio of completed printing projects.`;
  const pageUrl = `https://lunagraphics.co.ke/gallery-page`;
  const imageUrl = "https://lunagraphics.co.ke/social-sharing-image.jpg";
  const brandName = "Luna Graphics";
  const twitterHandle = "@YourTwitterHandle";

  // Mock project data
  
  // Initialize projects and handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Simulate loading
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects.slice(0, projectsPerPage));
      setLoading(false);
    }, 1000);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = [...projects];

    // Apply filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(project => {
        return activeFilters.every(filter => {
          switch (filter.category) {
            case 'service':
              return project.serviceType === filter.value;
            case 'industry':
              return project.industry === filter.value;
            case 'material':
              return project.material === filter.value;
            case 'scale':
              return project.scale === filter.value;
            default:
              return true;
          }
        });
      });
    }

    // Apply search
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.client.toLowerCase().includes(searchLower) ||
        project.serviceType.toLowerCase().includes(searchLower) ||
        project.industry.toLowerCase().includes(searchLower)
      );
    }

    // Reset pagination when filters change
    setCurrentPage(1);
    setFilteredProjects(filtered.slice(0, projectsPerPage));
    setHasMore(filtered.length > projectsPerPage);
  }, [activeFilters, searchTerm]);

  const handleFilterToggle = useCallback((category, value, label) => {
    setActiveFilters(prev => {
      const existingIndex = prev.findIndex(
        filter => filter.category === category && filter.value === value
      );
      
      if (existingIndex >= 0) {
        return prev.filter((_, index) => index !== existingIndex);
      } else {
        return [...prev, { category, value, label }];
      }
    });
  }, []);

  const handleClearAllFilters = useCallback(() => {
    setActiveFilters([]);
    setSearchTerm('');
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleLoadMore = useCallback(async () => {
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filtered = [...mockProjects];

    // Apply current filters and search
    if (activeFilters.length > 0) {
      filtered = filtered.filter(project => {
        return activeFilters.every(filter => {
          switch (filter.category) {
            case 'service':
              return project.serviceType === filter.value;
            case 'industry':
              return project.industry === filter.value;
            case 'material':
              return project.material === filter.value;
            case 'scale':
              return project.scale === filter.value;
            default:
              return true;
          }
        });
      });
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.client.toLowerCase().includes(searchLower)
      );
    }

    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * projectsPerPage;
    
    setFilteredProjects(filtered.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
    setHasMore(filtered.length > endIndex);
  }, [activeFilters, searchTerm, currentPage]);

  const handleProjectClick = useCallback((project, index) => {
    setSelectedProject(project);
    setSelectedProjectIndex(index);
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setSelectedProject(null);
  }, []);

  const handleNextProject = useCallback(() => {
    if (selectedProjectIndex < filteredProjects.length - 1) {
      const nextIndex = selectedProjectIndex + 1;
      setSelectedProjectIndex(nextIndex);
      setSelectedProject(filteredProjects[nextIndex]);
    }
  }, [selectedProjectIndex, filteredProjects]);

  const handlePreviousProject = useCallback(() => {
    if (selectedProjectIndex > 0) {
      const prevIndex = selectedProjectIndex - 1;
      setSelectedProjectIndex(prevIndex);
      setSelectedProject(filteredProjects[prevIndex]);
    }
  }, [selectedProjectIndex, filteredProjects]);

  const handleRequestQuote = useCallback((project) => {
    navigate('/contact-page', { 
      state: { 
        selectedService: project.serviceType,
        projectReference: project.title 
      } 
    });
  }, [navigate]);

  // Get current filtered count for search results
  const getCurrentFilteredCount = () => {
    let filtered = [...projects];

    if (activeFilters.length > 0) {
      filtered = filtered.filter(project => {
        return activeFilters.every(filter => {
          switch (filter.category) {
            case 'service':
              return project.serviceType === filter.value;
            case 'industry':
              return project.industry === filter.value;
            case 'material':
              return project.material === filter.value;
            case 'scale':
              return project.scale === filter.value;
            default:
              return true;
          }
        });
      });
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.client.toLowerCase().includes(searchLower)
      );
    }

    return filtered.length;
  };

  return (
    <div className="min-h-screen bg-background">

            {/* 3. ADD THE HELMET COMPONENT RIGHT AT THE TOP */}
      <Helmet>
        {/* --- Primary Meta Tags (MUST be unique for each page) --- */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* --- Open Graph / Facebook --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={brandName} />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content={twitterHandle} />
      </Helmet>
      <Header />
      
      {/* Page Header */}
      <div className="pt-16 bg-gradient-to-br from-primary-50 to-surface-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Image" size={24} color="white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                Project Gallery
              </h1>
            </div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Explore our portfolio of completed printing projects. From large format banners to custom merchandise, 
              see the quality and creativity we bring to every project.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        totalResults={getCurrentFilteredCount()}
      />

      {/* Filter Chips */}
      <FilterChips
        filters={activeFilters}
        activeFilters={activeFilters}
        onFilterToggle={handleFilterToggle}
        onClearAll={handleClearAllFilters}
        isMobile={isMobile}
      />

      {/* Project Grid */}
      <ProjectGrid
        projects={filteredProjects}
        loading={loading}
        onProjectClick={handleProjectClick}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
        isMobile={isMobile}
      />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        currentIndex={selectedProjectIndex}
        totalProjects={filteredProjects.length}
        onRequestQuote={handleRequestQuote}
      />
    </div>
  );
};

export default GalleryPage;