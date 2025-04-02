import enhance1 from "@/assets/enhane1.png";
import enhance2 from "@/assets/enhance2.png";
import monetise from "@/assets/monetise.png";
import accelerate from "@/assets/accelerate.png";
import connect1 from "@/assets/connet1.png";
import connect2 from "@/assets/connect2.png";
import connect3 from "@/assets/connect3.png";
import personalSupport1 from "@/assets/personalsupportmessage1.png";
import personalSupport2 from "@/assets/personalsupportmessage2.png";

const Features = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Enhance Your Reputation */}
          <div className="rounded-xl border p-[33px] flex flex-col justify-between min-w-[300px] max-w-[1152px]">
            <div className="relative w-full h-[352px] flex items-center justify-center">
              <img 
                src={enhance1} 
                alt="Profile stats showing follower growth" 
                className="absolute w-[1152px] h-[720px] object-contain"
              />
              <img 
                src={enhance2} 
                alt="Profile engagement metrics" 
                className="absolute w-[1152px] h-[720px] object-contain"
                style={{ transform: 'translateY(20px)' }} 
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Enhance Your Reputation</h3>
              <p className="text-gray-600">Grow an engaged audience and build instant credibility.</p>
            </div>
          </div>

          {/* Monetise Your Influence */}
          <div className="rounded-xl border p-[33px] flex flex-col justify-between min-w-[300px] max-w-[1152px]">
            <div className="relative w-full h-[352px] flex items-center justify-center">
              <img 
                src={monetise} 
                alt="Monetization statistics" 
                className="w-[1152px] h-[720px] object-contain" 
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Monetise Your Influence</h3>
              <p className="text-gray-600">Earn through brand deals, promotions, and business exposure.</p>
            </div>
          </div>

          {/* Accelerate Your Growth */}
          <div className="rounded-xl border p-[33px] flex flex-col justify-between min-w-[300px] max-w-[1152px]">
            <div className="relative w-full h-[352px] flex items-center justify-center">
              <img 
                src={accelerate} 
                alt="Growth metrics" 
                className="w-[1152px] h-[720px] object-contain" 
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Accelerate Your Growth</h3>
              <p className="text-gray-600">Gain 1000s of real followers per month with FollowFuse.</p>
            </div>
          </div>

          {/* Connect with Your Ideal Audience */}
          <div className="rounded-xl border p-[33px] flex flex-col justify-between md:col-span-2 min-w-[300px] max-w-[1152px]">
            <div className="relative w-full h-[352px] flex items-center justify-center">
              <img 
                src={connect1} 
                alt="User profile 1" 
                className="absolute left-[10%] w-[373px] h-[352px] object-contain" 
              />
              <img 
                src={connect2} 
                alt="User profile 2" 
                className="absolute w-[373px] h-[352px] object-contain" 
              />
              <img 
                src={connect3} 
                alt="User profile 3" 
                className="absolute right-[10%] w-[373px] h-[352px] object-contain" 
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Connect with Your Ideal Audience</h3>
              <p className="text-gray-600">Reach engaged followers in your niche or target location.</p>
            </div>
          </div>

          {/* Personalised Support */}
          <div className="rounded-xl border p-[33px] flex flex-col justify-between min-w-[300px] max-w-[1152px]">
            <div className="relative w-full h-[352px] flex items-center justify-center">
              <img 
                src={personalSupport1} 
                alt="Support message 1" 
                className="absolute w-[729px] h-[302px] object-contain" 
                style={{ transform: 'translateY(-20px)' }} 
              />
              <img 
                src={personalSupport2} 
                alt="Support message 2" 
                className="absolute w-[729px] h-[302px] object-contain" 
                style={{ transform: 'translateY(20px)' }} 
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Personalised Support</h3>
              <p className="text-gray-600">Each account is assigned a dedicated account manager.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
export default Features;
