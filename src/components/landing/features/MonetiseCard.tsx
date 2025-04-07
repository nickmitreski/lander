import { useRef, useState } from "react";
import accelerate from "@/assets/accelerate.png";

const MonetiseCard = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main image */}
      <img 
        ref={imageRef}
        src={accelerate} 
        alt="Growth metrics" 
        className="w-auto max-h-[122px] object-contain relative z-10 transform-gpu"
        style={{ 
          imageRendering: 'crisp-edges',
          backfaceVisibility: 'hidden',
          willChange: 'transform',
          transform: isHovering ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease-out'
        }}
      />
    </div>
  );
};

export default MonetiseCard; 