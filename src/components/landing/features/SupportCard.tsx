import { useEffect, useRef } from "react";
import personalSupport1 from "@/assets/personalsupportmessage1.png";
import personalSupport2 from "@/assets/personalsupportmessage2.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ResponsiveImage from "@/components/ui/responsive-image";

gsap.registerPlugin(ScrollTrigger);

const SupportCard = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  
  useEffect(() => {
    // Initial state (before animation)
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", 
        toggleActions: "play pause resume reset",
      },
      delay: 0.5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.2,
      yoyoEase: "power2.in"
    });
    
    // Animation sequence
    tl.to(card1Ref.current, { 
        opacity: 1, 
        y: -35,
        scale: 1,
        rotation: -2,
        duration: 0.6,
        ease: "power3.out"
      })
      .to(card2Ref.current, { 
        opacity: 1, 
        y: 35,
        scale: 1,
        rotation: 2,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      // Add a pause state where both cards are fully visible
      .to([card1Ref.current, card2Ref.current], {
        duration: 2,
      });
      
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