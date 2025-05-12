"use client"; // If you add any client-side interactions later for the card itself

import React from 'react';
import Link from 'next/link'; // For the button link

interface RideCardProps {
  id: number;
  category: string;
  title: string;
  location: string;
  description: string;
  mediaUrl: string;
  // Add href if you parse it from the <a> tag in the original HTML
  // ridePageUrl?: string;
}

const RideCard: React.FC<RideCardProps> = ({
  title,
  location,
  description,
  mediaUrl,
  // ridePageUrl = "#" // Default href
}) => {

  return (
    // Outer container for the card
    // max-w-[250px] from original, rounded-3xl for video, rounded-2xl for overlay
    // Let's use consistent rounding for simplicity for now, e.g., rounded-2xl or rounded-3xl
    <div className="relative h-[346px] w-[246px] md:max-w-[250px] overflow-hidden rounded-3xl shadow-lg group flex-none">

      {/* Video Background - rounded-3xl from original */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      >
        <source src={mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay - linear-gradient(transparent 34.08%, #22304A 100%) */}
      {/* Tailwind equivalent: from-transparent via-transparent to-wonderla-bg. Adjust stops if needed. */}
      <div
        className="absolute inset-0 flex flex-col justify-end rounded-2xl" // rounded-2xl from original overlay
        style={{ background: 'linear-gradient(to top, rgba(34, 48, 74, 1) 0%, rgba(34, 48, 74, 0.8) 20%, rgba(34, 48, 74, 0) 66%)' }} // More precise gradient
      >
        {/* Text Content Container - p-3, pb-10 was on one overlay, let's use p-3 and adjust */}
        <div className="p-3 text-white"> {/* Removed h-[105%] as it's unusual, adjust padding for layout */}
          <div className="font-bold text-lg">{title}</div>
          <div className="text-xs text-gray-300">{location}</div>
          {/* Use line-clamp-2 or 3 for description */}
          <div className="text-xs mt-1 line-clamp-2">{description}</div>

          {/* Button Area - transition-all, hover:scale-105 */}
          <div className="mt-3 transition-all duration-200 hover:scale-105">
            {/* The href should ideally come from data if each card links differently */}
            <Link href={`/rides/${location.toLowerCase()}/${title.toLowerCase().replace(/\s+/g, '-')}`} passHref legacyBehavior>
              <a // Using <a> tag for semantic linking with Next.js Link
                className={`
                  py-3 px-8 uppercase font-extrabold bg-wonderla-btn-yellow rounded-lg
                  text-wonderla-icon-blue // Assuming this is the dark text color for button
                  flex justify-center items-center
                  hover:cursor-pointer text-xs
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