import React from 'react';
import ridesData from '@/data/ridesData.json';
import RideCard from './RideCard';

const RidesSection = () => {
  const sectionBgColor = 'bg-indigo-950';

  return (
    <section className={`${sectionBgColor} text-white py-12 px-4 md:px-8 lg:px-16`}>
      <div className="flex">
        <aside className="w-1/4 mr-8 border border-dashed border-gray-500 p-4">
          Category Sidebar Placeholder
        </aside>

        <div className="flex-1 border border-dashed border-gray-500 p-4">
          <div className="flex justify-between items-center mb-6 border border-dashed border-yellow-500 p-2">
            <h2 className="text-4xl font-bold uppercase">
              Our Iconic Rides
            </h2>
            <div className="border border-dashed border-green-500 p-2">
              Carousel Controls Placeholder
            </div>
          </div>

        <div className="flex space-x-4 border border-dashed border-blue-500 p-4 overflow-x-auto min-h-[380px]">
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


      <div className="text-center mt-12 border border-dashed border-red-500 p-4">
         Explore All Rides Button Placeholder
      </div>
    </section>
  );
};

export default RidesSection;