import React from 'react';
import './Hero.css';
import Typewriter from './Typewriter';
import avatar from './avatar2.png';

const Hero = () => {
  const titles = [
    '12 grade students in Ontario',
    "Loves World's cultures",
    'Speak several languages',
    'Coffee Enthusiast',
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Hi, it's Alua</h1>
        <p className="hero-typewriter"><Typewriter titles={titles} /></p>
        <p className="hero-tagline">Make the world be a peaceful for every children</p>
        <p className="hero-description">This is my personal website for extracurrical activities. I created it to learn coding and AI.</p>
        <p className="hero-description">I will share my projects, ideas and interests here</p>
        <p className="hero-description"></p>
        <button className="hero-cta">Scroll Down</button>
      </div>
      <div className="hero-image">
        <img src={avatar} alt="Your Name" />
      </div>
    </section>
  );
};

export default Hero;