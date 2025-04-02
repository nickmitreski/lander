import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedSectionTitleProps {
  firstPart: string;
  highlightedPart?: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
}

const AnimatedSectionTitle = ({ 
  firstPart, 
  highlightedPart = '', 
  subtitle = '', 
  align = 'center' 
}: AnimatedSectionTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Initialize GSAP animation
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const highlight = highlightRef.current;
    
    if (!title) return;
    
    // Set initial state - elements invisible
    gsap.set([title, subtitle], { 
      opacity: 0,
      y: 20
    });
    
    if (highlight) {
      gsap.set(highlight, {
        opacity: 0,
        scale: 0.95
      });
    }
    
    // Create timeline for entrance animation
    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: title,
        start: "top 80%"
      }
    });
    
    // Animate title appearance
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8
    });
    
    // Animate highlight appearance
    if (highlight) {
      tl.to(highlight, {
        opacity: 1,
        scale: 1,
        duration: 0.5
      }, "-=0.4");
    }
    
    // Animate subtitle
    if (subtitle) {
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, "-=0.4");
    }
    
    // Add hover effect
    if (highlight) {
      title.addEventListener('mouseenter', () => {
        gsap.to(highlight, {
          scale: 1.05,
          color: "#1E88E5",
          duration: 0.3
        });
      });
      
      title.addEventListener('mouseleave', () => {
        gsap.to(highlight, {
          scale: 1,
          color: "rgba(32,140,252,1)",
          duration: 0.3
        });
      });
    }
    
    // Cleanup function
    return () => {
      if (highlight) {
        title.removeEventListener('mouseenter', () => {});
        title.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);
  
  return (
    <div className={`text-${align} mb-8 sm:mb-10 md:mb-12`}>
      <h2 
        ref={titleRef}
        className="text-[28px] sm:text-[36px] md:text-[47px] font-bold mb-4 relative inline-block leading-tight"
      >
        {firstPart}{' '}
        {highlightedPart && (
          <span 
            ref={highlightRef}
            className="text-[rgba(32,140,252,1)] relative font-black"
          >
            {highlightedPart}
          </span>
        )}
      </h2>
      
      {subtitle && (
        <p 
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[90%] mx-auto"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default AnimatedSectionTitle; 