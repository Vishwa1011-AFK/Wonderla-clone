// wonderla-clone/src/components/ConicArcBackground.tsx
import React from 'react';

const ConicArcBackground: React.FC = () => {
  const conicGradientStyle = {
    background: `conic-gradient(from 0deg, #E8E9F1 -55deg, #FAD500 15deg, #FAD500 65deg, #E8E9F1 135deg, #E8E9F1)`,
  };
  const innerCutoutStyle = { background: '#22304A' }; // Matches 'wonderla-bg'

  return (
    // Position this relative to the sidebar container in RidesSection
    // It will be a large circle, mostly clipped by its parent's overflow or by its positioning.
    <div
      className="absolute top-[-50px] left-[-250px] sm:left-[-280px] md:left-[-300px] w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
      // Adjust 'left' to control how much of the arc is shown.
      // Negative 'left' pushes it more off-screen to the left.
      // 'top' can be adjusted to vertically align the arc.
      style={conicGradientStyle}
    >
      <div
        className="absolute left-[90px] top-[90px] w-[420px] h-[420px] rounded-full"
        style={innerCutoutStyle}
      ></div>
    </div>
  );
};

export default ConicArcBackground;