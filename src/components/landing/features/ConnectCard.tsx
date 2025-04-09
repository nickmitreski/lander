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
    const initialX1 = isMobile ? -35 : -15;
    const initialX3 = isMobile ? 35 : 15;
    const finalX1 = isMobile ? -45 : -25;
    const finalX3 = isMobile ? 45 : 25;
    
    // Initial state
    gsap.set(card1Ref.current, {
      opacity: 0,
      x: initialX1,
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
      x: initialX3,
      y: 10,
      scale: 0.9,
      rotation: 5
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play pause resume reset",
      },
      defaults: { ease: "power3.out" },
      delay: 1,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1
    });
    
    // Animation sequence
    tl.to(card2Ref.current, { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6,
        delay: 0.1 // Slight delay for center card
      })
      .to(card1Ref.current, { 
        opacity: 1, 
        x: finalX1, 
        y: 0, 
        scale: 1, 
        rotation: -5,
        duration: 0.5,
      }, "-=0.4") // Overlap slightly
      .to(card3Ref.current, { 
        opacity: 1, 
        x: finalX3, 
        y: 0, 
        scale: 1, 
        rotation: 5,
        duration: 0.5
      }, "<" ); // Start at the same time as card1 animation

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
      <div ref={card1Ref} className="absolute left-[25%]">
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
      <div ref={card3Ref} className="absolute right-[25%]">
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