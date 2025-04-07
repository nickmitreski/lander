import enhance1 from "@/assets/enhane1.png";
import enhance2 from "@/assets/enhance2.png";
import ResponsiveImage from "@/components/ui/responsive-image";

const EnhanceCard = () => {
  // Add a timestamp to bypass caching
  const timestamp = new Date().getTime();
  const enhance1WithTimestamp = `${enhance1}?t=${timestamp}&quality=100`;
  const enhance2WithTimestamp = `${enhance2}?t=${timestamp}&quality=100`;
  
  return (
    <div className="w-full h-full relative group flex items-center justify-center">
      {/* Larger front card - moves to back on hover */}
      <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 z-20 group-hover:z-10 group-hover:-translate-y-3 group-hover:scale-90">
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
          widths={[300]} // Only use the full size
          sizes={['300px']} // Fixed size
        />
      </div>
      
      {/* Smaller back card - moves to front on hover */}
      <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 translate-y-4 scale-90 z-10 group-hover:z-20 group-hover:translate-y-0 group-hover:scale-100">
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
          widths={[300]} // Only use the full size
          sizes={['300px']} // Fixed size
        />
      </div>
    </div>
  );
};

export default EnhanceCard; 