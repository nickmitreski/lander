import { useEffect, useRef, useState } from "react";
import monetise from "@/assets/monetise.png";
import monetise2 from "@/assets/monetise2.png";
import { gsap } from "gsap";
import ResponsiveImage from "@/components/ui/responsive-image";

const AccelerateCard = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Initial state
    gsap.set(cardRef.current, {
      opacity: 0,
      scale: 0.9,
      rotationY: -10
    });
    
    // Animation sequence
    timeline.to(cardRef.current, { 
      opacity: 1, 
      scale: 1,
      rotationY: 0,
      duration: 0.6
    });
    
    // Hover effect
    const hoverEffect = () => {
      setIsHovered(true);
      gsap.to(cardRef.current, { 
        scale: 1.05,
        rotationY: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const resetPosition = () => {
      setIsHovered(false);
      gsap.to(cardRef.current, { 
        scale: 1,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    // Add event listeners
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseenter', hoverEffect);
      containerRef.current.addEventListener('mouseleave', resetPosition);
    }
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', hoverEffect);
        containerRef.current.removeEventListener('mouseleave', resetPosition);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center perspective-1000"
    >
      <div ref={cardRef}>
        <ResponsiveImage 
          src={isHovered ? monetise2 : monetise} 
          alt="Monetization statistics" 
          className="w-auto max-h-[146px] object-contain transform-gpu transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default AccelerateCard; 