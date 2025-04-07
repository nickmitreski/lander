import { useRef, useState } from "react";
import monetise1 from "@/assets/optimized/monetise.png";
import monetise2 from "@/assets/optimized/monetise2.png";
import ResponsiveImage from "@/components/ui/responsive-image";

const MonetiseImages = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* First monetise image */}
      <div ref={image1Ref} className="absolute" style={{ transform: 'scale(0.9)' }}>
        <ResponsiveImage 
          src={monetise1}
          alt="Monetization metrics 1" 
          className="w-auto h-[90px] max-h-[90px] object-contain" 
          style={{
            height: '90px',
            maxHeight: '90px',
            width: 'auto',
            imageRendering: 'crisp-edges',
            transform: isHovering ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease-out'
          }}
          sizes={['90px']}
          widths={[90, 180]}
        />
      </div>
      
      {/* Second monetise image */}
      <div ref={image2Ref} className="absolute" style={{ transform: 'scale(0.9)' }}>
        <ResponsiveImage 
          src={monetise2}
          alt="Monetization metrics 2" 
          className="w-auto h-[90px] max-h-[90px] object-contain" 
          style={{
            height: '90px',
            maxHeight: '90px',
            width: 'auto',
            imageRendering: 'crisp-edges',
            transform: isHovering ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease-out'
          }}
          sizes={['90px']}
          widths={[90, 180]}
        />
      </div>
    </div>
  );
};

export default MonetiseImages; 