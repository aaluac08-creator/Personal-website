import React from 'react';
import Carousel from './Carousel';
import kazakhPhoto from './kazakh-photo.jpg';
import ModelUN from './ARC-UN-Club.jpg';
import youtube_channel from './youtube_channel.png';

const slides = [
  {
    title: 'On Kazakh culture',
    description: 'A deep dive into the rich traditions and culture of Kazakhstan.',
    image: kazakhPhoto,
    gradientFrom: 'rgba(0, 0, 0, 0.5)',
    gradientTo: 'rgba(0, 0, 0, 0.1)',
    link: '#',
    cta: 'Learn More',
  },
  {
    title: 'World Cultures',
    description: 'Exploring the diversity of cultures from around the globe.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradientFrom: '#667eea',
    gradientTo: '#764ba2',
    link: '#',
    cta: 'Explore Now',
  },
  {
    title: 'Technovations',
    description: 'A look at the latest innovations in technology.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradientFrom: '#f43f5e',
    gradientTo: '#be123c',
    link: '#',
    cta: 'Discover More',
  },
  {
    title: 'Model UN',
    description: 'Simulating the United Nations to solve global issues.',
    image: ModelUN,
    gradientFrom: '#0ea5e9',
    gradientTo: '#0284c7',
    link: '#',
    cta: 'Join Us',
  },
  {
    title: 'Youtube Videos',
    description: 'Creating engaging content for the world to see.',
    image: youtube_channel,
    gradientFrom: '#f97316',
    gradientTo: '#ea580c',
    link: '#',
    cta: 'Watch Now',
  },
  {
    title: 'School Magazine',
    description: 'Capturing the stories and moments of our school life.',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradientFrom: '#10b981',
    gradientTo: '#059669',
    link: '#',
    cta: 'Read More',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <Carousel slides={slides} />
    </section>
  );
};

export default Projects;