import { Avatar, AvatarImage } from "@/components/ui/avatar";

const HeroReviews = () => {
  // Array of avatar image URLs
  const avatarImages = [
    "https://originui.com/avatar-80-03.jpg",
    "https://originui.com/avatar-80-04.jpg",
    "https://originui.com/avatar-80-05.jpg",
    "https://originui.com/avatar-80-06.jpg"
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 mb-6 sm:mb-10 w-full">
      <div className="flex items-center justify-center mb-2 sm:mb-0">
        <div className="flex -space-x-2 sm:-space-x-3">
          {avatarImages.map((img, i) => (
            <Avatar 
              key={i} 
              className={`ring-2 ring-white border-2 border-white w-8 h-8 sm:w-10 sm:h-10 ${i === 0 ? 'z-40' : ''} ${i === 1 ? 'z-30' : ''} ${i === 2 ? 'z-20' : ''} ${i === 3 ? 'z-10' : ''}`}
            >
              <AvatarImage src={img} alt={`User ${i + 1}`} />
            </Avatar>
          ))}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-white text-xs font-medium z-5 relative">
            20K+
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <div className="flex items-center gap-1">
          <div className="text-sm font-semibold">4.9</div>
          <div className="flex text-yellow-400">
            {"★".repeat(5)}
          </div>
        </div>
        <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          Based on 350+ reviews
        </div>
      </div>
    </div>
  );
};

export default HeroReviews; 