import React from 'react';
import 'tailwindcss/tailwind.css';

const HeroCarousel: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-full flex-shrink-0">
          <img
            src="/images/travel1.jpg"
            alt="Travel Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex-shrink-0">
          <img
            src="/images/travel2.jpg"
            alt="Travel Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex-shrink-0">
          <img
            src="/images/travel3.jpg"
            alt="Travel Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
