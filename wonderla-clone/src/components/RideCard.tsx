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
  const gradientStyle = {
    background: 'linear-gradient(180deg, rgba(34,48,74,0) 20%, #22304A 80%)', // Adjusted for better visibility
  };

  return (
    <div className="relative h-[360px] w-[260px] overflow-hidden rounded-3xl shadow-xl group flex-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
        key={mediaUrl}
      >
        <source src={mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={gradientStyle}
      >
        <div className="p-4 lg:p-5 text-white">
          <h3 className="text-xl font-sans capitalize !leading-custom-1.255 font-bold">
            {title}
          </h3>
          <p className="text-sm font-sans !leading-custom-1.255 mt-1 opacity-80">
            {location}
          </p>
          <p className="mt-2 line-clamp-2 text-sm !leading-custom h-[36px] overflow-hidden">
            {description}
          </p>

          <div className="mt-3 transition-transform duration-200 ease-in-out group-hover:scale-105">
            <Link href={`/rides/${location.toLowerCase()}/${title.toLowerCase().replace(/\s+/g, '-')}`} passHref legacyBehavior>
              <a
                className="
                  inline-flex items-center justify-center 
                  h-10 w-full max-w-[150px] rounded-lg 
                  text-xs font-black uppercase !leading-tight 
                  text-wonderla-icon-blue bg-wonderla-btn-yellow
                  transition-opacity duration-150 hover:opacity-90
                "
              >
                Ride Details
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideCard;