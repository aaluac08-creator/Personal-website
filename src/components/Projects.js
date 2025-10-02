import React from 'react';
import './Projects.css';

const projects = [
  { title: 'Project 1', company: 'Company A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'about:blank' },
  { title: 'Project 2', company: 'Company B', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Project 3', company: 'Company C', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { title: 'Project 4', company: 'Company D', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { title: 'Project 5', company: 'Company E', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.' },
  { title: 'Project 6', company: 'Company F', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project, index) => (
            project.link ? (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <p className="company">{project.company}</p>
                  <p>{project.description}</p>
                </div>
              </a>
            ) : (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p className="company">{project.company}</p>
                <p>{project.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
