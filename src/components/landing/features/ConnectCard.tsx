import { useEffect, useRef } from "react";
import connect1 from "@/assets/optimized/connet1.png";
import connect2 from "@/assets/optimized/connect2.png";
import connect3 from "@/assets/optimized/connect3.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ResponsiveImage from "@/components/ui/responsive-image";

gsap.registerPlugin(ScrollTrigger);

const ConnectCard = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  
  // Add timestamp to bypass caching
  const timestamp = new Date().getTime();
  const connect1WithTimestamp = `${connect1}?t=${timestamp}`;
  const connect2WithTimestamp = `${connect2}?t=${timestamp}`;
  const connect3WithTimestamp = `${connect3}?t=${timestamp}`;

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const initialX1 = isMobile ? -100 : -15;  // Much further left on mobile
    const initialX3 = isMobile ? 100 : 15;    // Much further right on mobile
    const finalX1 = isMobile ? -80 : -25;
    const finalX3 = isMobile ? 80 : 25;
    
    // Initial state - start with opacity 0 but in their initial positions
    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
      opacity: 0,
      scale: 0.9
    });
    gsap.set(card1Ref.current, {
      x: initialX1,
      y: 0,
      rotation: -5
    });
    gsap.set(card2Ref.current, {
      x: 0,
      y: 0
    });
    gsap.set(card3Ref.current, {
      x: initialX3,
      y: 0,
      rotation: 5
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      defaults: { ease: "power3.out" },
      repeat: -1,
      repeatDelay: 2
    });
    
    // Animation sequence
    tl
      // Step 1: Fade in all cards
      .to([card1Ref.current, card2Ref.current, card3Ref.current], {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1
      })
      // Step 2: Move cards closer together and increase size
      .to([card1Ref.current, card3Ref.current], {
        x: (i) => i === 0 ? initialX1 * 0.2 : initialX3 * 0.2,  // Move even closer (20% of initial offset)
        scale: 1.1,  // Increase size by 10%
        duration: 0.8,
        ease: "power2.inOut"
      }, "+=1")
      // Step 3: Move cards back out and return to original size
      .to([card1Ref.current, card3Ref.current], {
        x: (i) => i === 0 ? initialX1 : initialX3,
        scale: 1,  // Return to original size
        duration: 0.8,
        ease: "power2.inOut"
      }, "+=0.5");

    // Cleanup
    return () => { 
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative flex items-center justify-center"
    >
      {/* Left card */}
      <div ref={card1Ref} className="absolute left-[15%] sm:left-[25%]">
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
      <div ref={card3Ref} className="absolute right-[15%] sm:right-[25%]">
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