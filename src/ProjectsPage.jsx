import React from 'react';
import Project from './Project'; // Import the Project component
import data from './data.json'; // Import the project data from JSON
import './App.css'
import './Projects.css'; // Import the ProjectsPage specific styles


const getProjectURL = image => new URL(`./assets/projects/${image}`, import.meta.url).href


const ProjectsPage = () => {
  return (
    <section id="projects" className="section">
      <h1>My Projects</h1>
      <p>
        These are some of the projects that I have worked on over the past few years outside of school and university.
      </p>
      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <Project 
            key={index} 
            image={getProjectURL(project.image)}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </section>

  );
};

export default ProjectsPage;