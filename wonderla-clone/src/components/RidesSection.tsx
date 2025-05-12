// src/components/RidesSection.tsx
import React from 'react';
import ridesData from '@/data/ridesData.json';
import RideCard from './RideCard';
import CategorySidebar from './CategorySidebar';

const RidesSection = () => {
  return (
    <section className="bg-wonderla-bg text-white pt-[150px] pb-[52px] px-4 md:px-8 lg:px-16">
      <div className="flex">
        <div className="w-1/4 mr-8">
          <CategorySidebar />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold uppercase">
              Our Iconic Rides
            </h2>
            <div>
              Carousel Controls Placeholder
            </div>
          </div>

          <div className="flex space-x-4 p-1 overflow-x-auto min-h-[380px]">
            {ridesData.length > 0 ? (
              ridesData.map((ride) => (
                <RideCard
                  key={ride.id}
                  id={ride.id}
                  category={ride.category}
                  title={ride.title}
                  location={ride.location}
                  description={ride.description}
                  mediaUrl={ride.mediaUrl}
                />
              ))
            ) : (
              <p>No ride data available.</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        Explore All Rides Button Placeholder
      </div>
    </section>
  );
};

export default RidesSection;
