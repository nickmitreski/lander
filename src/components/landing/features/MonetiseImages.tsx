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
    const isMobile = window.innerWidth < 640;
    
    gsap.set(counterRef.current, { textContent: "+58" });
    gsap.set(barRef.current, { 
      height: "30%",
      scaleY: 1,
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
    });
    gsap.set([counterRef.current, followersRef.current], { scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reset"
      },
      repeat: -1,
      repeatDelay: 3,
      delay: isMobile ? 1.5 : 1
    });

    if (isMobile) {
      tl.to({}, { duration: 1 });
    }

    tl.to(counterRef.current, {
        textContent: "+1435",
        duration: 4.5,
        ease: "power2.out",
        snap: { textContent: 1 }
      })
      .to(barRef.current, {
        height: "60%",
        scaleY: 2,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 20%, 100% 20%, 80% 25%, 40% 40%, 0% 45%)',
        duration: 3.0,
        ease: "power2.out"
      }, "-=3.0")
      .to([counterRef.current, followersRef.current], {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=4.5")
      .to({}, { duration: 3 })
      .to([counterRef.current, followersRef.current], {
        scale: 1,
        duration: 0.3,
        ease: "power1.in"
      })
      .to(barRef.current, {
        height: "30%",
        scaleY: 1,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 80%, 100% 80%, 80% 85%, 40% 90%, 0% 95%)',
        duration: 0.3,
        ease: "power1.in"
      }, "+=3.3")
      .to(counterRef.current, {
        textContent: "+58",
        duration: 0.3,
        snap: { textContent: 1 },
        ease: "power1.in"
      }, "<");
      
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
      {/* SVG Mask Definition */}
      <svg width="0" height="0" viewBox="0 0 240 100">
        <defs>
          <mask id="waveMask" maskContentUnits="objectBoundingBox">
            <path
              d="M0,1 L1,1 L1,0 C0.75,0.3 0.5,0 0,0 Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>

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
        className="absolute bottom-0 left-0 w-full bg-blue-200"
        style={{ 
          height: '30%',
          zIndex: 10,
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
        }}
      />
    </div>
  );
};

export default MonetiseImages; 