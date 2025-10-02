import React, { useState } from 'react';
import './Projects.css';
import kazakhPhoto from './Kazakh photo.jpg';

const projects = [
  { title: 'On Kazakh culture', company: 'Company A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'about:blank', image: kazakhPhoto },
  { title: 'World cultures', company: 'Company B', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://via.placeholder.com/300x180' },
  { title: 'Technovasions', company: 'Company C', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: 'https://via.placeholder.com/300x180' },
  { title: 'Model UN', company: 'Company D', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'https://via.placeholder.com/300x180' },
  { title: 'Youtube videos', company: 'Company E', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', image: 'https://via.placeholder.com/300x180' },
  { title: 'School magazine', company: 'Company F', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', image: 'https://via.placeholder.com/300x180' },
];

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section id="projects" className="projects">
      <div className="carousel-container">
        <div
          className="cards-wrapper"
          style={{ transform: `translateX(-${activeSlide * 50}%)` }}
        >
          <div className="cards-container">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index} className="card">
                <img src={project.image} alt={project.title} className="card-image" />
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-button">View Project</div>
              </div>
            ))}
          </div>
          <div className="cards-container">
            {projects.slice(3, 6).map((project, index) => (
              <div key={index + 3} className="card">
                <img src={project.image} alt={project.title} className="card-image" />
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-button">View Project</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-dots">
        {[0, 1].map((index) => (
          <span
            key={index}
            className={`dot ${activeSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Projects;