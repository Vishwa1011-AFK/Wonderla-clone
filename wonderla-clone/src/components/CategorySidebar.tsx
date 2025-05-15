"use client";

import React from 'react';
import LandIcon from './icons/LandIcon';
import WaterIcon from './icons/WaterIcon';
import KidsIcon from './icons/KidsIcon';

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

const categoryItemsData = [
  {
    name: 'Land',
    count: 74,
    IconComponent: LandIcon,
    itemPositionSpecific: 'top-[50px] left-[40px]', 
    iconContainerSize: 'w-[62px] h-[62px]',
    iconSizeClasses: 'w-full h-full', 
    textOffset: 'left-[calc(100%+20px)] sm:left-[calc(100%+24px)]'
  },
  {
    name: 'Water',
    count: 55,
    IconComponent: WaterIcon,
    itemPositionSpecific: 'top-[280px] left-[150px]',
    iconContainerSize: 'w-[75px] h-[70px]',
    iconSizeClasses: 'w-full h-full',
    textOffset: 'left-[calc(100%+20px)] sm:left-[calc(100%+24px)]'
  },
  {
    name: 'Kids',
    count: 36,
    IconComponent: KidsIcon,
    itemPositionSpecific: 'top-[480px] left-[12%]', 
    iconContainerSize: 'w-[62px] h-[63px]',
    iconSizeClasses: 'w-full h-full',
    textOffset: 'left-[calc(100%+20px)] sm:left-[calc(100%+24px)]'
  },
];

const CategorySidebar: React.FC<CategorySidebarProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="relative h-[350px] sm:h-[380px] md:h-[420px] hidden lg:block">
      {categoryItemsData.map(({ name, count, IconComponent, itemPositionSpecific, iconContainerSize, iconSizeClasses, textOffset }) => {
        const isSelected = selectedCategory === name;
        return (
          <div
            key={name}
            onClick={() => onSelectCategory(name)}
            className={`absolute cursor-pointer transition-all duration-300 ease-in-out group 
                        ${itemPositionSpecific}
                        flex items-center z-10`}
          >
            {isSelected && (
              <div
                className="absolute size-[100px] sm:size-[110px] rounded-full border-[8px] sm:border-[10px] border-wonderla-btn-yellow bg-white
                           -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10 
                           transition-all duration-300 ease-in-out opacity-100"
              ></div>
            )}
            <div className={`relative ${iconContainerSize} 
                             transition-all duration-[700ms] ease-out
                             ${isSelected ? 'scale-[1.35]' : 'scale-100'} 
                           `}>
              <div
                className={`absolute inset-[-6px] sm:inset-[-8px] rounded-full bg-white shadow-md -z-20 
                            transition-opacity duration-200 ease-in-out
                            ${isSelected ? 'opacity-0' : 'opacity-100 group-hover:ring-2 group-hover:ring-wonderla-btn-yellow/50'}`}
              ></div>
              <IconComponent className={`${iconSizeClasses} text-wonderla-icon-blue overflow-visible`} />
            </div>
            <div className={`absolute top-1/2 -translate-y-1/2 ${textOffset} 
                             flex flex-col gap-0.5 text-white font-mulish
                             ${isSelected ? 'opacity-100 font-bold' : 'opacity-80 group-hover:opacity-100 font-normal'}`}
            >
              <span className="text-xl !leading-custom">{name}</span>
              <span className="text-sm !leading-custom flex h-6 w-max items-center justify-center rounded-full bg-wonderla-badge-purple px-3.5 py-0.5">
                {count} Rides
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;