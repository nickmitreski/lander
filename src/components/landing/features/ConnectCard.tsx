import { useEffect, useRef, useState } from "react";
import connect1 from "@/assets/optimized/connet1.png";
import connect2 from "@/assets/optimized/connect2.png";
import connect3 from "@/assets/optimized/connect3.png";
import { gsap } from "gsap";
import ResponsiveImage from "@/components/ui/responsive-image";

const ConnectCard = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  
  // Remove the pulse animation that adds visible elements around images
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Initial state - more spread apart
    gsap.set(card1Ref.current, {
      opacity: 0,
      x: -20,
      y: 10,
      scale: 0.9,
      rotation: -5
    });
    
    gsap.set(card2Ref.current, {
      opacity: 0,
      y: -15,
      scale: 0.9
    });
    
    gsap.set(card3Ref.current, {
      opacity: 0,
      x: 20,
      y: 10,
      scale: 0.9,
      rotation: 5
    });
    
    // Animation sequence with more dramatic entrances
    timeline
      .to(card2Ref.current, { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6,
        delay: 0.3
      })
      .to(card1Ref.current, { 
        opacity: 1, 
        x: -30,
        y: 0, 
        scale: 1, 
        rotation: -5,
        duration: 0.5,
      }, "-=0.3")
      .to(card3Ref.current, { 
        opacity: 1, 
        x: 30,
        y: 0, 
        scale: 1, 
        rotation: 5,
        duration: 0.5
      }, "-=0.3");

    const hoverEffect = (e) => {
      setIsActive(true);
      const { clientX, clientY } = e;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (clientX - centerX) / 12;
      const moveY = (clientY - centerY) / 12;
      
      // On hover, bring images closer together with more dramatic effects
      gsap.to(card1Ref.current, { 
        x: -20 - moveX, 
        y: -moveY, 
        rotation: -moveX / 2 - 3,
        scale: 1.15,
        duration: 0.4,
        ease: "power2.out"
      });
      
      gsap.to(card2Ref.current, { 
        x: moveX / 2, 
        y: moveY / 2, 
        rotation: moveY / 4,
        scale: 1.2,
        duration: 0.4,
        ease: "power2.out",
        zIndex: 30
      });
      
      gsap.to(card3Ref.current, { 
        x: 20 + moveX, 
        y: -moveY, 
        rotation: moveX / 2 + 3,
        scale: 1.15,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const resetPosition = () => {
      setIsActive(false);
      // Spread them apart again on mouse leave with spring effect
      gsap.to(card1Ref.current, { 
        x: -30,
        y: 0, 
        rotation: -5,
        scale: 1,
        boxShadow: 'none',
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
      
      gsap.to(card2Ref.current, { 
        x: 0,
        y: 0, 
        rotation: 0,
        scale: 1,
        boxShadow: 'none',
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
      
      gsap.to(card3Ref.current, { 
        x: 30,
        y: 0, 
        rotation: 5,
        scale: 1,
        boxShadow: 'none',
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });
      
      // Reset container background
      gsap.to(containerRef.current, {
        backgroundColor: 'transparent',
        duration: 0.3
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
      {/* Left card */}
      <div ref={card1Ref} className="absolute left-[20%]">
        <ResponsiveImage 
          src={connect1} 
          alt="User profile 1" 
          className="w-[162px] h-[162px] object-contain" 
          widths={[162, 324, 486]}
          sizes={['162px']}
          style={{
            imageRendering: 'crisp-edges',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
      
      {/* Center card */}
      <div ref={card2Ref} className="absolute">
        <ResponsiveImage 
          src={connect2} 
          alt="User profile 2" 
          className="w-[162px] h-[162px] object-contain" 
          widths={[162, 324, 486]}
          sizes={['162px']}
          style={{
            imageRendering: 'crisp-edges',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
      
      {/* Right card */}
      <div ref={card3Ref} className="absolute right-[20%]">
        <ResponsiveImage 
          src={connect3} 
          alt="User profile 3" 
          className="w-[162px] h-[162px] object-contain" 
          widths={[162, 324, 486]}
          sizes={['162px']}
          style={{
            imageRendering: 'crisp-edges',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
    </div>
  );
};

export default ConnectCard; 