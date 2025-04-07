import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useRef, useEffect } from 'react';
import AnimatedSectionTitle from './AnimatedSectionTitle';
import { gsap } from 'gsap';
import '../../lib/gsap-config';

const features = [
  "1000+ followers each month",
  "Dedicated Personal Account Manager",
  "Boost Your Presence on the Explore Page",
  "Expand Your Reach to Targeted Audiences",
  "Real-Time Growth Analytics",
  "Quick and Easy Setup"
];

export const Pricing = () => {
  const pricingRef = useRef(null);

  useEffect(() => {
    gsap.set(".pricing-card", {
      opacity: 0,
      y: 30
    });
    
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: pricingRef.current,
        start: "top 80%"
      }
    });
    
    tl.to(".pricing-card", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1
    });
  }, []);

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-[#f8f9ff] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10" ref={pricingRef}>
        <AnimatedSectionTitle
          firstPart="Start Your"
          highlightedPart="Growth Journey"
          subtitle="Join thousands of successful creators and businesses"
        />

        <div className="mt-16">
          <div className="pricing-card bg-white rounded-[32px] shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Pricing Info */}
              <div className="bg-gradient-to-br from-[rgba(32,140,252,0.02)] to-[rgba(32,140,252,0.08)] p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100">
                <div>
                  <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
                    <p className="text-blue-600 text-sm font-medium">Free 7-Day Trial for</p>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Growth Plan</h3>
                  <p className="text-gray-600 mb-8">Get access to all features and updates for a monthly subscription.</p>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900">$24.99</span>
                    <span className="text-gray-500">/week</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-8">billed monthly</p>
                </div>

                <div>
                  <Button
                    variant="blue"
                    size="trial"
                    className="w-full py-6 text-base font-semibold bg-gradient-to-r from-[rgba(32,140,252,1)] to-[rgba(66,157,253,1)] hover:from-[rgba(42,147,255,1)] hover:to-[rgba(76,167,255,1)] text-white transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                  >
                    Get started for free
                  </Button>
                  <p className="text-center text-gray-500 mt-4 text-sm">
                    Cancel anytime, no risk
                  </p>
                </div>
              </div>

              {/* Right side - Features */}
              <div className="p-8 md:p-12">
                <h4 className="text-xl font-semibold text-gray-900 mb-8">What's included in Follow Fuse:</h4>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
