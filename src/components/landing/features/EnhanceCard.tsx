import { useEffect, useRef } from "react";
import enhance1 from "@/assets/enhane1.png";
import enhance2 from "@/assets/enhance2.png";
import ResponsiveImage from "@/components/ui/responsive-image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EnhanceCard = () => {
  const containerRef = useRef(null);

  const timestamp = new Date().getTime();
  const enhance1WithTimestamp = `${enhance1}?t=${timestamp}&quality=100`;
  const enhance2WithTimestamp = `${enhance2}?t=${timestamp}&quality=100`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial state (make sure class isn't present)
    container.classList.remove('is-active');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play pause resume reset", // Keep animation running when in view
      },
      delay: 1, // 1-second delay after trigger
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Toggle back and forth
      repeatDelay: 1.5 // Pause between swaps (adjust as needed)
    });

    // Simple tween to toggle the class
    // We use a very short duration because the actual visual animation is handled by CSS transitions
    tl.to(container, {
      duration: 0.1, // Minimal duration just to trigger class change
      onComplete: () => container.classList.add('is-active'),
      onReverseComplete: () => container.classList.remove('is-active')
    });
    // If the above doesn't work reliably, try GSAP's className toggle:
    // tl.to(container, { duration: 0.1, className: "+=is-active" }); 

    // Cleanup
    return () => { 
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
      // Ensure class is removed on unmount
      if (container) {
        container.classList.remove('is-active');
      }
    }

  }, []);
  
  return (
    <div ref={containerRef} className="w-full h-full relative group flex items-center justify-center">
      {/* Front card - uses group-[.is-active] instead of group-hover */}
      <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 z-20 group-[.is-active]:z-10 group-[.is-active]:-translate-y-3 group-[.is-active]:scale-90">
        <ResponsiveImage 
          src={enhance2WithTimestamp} 
          alt="Profile engagement metrics" 
          className="w-auto max-w-[300px] max-h-[300px] object-contain"
          style={{
            maxHeight: '300px',
            maxWidth: '300px',
            width: 'auto',
            height: 'auto',
            imageRendering: 'crisp-edges'
          }}
          widths={[300]}
          sizes={['300px']}
        />
      </div>
      
      {/* Back card - uses group-[.is-active] instead of group-hover */}
      <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 translate-y-4 scale-90 z-10 group-[.is-active]:z-20 group-[.is-active]:translate-y-0 group-[.is-active]:scale-100">
        <ResponsiveImage 
          src={enhance1WithTimestamp} 
          alt="Profile stats showing follower growth" 
          className="w-auto max-w-[300px] max-h-[300px] object-contain"
          style={{
            maxHeight: '300px',
            maxWidth: '300px',
            width: 'auto',
            height: 'auto',
            imageRendering: 'crisp-edges'
          }}
          widths={[300]}
          sizes={['300px']}
        />
      </div>
    </div>
  );
};

export default EnhanceCard; 