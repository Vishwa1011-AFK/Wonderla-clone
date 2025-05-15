import React from 'react';

const ConicArcBackground: React.FC = () => {
  const conicGradientStyle = {
    background: `conic-gradient(from 0deg, rgb(232, 233, 241) -55deg, rgb(250, 213, 0) 15deg, rgb(250, 213, 0) 65deg, rgb(232, 233, 241) 135deg, rgb(232, 233, 241))`,
  };
  const innerCutoutStyle = { background: '#22304A' }; 

  return (
    <div
      className="absolute top-[0px] left-[-200px] sm:left-[-220px] md:left-[-370px] w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
      style={conicGradientStyle}
    >
      <div
        className="absolute left-[80px] top-[80px] w-[440px] h-[440px] rounded-full" 
        style={innerCutoutStyle}
      ></div>
    </div>
  );
};

export default ConicArcBackground;