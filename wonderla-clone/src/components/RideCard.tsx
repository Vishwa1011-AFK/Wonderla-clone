// wonderla-clone/src/components/RideCard.tsx
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
  // Gradient from HTML (lg view): lg:bg-[linear-gradient(180deg,_rgba(34,48,74,0)_34.08%,_#22304A_100%)]
  // This is equivalent to: from-transparent via-transparent to-wonderla-bg (with specific stops)
  const gradientStyle = {
    // This gradient is simpler and directly from the provided HTML for desktop cards
    background: 'linear-gradient(180deg, rgba(34,48,74,0) 34.08%, #22304A 100%)',
  };

  return (
    // Original HTML: lg:h-[346px] lg:min-w-[246px] rounded-t-[22px] (for Embla carousel items)
    // We'll stick to our fully rounded cards for now, as per visual target.
    <div className="relative h-[346px] w-[246px] overflow-hidden rounded-3xl shadow-xl group flex-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        key={mediaUrl}
      >
        <source src={mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={gradientStyle}
      >
        {/* Original HTML structure for text content: px-3 pb-2.5 text-white lg:pb-1 */}
        <div className="p-3 lg:pb-1 text-white">
          {/* text-lg font-mulish capitalize !leading-[1.255] font-bold */}
          <h3 className="text-lg font-sans capitalize !leading-custom-1.255 font-bold">
            {title}
          </h3>
          {/* text-xs inline-block font-mulish font-normal !leading-[1.255] mt-px opacity-80 */}
          <p className="text-xs font-sans !leading-custom-1.255 mt-px opacity-80">
            {location}
          </p>
          {/* mt-1.5 line-clamp-4 text-xs leading-[1.255] */}
          {/* Using line-clamp-2 to match visual, but original uses 4. Adjust height accordingly. */}
          <p className="mt-1.5 line-clamp-2 text-xs !leading-custom h-[30px] overflow-hidden">
            {description}
          </p>

          {/* Original HTML: <a class="inline-block w-full max-w-[150px]" href="..."> */}
          {/* Button container mt-2 from original HTML */}
          <div className="mt-2 transition-transform duration-200 ease-in-out group-hover:scale-105">
            <Link href={`/rides/${location.toLowerCase()}/${title.toLowerCase().replace(/\s+/g, '-')}`} passHref legacyBehavior>
              {/* Original Button: h-10 w-full max-w-[150px] rounded-lg text-xs font-black uppercase leading-tight flex items-center justify-center text-blue bg-yellow */}
              <a
                className={`
                  inline-flex items-center justify-center 
                  h-10 w-full max-w-[150px] rounded-lg 
                  text-xs font-black uppercase !leading-tight 
                  text-wonderla-icon-blue bg-wonderla-btn-yellow
                  transition-opacity duration-150 hover:opacity-90
                `}
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