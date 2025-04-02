import React, { useEffect, useState } from 'react';

const HeroHeading = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after a small delay for the animation to work on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      <h1 className="text-gray-900 text-[64px] font-bold leading-[64px] tracking-[-0.64px] max-md:text-[40px] max-md:leading-[44px] max-md:mt-10">
        <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Boost Your Instagram with <br />
        </div>
        <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span className="text-black">Real, </span>
          <span className="text-[rgba(32,140,252,1)] font-black">Engaged Followers</span>
        </div>
      </h1>

      <p className={`text-gray-600 text-xl font-medium leading-7 mt-[19px] max-w-[600px] mx-auto max-md:max-w-full transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        Turn your followers into customers with our organic growth service.
        No bots, no fake engagement - just real results.
      </p>
    </>
  );
};

export default HeroHeading; 