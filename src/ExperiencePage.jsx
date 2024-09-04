import React from 'react';
import './Experience.css';
import data from './data.json'
import ExperienceItem from './ExperienceItem';


const getImageURL = image => new URL(`./assets/experiences/${image}`, import.meta.url).href


const ExperiencesPage = () => {

  return (
    <section id="experiences" className="section experiences-page">
      <h2>My Experiences</h2>
      <div className="experience-section">
        <h3>Education</h3>
        <div className="experience-grid">
          {data.education.map((item, index) => (
            <ExperienceItem 
              key={index} 
              image={getImageURL(item.image)}
              caption={item.caption}
              description={item.description} 
            />
          ))}
        </div>
      </div>
      <div className="experience-section">
        <h3>Work</h3>
        <div className="experience-grid">
          {data.work.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="experience-section">
        <h3>Extra-Curriculars</h3>
        <div className="experience-grid">
          {data.extra.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesPage;