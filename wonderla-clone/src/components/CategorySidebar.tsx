"use client"; 

import React from 'react'; 
import LandIcon from './icons/LandIcon';
import WaterIcon from './icons/WaterIcon';
import KidsIcon from './icons/KidsIcon';

interface CategorySidebarProps {
  selectedCategory: string; 
  onSelectCategory: (categoryName: string) => void; 
}

const categories = [
  { name: 'Land', count: 72, IconComponent: LandIcon },
  { name: 'Water', count: 54, IconComponent: WaterIcon },
  { name: 'Kids', count: 35, IconComponent: KidsIcon },
];

const CategorySidebar: React.FC<CategorySidebarProps> = ({ selectedCategory, onSelectCategory }) => {

  const badgeBgColor = 'bg-blue-500';
  const badgeTextColor = 'text-white';
  const selectedItemBgColor = 'bg-white/10';
  const hoverItemBgColor = 'hover:bg-white/5';
  const iconColor = "text-blue-400";

  return (
    <div className="flex flex-col space-y-4">
      {categories.map(({ name, count, IconComponent }) => (
        <div
          key={name}
          onClick={() => onSelectCategory(name)}
          className={`
            flex items-center p-4 rounded-lg cursor-pointer transition-colors duration-150
            ${hoverItemBgColor}
            {/* Use the selectedCategory prop for styling */}
            ${selectedCategory === name ? selectedItemBgColor : ''}
          `}
        >
          <div className="mr-4">
            <IconComponent className={`w-10 h-10 ${iconColor}`} />
          </div>
          <div className="flex-grow">
            <div className="text-lg font-semibold">{name}</div>
          </div>
          <div className={`
            px-2 py-1 rounded-md text-xs font-bold
            ${badgeBgColor} ${badgeTextColor}
          `}>
            {count} Rides
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;