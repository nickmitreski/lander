import { useEffect, useRef, useState } from "react";
import personalSupport1 from "@/assets/personalsupportmessage1.png";
import personalSupport2 from "@/assets/personalsupportmessage2.png";
import { gsap } from "gsap";
import ResponsiveImage from "@/components/ui/responsive-image";

const SupportCard = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Initial state
    gsap.set(card1Ref.current, {
      opacity: 0,
      y: -45,
      scale: 0.9,
      rotation: -2
    });
    
    gsap.set(card2Ref.current, {
      opacity: 0,
      y: 45,
      scale: 0.9,
      rotation: 2
    });
    
    // Animation sequence
    timeline
      .to(card1Ref.current, { 
        opacity: 1, 
        y: -35,
        scale: 1,
        rotation: -2,
        duration: 0.5
      })
      .to(card2Ref.current, { 
        opacity: 1, 
        y: 35,
        scale: 1,
        rotation: 2,
        duration: 0.5
      }, "-=0.3");
      
    // Hover effect
    const hoverEffect = () => {
      setIsHovered(true);
      gsap.to(card1Ref.current, { 
        y: -40,
        scale: 1.05,
        rotation: -5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(card2Ref.current, { 
        y: 40,
        scale: 1.05,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const resetPosition = () => {
      setIsHovered(false);
      gsap.to(card1Ref.current, { 
        y: -35,
        scale: 1,
        rotation: -2,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(card2Ref.current, { 
        y: 35,
        scale: 1,
        rotation: 2,
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
      className="w-full h-full relative flex items-center justify-center"
    >
      {/* Top card */}
      <div ref={card1Ref} className="absolute">
        <ResponsiveImage 
          src={personalSupport1} 
          alt="Support message 1" 
          className="w-auto h-[100px] sm:h-[124px] max-h-[100px] sm:max-h-[124px] !important object-contain scale-[0.85] sm:scale-90" 
          style={{
            width: 'auto',
            imageRendering: 'crisp-edges'
          }}
        />
      </div>
      
      {/* Bottom card */}
      <div ref={card2Ref} className="absolute">
        <ResponsiveImage 
          src={personalSupport2} 
          alt="Support message 2" 
          className="w-auto h-[90px] sm:h-[87px] max-h-[90px] sm:max-h-[87px] !important object-contain"
          style={{
            width: 'auto',
            imageRendering: 'crisp-edges'
          }}
        />
      </div>
    </div>
  );
};

export default SupportCard; 