import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import '../styles/Projects.css';

const AllProjects = () => {

     useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <div className="all-projects-page">
      <Projects showAll={true} />
    </div>
  );
};

export default AllProjects;