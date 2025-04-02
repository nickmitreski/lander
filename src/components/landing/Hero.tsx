import { Button } from "@/components/ui/button";
import dashupImage from "@/assets/dashup.png";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 mt-[73px] mb-40 max-w-7xl mx-auto">
      <h1 className="text-gray-900 text-[64px] font-bold leading-[64px] tracking-[-0.64px] max-md:text-[40px] max-md:leading-[44px] max-md:mt-10">
        Boost Your Instagram with <br />
        <span className="text-black">Real, </span>
        <span className="text-[rgba(32,140,252,1)]">Engaged Followers</span>
      </h1>

      <p className="text-gray-600 text-xl font-medium leading-7 mt-[19px] max-w-[600px] max-md:max-w-full">
        Turn your followers into customers with our organic growth service.
        No bots, no fake engagement - just real results.
      </p>

      <div className="mt-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-5 rounded-2xl" />
        <Button
          variant="blue"
          size="trial"
          className="relative z-10 flex items-center gap-2 font-medium"
        >
          Start free trial
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8H13M13 8L8 3M13 8L8 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      <div className="flex items-center gap-6 mt-12 mb-12">
        <div className="flex items-center">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/avatar-user-${i}.png`}
                alt={`User ${i}`}
                className={`h-10 w-10 rounded-full ring-2 ring-white border-2 border-white ${
                  i === 1 ? "z-40" : ""
                } ${i === 2 ? "z-30" : ""} ${i === 3 ? "z-20" : ""} ${
                  i === 4 ? "z-10" : ""
                }`}
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-white text-xs font-medium z-5">
              20K+
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <div className="text-lg font-semibold">Trusted by 20,000+ clients</div>
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {"★".repeat(5)}
            </div>
            <span className="text-gray-500 text-sm ml-1">4.9/5</span>
          </div>
        </div>
      </div>
      
      {/* Dashboard Image */}
      <div className="w-full max-w-4xl mx-auto mt-8 z-10 block">
        <img 
          src={dashupImage} 
          alt="Follow Fuse Dashboard" 
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
};
