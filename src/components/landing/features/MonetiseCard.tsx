import { useEffect, useRef } from "react";
import accelerate from "@/assets/accelerate.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MonetiseCard = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Ensure the element exists before setting/animating
    if (!imageRef.current || !containerRef.current) return;

    gsap.set(imageRef.current, { scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play pause resume reset", // Play on enter, pause/resume
      },
      delay: 1,
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Go back and forth
      repeatDelay: 0.5 // Pause slightly between repeats
    });

    tl.to(imageRef.current, { 
      scale: 1.1,
      duration: 2,
      ease: "power1.inOut"
    });

    // Cleanup function
    return () => { 
      // Check if scrollTrigger exists before killing
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill(); // Kill the timeline itself
    }

  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
    >
      <img 
        ref={imageRef}
        src={accelerate} 
        alt="Growth metrics" 
        className="w-auto max-h-[132px] object-contain relative z-10 transform-gpu"
        style={{ 
          imageRendering: 'crisp-edges',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      />
    </div>
  );
};

export default MonetiseCard; 