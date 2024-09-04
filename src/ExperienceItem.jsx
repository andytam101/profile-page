import React from 'react'
import './Experience.css';

const ExperienceItem = ({ image, caption, description }) => {
  return (
    <div className="experience-item">
      <div className="experience-front">
        <img src={image} alt={caption} className="experience-image" />
        <div className="experience-caption">{caption}</div>
      </div>
      <div className="experience-back">
        <div className="experience-description">
          <h4>{caption}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;