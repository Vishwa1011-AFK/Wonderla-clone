import React from 'react';

const ConicArcBackground: React.FC = () => {
  const conicGradientStyle = {
    background: `conic-gradient(from 0deg, #E8E9F1 -60deg, #FAD500 10deg, #FAD500 70deg, #E8E9F1 130deg, #E8E9F1)`,
  };
  const innerCutoutStyle = { background: '#22304A' };

  return (
    <div
      className="absolute top-[-60px] left-[-260px] w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
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