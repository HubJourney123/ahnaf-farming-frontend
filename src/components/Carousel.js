"use client";

import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const slides = [
    { id: 1, image: "/carousel/1.png", alt: "Slide 1" },
    { id: 2, image: "/carousel/2.png", alt: "Slide 2" },
    { id: 3, image: "/carousel/3.png", alt: "Slide 3" },
    { id: 4, image: "/carousel/4.png", alt: "Slide 4" },
    { id: 5, image: "/carousel/5.png", alt: "Slide 5" },
    { id: 6, image: "/carousel/6.png", alt: "Slide 6" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full">
      {/* 2:1 Aspect Ratio Container */}
      <div className="relative w-full aspect-[2/1]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/10 text-white p-2 sm:p-3 rounded-full hover:bg-green-500 sm:text-2xl md:text-4xl"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/10 text-white p-2 sm:p-3 rounded-full hover:bg-green-500 sm:text-2xl md:text-4xl"
      >
        &#8250;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-green-400" : "bg-green-100"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;