"use client";

import React from 'react';
import Link from 'next/link';

interface RideCardProps {
  id: number;
  category: string; 
  title: string;
  location: string;
  description: string;
  mediaUrl: string;
}

const RideCard: React.FC<RideCardProps> = ({
  title,
  location,
  description,
  mediaUrl,
}) => {

  const slideWrapperClasses = `
    rounded-4xl max-w-250 flex-none relative overflow-hidden 
  `;


  return (
   <div className={slideWrapperClasses}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="aspect-[229/394] lg:aspect-[246/346] rounded-3xl w-full object-cover"
        key={mediaUrl}
      >
        <source src={mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 bg-ride-card-live-gradient rounded-2xl"></div> 

      <div className="absolute inset-0 z-10 p-3 h-105p flex flex-col justify-end text-white"> 
        <div className="font-mulish"> 
          <div className="font-bold text-lg !leading-custom">{title}</div>
          <div className="text-xs text-gray-300 !leading-custom">{location}</div>
       <div className="text-xs !leading-custom line-clamp-3 mt-1"> 
            {description}
          </div>
          <div className="hover:scale-105 transition-all duration-200">
            <Link href={`/rides/${location.toLowerCase()}/${title.toLowerCase().replace(/\s+/g, '-')}`} passHref legacyBehavior>
              <a> 
                <button
                className="
                  h-10 w-full max-w-[150px] rounded-lg 
                  text-xs font-black uppercase leading-tight 
                  flex items-center justify-center 
                  text-wonderla-icon-blue bg-wonderla-btn-yellow 
                  mt-2 hover:scale-105 transition-transform duration-200
                "
                style={{
                  backgroundColor: '#FAD600',
                  color: '#334DCF'
                }}

              >
                Ride Details
              </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideCard;