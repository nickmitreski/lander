import enhance1 from "@/assets/enhane1.png";
import enhance2 from "@/assets/enhance2.png";

const EnhanceCard = () => {
  return (
    <div className="w-full h-full relative group flex items-center justify-center">
      {/* Larger front card - moves to back on hover */}
      <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 z-20 group-hover:z-10 group-hover:-translate-y-3 group-hover:scale-90">
        <img 
          src={enhance2} 
          alt="Profile engagement metrics" 
          className="w-auto h-auto max-h-[180px] object-contain"
        />
      </div>
      
      {/* Smaller back card - moves to front on hover */}
      <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 translate-y-4 scale-90 z-10 group-hover:z-20 group-hover:translate-y-0 group-hover:scale-100">
        <img 
          src={enhance1} 
          alt="Profile stats showing follower growth" 
          className="w-auto h-auto max-h-[180px] object-contain"
        />
      </div>
    </div>
  );
};

export default EnhanceCard; 