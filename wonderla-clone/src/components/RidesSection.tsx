"use client";

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import ConicArcBackground from './ConicArcBackground';
import ridesData from '@/data/ridesData.json';
import RideCard from './RideCard';
import CategorySidebar from './CategorySidebar';
import CarouselControls from './CarouselControls';

const RIDE_LIMIT_PER_CATEGORY = 12;

interface AutoplayPlugin {
  play: () => void;
  stop: () => void;
  reset: () => void;
}

const emblaOptions: EmblaOptionsType = {
  loop: true,
  align: 'start',
  slidesToScroll: 1,
};

const RidesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Land');
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ]);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (emblaApi) {
      emblaApi.scrollTo(0, true);
      const autoplay = emblaApi.plugins().autoplay as AutoplayPlugin | undefined;
      if (autoplay) {
        autoplay.reset();
        autoplay.play();
      }
    }
  };

  const displayedRides = ridesData.filter(ride => ride.category === selectedCategory).slice(0, RIDE_LIMIT_PER_CATEGORY);

  const handleScroll = useCallback((direction: 'prev' | 'next') => {
    if (!emblaApi) return;
    if (direction === 'prev') emblaApi.scrollPrev();
    else emblaApi.scrollNext();

    const autoplay = emblaApi.plugins().autoplay as AutoplayPlugin | undefined;
    if (autoplay) {
      autoplay.reset();
      autoplay.play();
    }
  }, [emblaApi]);

  const exploreButtonClasses = `
  capitalize h-14 w-full max-w-[328px] rounded-full text-base font-extrabold leading-tight
  flex items-center justify-center text-[#334dcf] bg-[#fad600] mb-0.5 mt-4
  cursor-pointer transition-transform duration-150 ease-in-out
  hover:scale-105 focus:scale-105 active:scale-100
  focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:ring-offset-2 focus:ring-offset-wonderla-bg
`;

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [selectedCategory, emblaApi]);

  return (
    <section className="relative bg-wonderla-bg text-white pt-16 md:pt-20 lg:pt-[120px] pb-12 md:pb-16 lg:pb-[80px] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:gap-x-12 xl:gap-x-16">
          <div className="hidden lg:block w-[320px] xl:w-[360px] relative shrink-0 mb-12 lg:mb-0 h-[500px] xl:h-[550px]">
            <ConicArcBackground />
            <CategorySidebar
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
          <div className="lg:hidden mb-6">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategorySelect(e.target.value)}
              className="w-full p-2 rounded bg-wonderla-badge-purple text-white"
            >
              <option value="Land">Land</option>
              <option value="Water">Water</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-6 md:mb-8 lg:mb-10 gap-6 lg:gap-4">
  <h1 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] 
     sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl text-white text-left">
    Our Iconic Rides
  </h1>
  <div className="shrink-0">
    <CarouselControls onPrev={() => handleScroll('prev')} onNext={() => handleScroll('next')} />
  </div>
</div>


            <div className="embla mt-5 relative">
              <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex gap-x-6">
                  {displayedRides.length > 0 ? (
                    displayedRides.map((ride) => (
                      <div className="embla__slide flex-none w-[280px] sm:w-[300px] md:w-[320px] lg:w-[300px] relative" key={ride.id}>
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
        </div>
        <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
  <Link href="/rides" className="-mt-22 -ml-70 inline-block max-w-[328px] w-[min(328px,calc(100dvw-32px))]">
    <button className={exploreButtonClasses}>Explore All Rides!</button>
  </Link>
</div>
      </div>
    </section>
  );
};

export default RidesSection;