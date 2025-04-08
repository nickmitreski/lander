import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  isWide?: boolean;
}

const FeatureCard = ({ title, description, children, isWide = false }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Add class for GSAP animations
    if (cardRef.current) {
      cardRef.current.classList.add('feature-card');
    }

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return; // Skip hover effects on mobile
    
    setIsHovered(true);
    if (cardRef.current && titleRef.current && descRef.current) {
      // Create a timeline for hover animation
      const tl = gsap.timeline();
      tl.to(cardRef.current, {
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        borderColor: '#bfdbfe',
        duration: 0.2,
        ease: 'power2.out'
      })
      .to(titleRef.current, {
        color: '#2563eb',
        y: -3,
        duration: 0.15
      }, '-=0.15')
      .to(descRef.current, {
        opacity: 0.9,
        y: -2,
        duration: 0.15
      }, '-=0.1');
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return; // Skip hover effects on mobile
    
    setIsHovered(false);
    if (cardRef.current && titleRef.current && descRef.current) {
      // Create a timeline for exit animation
      const tl = gsap.timeline();
      tl.to(cardRef.current, {
        scale: 1,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        borderColor: '#f3f4f6',
        duration: 0.2,
        ease: 'power2.out'
      })
      .to(titleRef.current, {
        color: '#111827',
        y: 0,
        duration: 0.15
      }, '-=0.15')
      .to(descRef.current, {
        opacity: 0.8,
        y: 0,
        duration: 0.15
      }, '-=0.1');
    }
  };

  // For handling tap on mobile
  const handleTouchStart = () => {
    if (!isMobile) return;
    
    setIsHovered(!isHovered);
    if (cardRef.current && titleRef.current && descRef.current) {
      if (!isHovered) {
        // Tap to activate
        gsap.to(cardRef.current, {
          borderColor: '#bfdbfe',
          duration: 0.2
        });
        gsap.to(titleRef.current, {
          color: '#2563eb',
          duration: 0.15
        });
      } else {
        // Tap again to deactivate
        gsap.to(cardRef.current, {
          borderColor: '#f3f4f6',
          duration: 0.2
        });
        gsap.to(titleRef.current, {
          color: '#111827',
          duration: 0.15
        });
      }
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`rounded-xl bg-white border-2 border-gray-100 shadow-sm transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col justify-between min-w-[240px] ${isWide ? 'md:col-span-2' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <div 
        className={`relative w-full h-[190px] sm:h-[170px] md:h-[180px] flex items-center justify-center overflow-hidden mb-3 md:mb-4 transition-transform duration-300 ${isHovered && !isMobile ? 'transform scale-105' : ''}`}
        style={{
          imageRendering: '-webkit-optimize-contrast',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}>
        {children}
      </div>
      <div className="space-y-1 sm:space-y-2">
        <h3 ref={titleRef} className="text-sm sm:text-base font-semibold transition-colors duration-300">{title}</h3>
        <p ref={descRef} className="text-gray-600 text-xs sm:text-sm transition-all duration-300">{description}</p>
      </div>
      
      {/* Animated corner accent - hidden on mobile */}
      {!isMobile && (
        <>
          <div className={`absolute w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-l-2 border-blue-400 top-2 left-2 transition-all duration-300 opacity-0 ${isHovered ? 'opacity-100' : ''}`}></div>
          <div className={`absolute w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-r-2 border-blue-400 bottom-2 right-2 transition-all duration-300 opacity-0 ${isHovered ? 'opacity-100' : ''}`}></div>
        </>
      )}
    </div>
  );
};

export default FeatureCard; 