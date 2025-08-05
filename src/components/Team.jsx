import React from 'react';
import { team } from '../constants/team';
import SectionTitle from './common/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedinIn,
  faGithub,
  faTwitter,
  faDribbble,
  faBehance,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Team.css';

const Team = () => {
  // Social media icons mapping using FontAwesome components
  const socialIcons = {
    linkedin: faLinkedinIn,
    github: faGithub,
    twitter: faTwitter,
    dribbble: faDribbble,
    behance: faBehance,
    instagram: faInstagram
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <SectionTitle 
          title="Our Team" 
          subtitle="Meet our talented professionals" 
        />
        
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/assets/images/team-placeholder.jpg';
                  }}
                />
                <div className="social-links">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a 
                      key={platform}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s ${platform}`}
                    >
                      <FontAwesomeIcon icon={socialIcons[platform]} />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;