import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css';

const Carousel = ({ slides, autoPlay = true, autoPlayInterval = 5000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(autoPlay);
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

  const stopAutoPlay = () => {
    setAutoPlayEnabled(false);
  };

  const handleNextSlide = () => {
    nextSlide();
    stopAutoPlay();
  };

  const handlePrevSlide = () => {
    prevSlide();
    stopAutoPlay();
  };

  const handleGoToSlide = (index) => {
    goToSlide(index);
    stopAutoPlay();
  };

  useEffect(() => {
    if (autoPlayEnabled) {
      autoPlayRef.current = nextSlide;
    }
  });

  useEffect(() => {
    if (autoPlayEnabled) {
      const play = () => {
        autoPlayRef.current();
      };

      const interval = setInterval(play, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayEnabled, autoPlayInterval]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      handleNextSlide();
    }
    if (e.key === 'ArrowLeft') {
      handlePrevSlide();
    }
  }, []);

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
          transform: `translateX(calc(-${activeSlide * 59}vw + 23vw))`,
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

      <div className="arrow left" onClick={handlePrevSlide}>&#10094;</div>
      <div className="arrow right" onClick={handleNextSlide}>&#10095;</div>

      <div className="carousel-buttons">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`carousel-button ${activeSlide === index ? 'active' : ''}`}
            onClick={() => handleGoToSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;