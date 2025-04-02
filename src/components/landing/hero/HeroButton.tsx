import { Button } from "@/components/ui/button";

const HeroButton = () => {
  return (
    <div className="mt-8 relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-5 rounded-2xl" />
      <Button
        variant="blue"
        size="trial"
        className="relative z-10 w-full flex items-center justify-center gap-2 md:gap-4 font-medium transition-all duration-300 overflow-hidden group border-blue-200 bg-gradient-to-r from-[rgba(32,140,252,1)] to-[rgba(66,157,253,1)] text-lg md:text-xl lg:text-2xl py-4 md:py-5 px-4 md:px-8 rounded-xl"
        style={{ borderWidth: '3px' }}
      >
        <span className="relative z-10">Start free trial</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1 md:w-[26px] md:h-[26px]"
        >
          <path
            d="M3 8H13M13 8L8 3M13 8L8 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(42,147,255,1)] to-[rgba(76,167,255,1)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-xl"></div>
      </Button>
    </div>
  );
};

export default HeroButton; 