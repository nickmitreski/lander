import { useRef, useEffect } from "react";
import personalSupport1 from "@/assets/personalsupportmessage1.png";
import personalSupport2 from "@/assets/personalsupportmessage2.png";
import { gsap } from "gsap";

const SupportCard = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    // Initial setup
    gsap.set(card1Ref.current, {
      y: -30,
      opacity: 0
    });
    
    gsap.set(card2Ref.current, {
      y: 40,
      opacity: 0
    });

    // Animate in
    gsap.to(card1Ref.current, {
      y: -30,
      opacity: 1,
      duration: 0.6,
      delay: 0.2
    });
    
    gsap.to(card2Ref.current, {
      y: 40,
      opacity: 0.95,
      duration: 0.6,
      delay: 0.4
    });

    // Add hover animation
    const container = containerRef.current;
    
    const onHover = () => {
      gsap.to(card1Ref.current, {
        y: -45,
        scale: 0.95,
        duration: 0.3
      });
      
      gsap.to(card2Ref.current, {
        y: 15,
        scale: 1.1,
        opacity: 1,
        duration: 0.3
      });
    };
    
    const onLeave = () => {
      gsap.to(card1Ref.current, {
        y: -30,
        scale: 1,
        duration: 0.3
      });
      
      gsap.to(card2Ref.current, {
        y: 40,
        scale: 1,
        opacity: 0.95,
        duration: 0.3
      });
    };
    
    container.addEventListener('mouseenter', onHover);
    container.addEventListener('mouseleave', onLeave);
    
    return () => {
      container.removeEventListener('mouseenter', onHover);
      container.removeEventListener('mouseleave', onLeave);
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
      />
      
      {/* Bottom card - now even larger */}
      <img 
        ref={card2Ref}
        src={personalSupport2} 
        alt="Support message 2" 
        className="absolute w-auto max-h-[140px] object-contain" 
      />
    </div>
  );
};

export default SupportCard; 