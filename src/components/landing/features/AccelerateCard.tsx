import { useRef, useEffect } from "react";
import accelerate from "@/assets/accelerate.png";
import { gsap } from "gsap";

const AccelerateCard = () => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    const container = containerRef.current;
    
    const handleMouseMove = (e) => {
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
        src={accelerate} 
        alt="Growth metrics" 
        className="w-auto max-h-[180px] object-contain transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      />
    </div>
  );
};

export default AccelerateCard; 