"use client";

import React, { useState, useRef } from 'react';
import ridesData from '@/data/ridesData.json';
import RideCard from './RideCard';
import CategorySidebar from './CategorySidebar';
import CarouselControls from './CarouselControls';

const RidesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Land');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  };

  const filteredRides = ridesData.filter(ride => ride.category === selectedCategory);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'prev' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const buttonBgColor = 'bg-yellow-300';
  const buttonTextColor = 'text-wonderla-icon-blue';
  const exploreButtonClasses = `
    capitalize h-14 w-full max-w-[328px] rounded-full
    text-base font-extrabold leading-tight
    flex items-center justify-center
    ${buttonBgColor} ${buttonTextColor}
    cursor-pointer
    transition-transform duration-150 ease-in-out hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-wonderla-bg
  `;

  return (
    <section className="bg-wonderla-bg text-white pt-16 pb-8 px-4 md:pt-24 md:pb-12 md:px-8 lg:pt-[150px] lg:pb-[52px] lg:px-16">
      <div className="flex flex-col md:flex-row">
        <div className="w-full mb-8 md:w-1/4 md:mr-8 md:mb-0">
          <CategorySidebar
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        <div className="flex-1 w-full md:w-auto">
          <div className="flex flex-col items-center gap-4 mb-6 sm:flex-row sm:justify-between">
            <h1 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl text-white text-left">
                Our Iconic Rides
            </h1>
            <CarouselControls onPrev={() => handleScroll('prev')} onNext={() => handleScroll('next')} />
          </div>

          <div
            ref={scrollContainerRef}
            className="flex space-x-5 p-1 overflow-x-auto h-[400px] snap-x snap-mandatory md:snap-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredRides.length > 0 ? (
              filteredRides.map((ride) => (
                <div key={ride.id} className="snap-center flex-shrink-0">
                  <RideCard {...ride} />
                </div>
              ))
            ) : (
              <p className="w-full text-center">No rides found for {selectedCategory}.</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <div
          className={exploreButtonClasses}
          tabIndex={0}
          onClick={() => console.log('Explore All Clicked!')}
          role="button"
        >
          Explore All Rides!
        </div>
      </div>
    </section>
  );
};

export default RidesSection;
