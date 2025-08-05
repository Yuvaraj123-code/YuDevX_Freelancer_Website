import React from 'react';
import '../../styles/Project.css'; // or include styles in main CSS

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;