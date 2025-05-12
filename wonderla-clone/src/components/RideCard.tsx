import React from 'react';

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

  const buttonBgColor = 'bg-yellow-300';
  const buttonTextColor = 'text-indigo-950'; 

  return (
    <div className="relative h-[346px] min-w-[246px] w-[246px] overflow-hidden rounded-lg shadow-lg group inline-block">

      <video
        autoPlay
        loop
        muted 
        playsInline 
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={mediaUrl} type="video/mp4" />
        Your browser does not support the video tag. 
      </video>


      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col p-3 pb-2.5 text-white"> 
        <h3 className="font-mulish font-bold capitalize leading-tight">
          {title}
        </h3>
        <p className="text-xs font-normal leading-tight mt-px opacity-80">
          {location}
        </p>
        <div className="mt-1.5 text-xs leading-tight line-clamp-3 opacity-90">
          {description}
        </div>

        <div
          className={`
            mt-2 h-9 w-full max-w-[150px] rounded-md text-xs font-black uppercase
            flex items-center justify-center cursor-pointer
            ${buttonBgColor} ${buttonTextColor}
            transition-transform duration-200 ease-in-out group-hover:scale-105
          `}
          tabIndex={0} 
        >
          Ride Details
        </div>
      </div>
    </div>
  );
};

export default RideCard;