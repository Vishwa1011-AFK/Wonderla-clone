"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

interface CarouselControlsProps {
  onPrev: () => void; 
  onNext: () => void; 
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ onPrev, onNext }) => {
  const buttonBgColor = 'bg-yellow-300'; 
  const iconColor = 'text-indigo-950'; 

  const buttonClasses = `
    ${buttonBgColor} ${iconColor}
    rounded-full p-2 // Make it circular with padding
    cursor-pointer
    transition-opacity duration-150 ease-in-out
    hover:opacity-80 // Simple hover effect
    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-wonderla-bg // Accessibility focus styles
  `;

  return (
    <div className="flex space-x-3">
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        className={buttonClasses}
      >
        <ChevronLeft size={24} /> 
      </button>
      <button
        onClick={onNext}
        aria-label="Next slide"
        className={buttonClasses}
      >
        <ChevronRight size={24} /> 
      </button>
    </div>
  );
};

export default CarouselControls;