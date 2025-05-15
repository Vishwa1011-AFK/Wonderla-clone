import React from 'react';
const DownArrowIconTarget: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="7" height="5" viewBox="0 0 7 5" fill="none" stroke="#717D92" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.887247 1.06685C0.723372 1.2537 0.742003 1.53803 0.92886 1.7019L3.71805 4.14804L6.4221 1.70246C6.60643 1.53575 6.62071 1.25118 6.454 1.06685C6.28729 0.882519 6.00272 0.868235 5.81839 1.03495L3.70884 2.94284L1.5223 1.02524C1.33544 0.861361 1.05112 0.879992 0.887247 1.06685Z" fill="currentColor"></path> {/* Changed fill to currentColor to inherit color */}
  </svg>
);
export default DownArrowIconTarget;