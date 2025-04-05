import { useEffect, useRef, useState } from "react";
import connect1 from "@/assets/connet1.png";
import connect2 from "@/assets/connect2.png";
import connect3 from "@/assets/connect3.png";
import { gsap } from "gsap";

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
      x: -40,
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
      x: 40,
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
        x: -65,
        y: 0, 
        scale: 1, 
        rotation: -5,
        duration: 0.5,
      }, "-=0.3")
      .to(card3Ref.current, { 
        opacity: 1, 
        x: 65,
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
        x: -30 - moveX, 
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
        x: 30 + moveX, 
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
        x: -65,
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
        x: 65,
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

    const container = containerRef.current;
    container.addEventListener('mousemove', hoverEffect);
    container.addEventListener('mouseleave', resetPosition);

    return () => {
      container.removeEventListener('mousemove', hoverEffect);
      container.removeEventListener('mouseleave', resetPosition);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full flex items-center justify-center rounded-lg transition-all duration-300"
      style={{ perspective: "1000px" }}
    >
      <div className="flex items-center justify-center relative" style={{ width: '100%', height: '260px' }}>
        <img 
          ref={card1Ref}
          src={connect1} 
          alt="User profile 1" 
          className={`w-[160px] h-[160px] object-contain absolute transition-all duration-300 ${isActive ? 'filter-none' : ''}`}
          style={{ 
            left: "25%",
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            background: 'white'
          }}
        />
        <img 
          ref={card2Ref}
          src={connect2} 
          alt="User profile 2" 
          className={`w-[160px] h-[160px] object-contain absolute transition-all duration-300 ${isActive ? 'filter-none' : ''}`}
          style={{ 
            left: "50%", 
            transform: "translateX(-50%)",
            zIndex: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            background: 'white'
          }}
        />
        <img 
          ref={card3Ref}
          src={connect3} 
          alt="User profile 3" 
          className={`w-[160px] h-[160px] object-contain absolute transition-all duration-300 ${isActive ? 'filter-none' : ''}`}
          style={{ 
            right: "25%",
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            background: 'white'
          }}
        />
        
        {/* Only show connection lines when active */}
        {isActive && (
          <>
            <div className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-[60px] z-5 opacity-70"
                style={{ left: 'calc(25% + 60px)', top: '50%' }} />
            <div className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-[60px] z-5 opacity-70"
                style={{ right: 'calc(25% + 60px)', top: '50%' }} />
          </>
        )}
      </div>
    </div>
  );
};

export default ConnectCard; 