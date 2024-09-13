import React from 'react';
import data from './data.json'
import Grid from './Grid'
import './Experience.css';

const ExperiencesPage = () => {

  return (
    <section id="experiences" className="section experiences-page">
      <h1>My Experiences</h1>
      <div className="experience-section">
        <h2>Education</h2>
        <Grid 
          key={0}
          items={data.education}
          base="assets/experiences/education"
        />
      </div>
      <div className="experience-section">
        <h2>Work</h2>
        <Grid 
          key={1}
          items={data.work}
          base="assets/experiences/work"
        />
      </div>
      <div className="experience-section">
        <h2>Extra-Curriculars</h2>
        <Grid 
          key={2}
          items={data.extra}
          base="assets/experiences/extra"
        />
      </div>
    </section>
  );
};

export default ExperiencesPage;