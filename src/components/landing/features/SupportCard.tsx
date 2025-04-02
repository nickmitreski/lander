import { useRef, useEffect } from "react";
import personalSupport1 from "@/assets/personalsupportmessage1.png";
import personalSupport2 from "@/assets/personalsupportmessage2.png";
import { gsap } from "gsap";

const SupportCard = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const hoverEffect = () => {
      gsap.to(card1Ref.current, {
        y: -45,
        rotation: -3,
        scale: 1.08,
        duration: 0.5,
        ease: "power2.out"
      });
      
      gsap.to(card2Ref.current, {
        y: 60,
        rotation: 3,
        scale: 0.92,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.out"
      });
    };
    
    const resetEffect = () => {
      gsap.to(card1Ref.current, {
        y: -30,
        rotation: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)"
      });
      
      gsap.to(card2Ref.current, {
        y: 40,
        rotation: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)"
      });
    };
    
    container.addEventListener("mouseenter", hoverEffect);
    container.addEventListener("mouseleave", resetEffect);
    
    return () => {
      container.removeEventListener("mouseenter", hoverEffect);
      container.removeEventListener("mouseleave", resetEffect);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center"
    >
      {/* Top card - larger */}
      <img 
        ref={card1Ref}
        src={personalSupport1} 
        alt="Support message 1" 
        className="absolute w-auto max-h-[170px] object-contain" 
        style={{ 
          transform: 'translateY(-30px)'
        }} 
      />
      
      {/* Bottom card - smaller */}
      <img 
        ref={card2Ref}
        src={personalSupport2} 
        alt="Support message 2" 
        className="absolute w-auto max-h-[75px] object-contain" 
        style={{ 
          transform: 'translateY(40px)', 
          opacity: 0.95
        }} 
      />
    </div>
  );
};

export default SupportCard; 