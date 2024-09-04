import React from 'react';
import './Projects.css';
import { getImageURL } from './utils/image-util';


const Project = ({ image, title, description, url }) => {
  return (
    <div className="project" onClick={() => window.open(url, '_blank')}>
      <img src={getImageURL(image)} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Project;