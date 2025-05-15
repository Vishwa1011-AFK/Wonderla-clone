"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LocationPinIconTarget from './icons/LocationPinIconTarget';
import DownArrowIconTarget from './icons/DownArrowIconTarget';
import RightArrowIcon from './icons/RightArrowIcon';
import TicketIconTarget from './icons/TicketIconTarget';

interface SubLocation { name: string; image: string; alt: string; link?: string; }
interface LocationItem { name: string; image: string; alt: string; subLocations?: SubLocation[]; link?: string; }

const locationsData: LocationItem[] = [
  { name: 'Kochi', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748_3d2d5912c4.webp?w=96&q=75', alt: 'Kochi image', link: '/kochi' },
  {
    name: 'Bengaluru',
    image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c_dd51c380ad.webp?w=96&q=75',
    alt: 'Bengaluru image',
    subLocations: [
      { name: 'Park', image: '/bangalore-park.webp', alt: 'Park image', link: '/bengaluru' }, // Assuming local image path for these
      { name: 'Resort', image: '/bangalore-resort.webp', alt: 'Resort image', link: '/bengaluru-resort' },
    ],
  },
  { name: 'Hyderabad', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb_30635eba9c.webp?w=96&q=75', alt: 'Hyderabad image', link: '/hyderabad' },
  { name: 'Bhubaneswar', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac_0e6a813c49.webp?w=96&q=75', alt: 'Bhubaneswar image', link: '/bhubaneswar' },
];

const navLinksData = [ 
  { name: 'Offers', icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75', href: '/offers' },
  { name: 'Rides', icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75', href: '/rides' },
  { name: 'Restaurants', icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75', href: '/restaurants' },
  { name: 'Events', icon: 'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75', href: '/events' },
];


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
  className="flex mt-5 h-15 md:h-17 items-center justify-between gap-5 rounded-bl-2xl rounded-br-2xl px-4 
             transition duration-300 ease-in-out md:pl-[30px] md:pr-[38px] lg:rounded-2xl 
             bg-header-bg text-blue-gray shadow-header-default 
             lg:shadow-none lg:outline lg:outline-1 lg:outline-header-blue-outline/20 
             fixed top-0 z-50 font-mulish 
             max-w-screen-xl mx-auto left-0 right-0"
  style={{ backgroundColor: 'white', color: '#717d92' }}
>
      <Link className="inline-block" href="/">
        <div className="inline-block capitalize -ml-4 aspect-[118/38] w-[132px] lg:w-[152px]" tabIndex={0}>
          <Image
            alt="Desktop Logo"
            priority 
            width={118} 
            height={38} 
            decoding="async"
            data-nimg="1" 
            className="h-full w-full object-contain" 
            src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
            
          />
        </div>
      </Link>

      <nav className="mx-auto hidden flex-wrap items-center gap-x-7 gap-y-1 lg:flex">
        <div className="group relative">
          <a className="capitalize flex cursor-pointer items-center gap-2" href="#"> 
            <div className="flex items-center gap-2">
              <LocationPinIconTarget className="stroke-current" /> 
              <span className="inline-block font-mulish !leading-custom text-sm font-black uppercase leading-14px">Locations</span>
            </div>
            <DownArrowIconTarget className="transition-transform duration-300 group-hover:rotate-180 fill-current" />
          </a>
          <div className="invisible absolute left-1/2 top-full z-10 min-w-150 -translate-x-1/2 group-hover:visible">
            <div className="pt-7">
              <div className="w-[294px] space-y-2.5 rounded-20px bg-header-bg px-4 py-4 shadow-lg">
                {locationsData.map((loc, index) => (
                  <React.Fragment key={loc.name}>
                    <div className="group/submenu relative">
                      <Link
                        className="capitalize flex items-center gap-2.5"
                        href={loc.link || (loc.subLocations ? '#' : '/#')} 
                      >
                        <div className="size-12">
                          <Image alt={loc.alt} loading="lazy" width={48} height={48} decoding="async" className="h-full w-full object-cover rounded-10px" src={loc.image} />
                        </div>
                        <span className="text-sm inline-block font-mulish !leading-custom font-bold uppercase text-black-300">{loc.name}</span>
                        {loc.subLocations && <RightArrowIcon />}
                      </Link>
                      {loc.subLocations && (
                        <div className="invisible absolute left-full top-0 z-20 ml-6 rounded-2xl bg-header-bg p-3 shadow-lg group-hover/submenu:visible">
                          <div className="absolute -left-6 top-0 h-full w-6"></div>
                          <div className="space-y-2.5">
                            {loc.subLocations.map((subLoc, subIndex) => (
                              <React.Fragment key={subLoc.name}>
                                <Link className="capitalize flex items-center gap-2.5" href={subLoc.link || '#'}>
                                  <div className="size-12">
                                    <Image alt={subLoc.alt} loading="lazy" width={48} height={48} decoding="async" className="h-full w-full object-cover rounded-10px" src={subLoc.image} />
                                  </div>
                                  <span className="text-sm inline-block font-mulish !leading-custom font-bold uppercase text-black-300">{subLoc.name}</span>
                                </Link>
                                {subIndex < loc.subLocations!.length - 1 && <div className="w-full border-t border-blue-pale/20"></div>}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {index < locationsData.length - 1 && <div className="w-full border-t border-blue-pale/20"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {navLinksData.map(linkInfo => (
          <div key={linkInfo.name} className="group relative">
            <Link className="capitalize flex cursor-pointer items-center gap-2" href={linkInfo.href}>
              <div className="flex items-center gap-2">
                <Image alt={`${linkInfo.name} icon`} loading="lazy" width={18} height={18} decoding="async" className="size-[18px] object-contain" src={linkInfo.icon} 
                       style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)' }}/>
                <span className="inline-block font-mulish !leading-custom text-sm font-black uppercase leading-14px">{linkInfo.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-3 lg:gap-5">
        <Link className="inline-block" target="_blank" href="https://bookings.wonderla.com">
          <div className="capitalize text-wonderla-icon-blue bg-wonderla-btn-yellow flex h-34px items-center rounded-lg px-3.5 md:px-3.5" tabIndex={0}>
            <h6 style={{
                  backgroundColor: '#fad600',
                  color: '#334DCF'
                }} className="font-mulish !leading-custom flex items-center gap-1.5 text-11px font-black uppercase tracking-[-0.03em] md:text-xs">
              Book tickets <TicketIconTarget className="fill-current" />
            </h6>
          </div>
        </Link>
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-wonderla-icon-blue md:mx-2 lg:h-[17px] lg:w-[26px] lg:bg-transparent" tabIndex={0} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg width="27" height="17" viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-4 fill-wonderla-btn-yellow lg:h-[17px] lg:w-[26px] lg:fill-wonderla-icon-blue">
            <rect x="0.322266" y="0.0905762" width="26.334" height="3.15699" rx="1.5785" className={`origin-center transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></rect>
            <rect x="0.322266" y="6.96667" width="26.334" height="3.15699" rx="1.5785" className={`transform transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></rect>
            <rect x="0.322266" y="13.8429" width="26.334" height="3.15699" rx="1.5785" className={`origin-center transform transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></rect>
          </svg>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-header-bg shadow-lg mt-0.5 rounded-b-2xl p-4 border-t border-blue-pale/20">
            <p>Mobile Menu Content...</p>
        </div>
      )}
    </header>
  );
};

export default Header;