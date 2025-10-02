import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css';

const Carousel = ({ slides, autoPlay = true, autoPlayInterval = 5000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoPlayRef = useRef();

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = nextSlide;
    }
  });

  useEffect(() => {
    if (autoPlay) {
      const play = () => {
        autoPlayRef.current();
      };

      const interval = setInterval(play, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    }
    if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  }, [nextSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="carousel">
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(calc(-${activeSlide * 64}vw + 20vw))`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${activeSlide === index ? 'active' : ''}`}
          >
            <div className="slide-background" style={{ backgroundImage: `url(${slide.image})` }}></div>
            <div className="slide-content">
              <h2 className="slide-headline">{slide.title}</h2>
              <p className="slide-subheading">{slide.description}</p>
              <a href={slide.link} className="slide-cta">{slide.cta}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow left" onClick={prevSlide}>&#10094;</div>
      <div className="arrow right" onClick={nextSlide}>&#10095;</div>

      <div className="carousel-buttons">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`carousel-button ${activeSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
