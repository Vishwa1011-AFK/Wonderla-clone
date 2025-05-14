// wonderla-clone/src/components/RidesSection.tsx
"use client";

import React, { useState, useRef } from 'react';
import ConicArcBackground from './ConicArcBackground';
import ridesData from '@/data/ridesData.json';
import RideCard from './RideCard';
import CategorySidebar from './CategorySidebar';
import CarouselControls from './CarouselControls';

const RIDE_LIMIT_PER_CATEGORY = 12;

const RidesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Land');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
  };

  const displayedRides = ridesData.filter(ride => ride.category === selectedCategory).slice(0, RIDE_LIMIT_PER_CATEGORY);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.children[0] as HTMLElement;
      if (!cardElement) return;
      const cardWidth = cardElement.offsetWidth;
      const gap = 20; // From space-x-5
      const scrollAmount = (cardWidth + gap) * 1.5; 
      scrollContainerRef.current.scrollBy({ left: direction === 'prev' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const exploreButtonClasses = `
    inline-flex items-center justify-center capitalize h-14 px-10 md:px-14 rounded-full
    text-base font-extrabold bg-wonderla-btn-yellow text-wonderla-icon-blue
    cursor-pointer transition-transform duration-150 ease-in-out 
    hover:scale-105 focus:scale-105 active:scale-100
    focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-wonderla-bg
  `;

  return (
    <section className={`relative bg-wonderla-bg text-white 
                       pt-16 md:pt-20 lg:pt-[100px] pb-12 md:pb-16 lg:pb-[70px]
                       overflow-hidden`}>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 xl:gap-x-16">
          
          <div className="hidden lg:block w-[320px] xl:w-[360px] relative shrink-0 mb-10 lg:mb-0">
            <ConicArcBackground />
            <CategorySidebar
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between lg:items-end mb-8 gap-6 lg:gap-4">
              <h1 className={`font-mulish text-[40px] sm:text-[44px] md:text-[50px] lg:text-[52px] xl:text-[56px] 
                             font-black uppercase !leading-tightest tracking-custom-tighter text-white 
                             max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none`}> {/* <-- CORRECTED WITH BACKTICKS */}
                Our Iconic Rides
              </h1>
              <div className="shrink-0">
                  <CarouselControls onPrev={() => handleScroll('prev')} onNext={() => handleScroll('next')} />
              </div>
            </div>
            
            <div
              ref={scrollContainerRef}
              className="flex space-x-5 p-1 overflow-x-auto h-[400px] snap-x snap-mandatory hide-scrollbar md:snap-none "
            >
              {displayedRides.length > 0 ? (
                displayedRides.map((ride) => (
                  <div key={ride.id} className="snap-center flex-shrink-0"> <RideCard {...ride} /> </div>
                ))
              ) : ( <p className="w-full text-center py-10">No rides found for {selectedCategory}.</p> )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 md:mt-14 lg:mt-16">
          <a href="/rides" className="inline-block max-w-[328px] w-[min(328px,calc(100dvw-32px))]">
            <div className={exploreButtonClasses} tabIndex={0}> Explore All Rides! </div>
          </a>
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default RidesSection;