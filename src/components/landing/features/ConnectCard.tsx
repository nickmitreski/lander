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
  
  // Add timestamp to bypass caching
  const timestamp = new Date().getTime();
  const connect1WithTimestamp = `${connect1}?t=${timestamp}`;
  const connect2WithTimestamp = `${connect2}?t=${timestamp}`;
  const connect3WithTimestamp = `${connect3}?t=${timestamp}`;

  // Remove the pulse animation that adds visible elements around images
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Initial state - with responsive spacing
    gsap.set(card1Ref.current, {
      opacity: 0,
      x: window.innerWidth < 640 ? -35 : -15,  // More space on mobile
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
      x: window.innerWidth < 640 ? 35 : 15,  // More space on mobile
      y: 10,
      scale: 0.9,
      rotation: 5
    });
    
    // Animation sequence with responsive positioning
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
        x: window.innerWidth < 640 ? -45 : -25,  // More space on mobile
        y: 0, 
        scale: 1, 
        rotation: -5,
        duration: 0.5,
      }, "-=0.3")
      .to(card3Ref.current, { 
        opacity: 1, 
        x: window.innerWidth < 640 ? 45 : 25,  // More space on mobile
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
      
      const isMobile = window.innerWidth < 640;
      const baseX = isMobile ? 35 : 15;  // Base position for hover state
      
      // On hover, bring images closer together
      gsap.to(card1Ref.current, { 
        x: -baseX - moveX,
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
        x: baseX + moveX,
        y: -moveY, 
        rotation: moveX / 2 + 3,
        scale: 1.15,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const resetPosition = () => {
      setIsActive(false);
      const isMobile = window.innerWidth < 640;
      const baseX = isMobile ? 45 : 25;  // Base position for non-hover state
      
      // Reset to initial positions with more space on mobile
      gsap.to(card1Ref.current, { 
        x: -baseX,
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
        x: baseX,
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
      <div ref={card1Ref} className="absolute left-[25%]">  {/* Increased from 20% */}
        <ResponsiveImage 
          src={connect1WithTimestamp} 
          alt="User profile 1" 
          className="w-[146px] h-[146px] object-contain" 
          widths={[146, 292, 438]}
          sizes={['146px']}
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
          src={connect2WithTimestamp} 
          alt="@janeassens profile" 
          className="w-[146px] h-[146px] object-contain rounded-full" 
          widths={[146, 292, 438]}
          sizes={['146px']}
          style={{
            imageRendering: 'crisp-edges',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
      
      {/* Right card */}
      <div ref={card3Ref} className="absolute right-[25%]">  {/* Increased from 20% */}
        <ResponsiveImage 
          src={connect3WithTimestamp} 
          alt="User profile 3" 
          className="w-[146px] h-[146px] object-contain" 
          widths={[146, 292, 438]}
          sizes={['146px']}
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