import HeroHeading from './HeroHeading';
import HeroButton from './HeroButton';
import HeroReviews from './HeroReviews';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="flex flex-col items-center text-center px-4 sm:px-6 mt-4 sm:mt-6 md:mt-8 pb-16 sm:pb-20 max-w-7xl mx-auto">
      <div className="w-full max-w-4xl mx-auto">
        <HeroHeading />
        <HeroButton />
        <HeroReviews />
      </div>
      
      {/* Video container */}
      <div className="w-full max-w-5xl mx-auto mt-10 sm:mt-12 mb-8 z-20 relative">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl p-0">
          {/* Use a wrapper div with a fixed aspect ratio */}
          <div className={`relative ${isMobile ? 'aspect-video' : 'aspect-[16/9]'} w-full bg-gray-900 rounded-xl overflow-hidden`}>
            <video 
              className="w-full h-full object-contain rounded-xl"
              src="/FollowFuaeLanderVideo.mp4" 
              controls
              preload="metadata"
              poster="/thumbnail.png"
            />
          </div>
        </div>
        {/* Small spacing div to ensure minimal overlap */}
        <div className="h-4 sm:h-6 w-full"></div>
      </div>
    </section>
  );
};

export { HeroSection as Hero };
export default HeroSection; 