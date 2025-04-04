import { useRef, useEffect, useState } from "react";
import monetise from "@/assets/monetise.png";
import monetise2 from "@/assets/monetise2.png";
import { gsap } from "gsap";

const AccelerateCard = () => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    const container = containerRef.current;
    
    const handleMouseMove = (e) => {
      setIsHovered(true);
      const rect = container.getBoundingClientRect();
      // Get mouse position relative to the container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation values
      const xPercentage = (x / rect.width - 0.5) * 2; // -1 to 1
      const yPercentage = (y / rect.height - 0.5) * 2; // -1 to 1
      
      // Apply transformations
      gsap.to(el, {
        rotationY: xPercentage * 20, // More dramatic rotation
        rotationX: -yPercentage * 20, // More dramatic rotation
        scale: 1.15,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(el, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      });
    };
    
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center perspective-1000"
    >
      <img 
        ref={cardRef}
        src={isHovered ? monetise2 : monetise} 
        alt="Monetization statistics" 
        className="w-auto max-h-[180px] object-contain transform-gpu transition-all duration-300"
        style={{ 
          transformStyle: "preserve-3d",
          imageRendering: 'crisp-edges',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      />
    </div>
  );
};

export default AccelerateCard; 