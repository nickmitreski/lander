import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const MonetiseImages = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const followersRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations
    if (isHovering) {
      // Animate counter from +58 to +1435
      gsap.to(counterRef.current, {
        textContent: "+1435",
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 } // Snap to whole numbers
      });

      // Animate the bar height
      gsap.to(barRef.current, {
        height: "60%", 
        duration: 1,
        ease: "power2.out"
      });

      // Scale up the text
      gsap.to([counterRef.current, followersRef.current], {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      // Reset animations
      gsap.to(counterRef.current, {
        textContent: "+58",
        duration: 1,
        ease: "power2.out",
        snap: { textContent: 1 } // Snap to whole numbers
      });

      gsap.to(barRef.current, {
        height: "30%",
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to([counterRef.current, followersRef.current], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isHovering]);

  return (
    <div 
      ref={containerRef}
      className="relative w-[240px] h-[130px] bg-white rounded-lg overflow-hidden cursor-pointer shadow-custom-blur"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Counter Text - Positioned Top-Left */}
      <div className="absolute top-4 left-4 z-20"> 
        <div className="flex flex-col items-start"> {/* Align items start */}
          <span 
            ref={counterRef}
            className="text-4xl font-bold text-black"
            style={{ 
              display: 'block',
              transformOrigin: 'top left' // Adjust transform origin
            }}
          >
            +58
          </span>
          <span 
            ref={followersRef}
            className="text-sm font-normal text-gray-500 mt-1"
            style={{ 
              display: 'block',
              transformOrigin: 'top left' // Adjust transform origin
            }}
          >
            Followers
          </span>
        </div>
      </div>

      {/* Blue Bar */}
      <div 
        ref={barRef}
        className="absolute bottom-0 left-0 w-full bg-blue-200 transition-all duration-300 ease-out"
        style={{ 
          height: '30%',
          zIndex: 10
        }}
      />
    </div>
  );
};

export default MonetiseImages; 