import React from 'react';
import data from './data.json'; // Import the project data from JSON
import './App.css'
import './Projects.css'; // Import the ProjectsPage specific styles

import Grid from './Grid'


const ProjectsPage = () => {
  return (
    <section id="projects" className="section">
      <h1>My Projects</h1>
      <h3>
        These are some of the projects that I have worked on over the past few years outside of school and university.
      </h3>
      <Grid 
        key={0}
        items={data.projects}
        base="assets/projects"
      />
    </section>

  );
};

export default ProjectsPage;