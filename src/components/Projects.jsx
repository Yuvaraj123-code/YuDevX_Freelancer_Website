import React, { useState, useCallback, useMemo } from 'react';
import SectionTitle from './common/SectionTitle';
import { projects } from '../constants/projects';
import Button from './common/Button';
import '../styles/Projects.css';

const Projects = ({ showAll = false }) => {
  const [displayCount, setDisplayCount] = useState(showAll ? projects.length : 6);
  const [imageLoadErrors, setImageLoadErrors] = useState(new Set());
  const [loadingImages, setLoadingImages] = useState(new Set());

  const displayedProjects = useMemo(() => 
    projects.slice(0, displayCount), [displayCount]
  );

  const handleImageLoad = useCallback((projectId) => {
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(projectId);
      return newSet;
    });
  }, []);

  const handleImageError = useCallback((projectId) => {
    setImageLoadErrors(prev => new Set(prev).add(projectId));
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(projectId);
      return newSet;
    });
  }, []);

  const handleImageLoadStart = useCallback((projectId) => {
    setLoadingImages(prev => new Set(prev).add(projectId));
  }, []);

  const handleViewDetails = useCallback((project) => {
    // You can implement modal or navigation logic here
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const handleLiveDemo = useCallback((project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const getProjectStatus = (project) => {
    if (project.status === 'completed') return 'Completed';
    if (project.status === 'in-progress') return 'In Progress';
    return null;
  };

  const getImageSrc = (project) => {
    if (imageLoadErrors.has(project.id)) {
      // Fallback to a placeholder or default image
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjFGNUY5Ii8+CjxwYXRoIGQ9Ik0xNzUgMTAwTDIwMCAxMjVMMjI1IDEwMEwyMjUgMTQwSDE3NVYxMDBaIiBmaWxsPSIjOTRBM0I4Ii8+CjxjaXJjbGUgY3g9IjE4NSIgY3k9IjExMCIgcj0iNSIgZmlsbD0iIzk0QTNCOCIvPgo8dGV4dCB4PSIyMDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjQ3NDhCIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
    }
    return project.image;
  };
  

  return (
    <section id="projects" className="section projects"  >
      <div className="container" >
       <div className="section-title">
      <h1>Our Projects</h1>
      <p className="subtitle">Discover our latest work and innovative solutions</p>
      <div className="title-decoration"></div> {/* Optional decorative element */}
    </div>
        
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div key={project.id} className="project-card">
              {getProjectStatus(project) && (
                <div className={`project-status ${project.status}`}>
                  {getProjectStatus(project)}
                </div>
              )}
              
              <div className="project-image">
                {loadingImages.has(project.id) && (
                  <div className="project-loading">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                <img 
                  src={getImageSrc(project)}
                  alt={project.title}
                  onLoadStart={() => handleImageLoadStart(project.id)}
                  onLoad={() => handleImageLoad(project.id)}
                  onError={() => handleImageError(project.id)}
                  style={{ 
                    display: loadingImages.has(project.id) ? 'none' : 'block' 
                  }}
                />
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {project.tags && project.tags.length > 0 && (
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
                
                <div className="project-links">
                  <button 
                    className="project-btn view-details-btn"
                    onClick={() => handleViewDetails(project)}
                    aria-label={`View details for ${project.title}`}
                  >
                    View Details
                  </button>
                  
                  {project.liveUrl && (
                    <button 
                      className="project-btn live-demo-btn"
                      onClick={() => handleLiveDemo(project)}
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

       {!showAll && projects.length > displayCount && (
  <div className="view-all-section">
    <Button
      text="View All Projects" 
      url="/projects"
      style={{
                background: 'linear-gradient(135deg, #0f172a, #334155)',
                color: 'white',
                padding: '16px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                position: 'relative',
                overflow: 'hidden',
                border: 'none',
                cursor: 'pointer',
                bottom: '35px',
              }}
      className="view-all-btn"
      aria-label="View all projects"
    />
  </div>
)}
      </div>
    </section>
  );
};

export default Projects;