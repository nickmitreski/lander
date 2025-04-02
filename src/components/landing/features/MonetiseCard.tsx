import { useRef, useState, useEffect } from "react";
import monetise from "@/assets/monetise.png";

const MonetiseCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create the keyframes stylesheet
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

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative">
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
        
        {/* Main image with hover effect */}
        <img 
          src={monetise} 
          alt="Monetization statistics" 
          className={`w-auto max-h-[180px] object-contain transition-all duration-500 ${
            isHovering ? 'scale-110 brightness-110' : ''
          }`}
        />
        
        {/* Glow effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 opacity-0 rounded-xl blur-xl transition-opacity duration-500 ${
            isHovering ? 'opacity-20' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default MonetiseCard; 