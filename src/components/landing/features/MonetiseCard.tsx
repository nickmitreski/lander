import { useRef, useState, useEffect } from "react";
import accelerate from "@/assets/accelerate.png";
import { gsap } from "gsap";

const MonetiseCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Initial rising animation
    gsap.fromTo(imageRef.current,
      { 
        y: 30,
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );

    // Create the keyframes stylesheet for hover particles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-up-0 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-100px); opacity: 0; } }
      @keyframes float-up-1 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-80px); opacity: 0; } }
      @keyframes float-up-2 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-90px); opacity: 0; } }
      @keyframes float-up-3 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-120px); opacity: 0; } }
      @keyframes float-up-4 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-70px); opacity: 0; } }
      @keyframes float-up-5 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-110px); opacity: 0; } }
      @keyframes float-up-6 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-80px); opacity: 0; } }
      @keyframes float-up-7 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-100px); opacity: 0; } }
      @keyframes float-up-8 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-90px); opacity: 0; } }
      @keyframes float-up-9 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-110px); opacity: 0; } }
      @keyframes float-up-10 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-80px); opacity: 0; } }
      @keyframes float-up-11 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-70px); opacity: 0; } }
      @keyframes float-up-12 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-90px); opacity: 0; } }
      @keyframes float-up-13 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-100px); opacity: 0; } }
      @keyframes float-up-14 { 0% { transform: translateY(0); opacity: 0; } 100% { transform: translateY(-110px); opacity: 0; } }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle hover animations
  useEffect(() => {
    if (isHovering) {
      gsap.to(gradientRef.current, {
        y: "0%",
        opacity: 0.15,
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to(gradientRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  }, [isHovering]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Rising gradient background */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-t from-blue-500/50 to-transparent transform translate-y-full"
        style={{ mixBlendMode: 'soft-light' }}
      />
      
      {/* Main image */}
      <img 
        ref={imageRef}
        src={accelerate} 
        alt="Growth metrics" 
        className="w-auto max-h-[180px] object-contain relative z-10 transform-gpu"
        style={{ 
          imageRendering: 'crisp-edges',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      />
      
      {/* Particle effect on hover */}
      {isHovering && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-70"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-up-${i} ${Math.random() * 1.5 + 1}s ease-out forwards`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MonetiseCard; 