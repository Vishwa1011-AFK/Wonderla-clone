"use client";

import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ConicArcBackground from './ConicArcBackground';
import ridesData from '@/data/ridesData.json';
import RideCard from './RideCard';
import CategorySidebar from './CategorySidebar';
import CarouselControls from './CarouselControls';

const RIDE_LIMIT_PER_CATEGORY = 12;

const RidesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Land');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  }, [Autoplay({ delay: 2000, stopOnInteraction: true })]);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (emblaApi) emblaApi.scrollTo(0);
  };

  const displayedRides = ridesData.filter(ride => ride.category === selectedCategory).slice(0, RIDE_LIMIT_PER_CATEGORY);

  const handleScroll = useCallback((direction: 'prev' | 'next') => {
    if (!emblaApi) return;
    if (direction === 'prev') emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  }, [emblaApi]);

  const exploreButtonClasses = `
    inline-flex items-center justify-center capitalize h-14 px-10 md:px-14 rounded-full
    text-base font-extrabold bg-wonderla-btn-yellow text-wonderla-icon-blue
    cursor-pointer transition-transform duration-150 ease-in-out 
    hover:scale-105 focus:scale-105 active:scale-100
    focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-wonderla-bg
  `;

  return (
    <section className="relative bg-wonderla-bg text-white pt-16 md:pt-20 lg:pt-[120px] pb-12 md:pb-16 lg:pb-[80px] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:gap-x-12 xl:gap-x-16">
          <div className="hidden lg:block w-[320px] xl:w-[360px] relative shrink-0 mb-12 lg:mb-0 h-[500px]">
            <ConicArcBackground />
            <CategorySidebar
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between lg:items-end mb-10 gap-6 lg:gap-4">
              <h1 className="font-mulish text-[40px] sm:text-[48px] md:text-[52px] lg:text-[56px] xl:text-[60px] font-black uppercase !leading-tightest tracking-custom-tighter text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                Our Iconic Rides
              </h1>
              <div className="shrink-0">
                <CarouselControls onPrev={() => handleScroll('prev')} onNext={() => handleScroll('next')} />
              </div>
            </div>
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex -mx-2.5">
                {displayedRides.length > 0 ? (
                  displayedRides.map((ride) => (
                    <div key={ride.id} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2.5">
                      <RideCard {...ride} />
                    </div>
                  ))
                ) : (
                  <p className="w-full text-center py-10">No rides found for {selectedCategory}.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
          <a href="/rides" className="inline-block max-w-[328px] w-[min(328px,calc(100dvw-32px))]">
            <div className={exploreButtonClasses} tabIndex={0}>Explore All Rides!</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RidesSection;