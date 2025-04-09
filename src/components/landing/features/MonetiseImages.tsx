import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MonetiseImages = () => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const followersRef = useRef(null);

  useEffect(() => {
    gsap.set(counterRef.current, { textContent: "+58" });
    gsap.set(barRef.current, { height: "30%" });
    gsap.set([counterRef.current, followersRef.current], { scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true
      },
      delay: 1
    });

    tl.to(counterRef.current, {
        textContent: "+1435",
        duration: 4.5,
        ease: "power2.out",
        snap: { textContent: 1 }
      })
      .to(barRef.current, {
        height: "60%", 
        duration: 3.0,
        ease: "power2.out"
      }, "-=3.0")
      .to([counterRef.current, followersRef.current], {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=4.5");
      
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
      className="relative w-[240px] h-[130px] bg-white rounded-lg overflow-hidden cursor-pointer shadow-custom-blur"
    >
      {/* Counter Text - Positioned Top-Left */}
      <div className="absolute top-4 left-4 z-20"> 
        <div className="flex flex-col items-start">
          <span 
            ref={counterRef}
            className="text-4xl font-bold text-black"
            style={{ 
              display: 'block',
              transformOrigin: 'top left'
            }}
          >
            +58
          </span>
          <span 
            ref={followersRef}
            className="text-sm font-normal text-gray-500 mt-1"
            style={{ 
              display: 'block',
              transformOrigin: 'top left'
            }}
          >
            Followers
          </span>
        </div>
      </div>

      {/* Blue Bar */}
      <div 
        ref={barRef}
        className="absolute bottom-0 left-0 w-full bg-blue-200 transition-all duration-300 ease-out"
        style={{ 
          height: '30%',
          zIndex: 10
        }}
      />
    </div>
  );
};

export default MonetiseImages; 