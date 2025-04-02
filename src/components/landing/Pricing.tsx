import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useRef, useEffect } from 'react';
import AnimatedSectionTitle from './AnimatedSectionTitle';
import { gsap } from 'gsap';
import '../../lib/gsap-config';

const features = [
  "1000s of Real Followers Every Month",
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
    <section id="pricing" className="py-20 bg-[#f8f9ff] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10" ref={pricingRef}>
        <AnimatedSectionTitle
          firstPart="Start Your"
          highlightedPart="Growth Journey"
          subtitle="Join thousands of successful creators and businesses"
        />

        <div className="mt-16 max-w-xl mx-auto">
          <div className="pricing-card bg-gradient-to-b from-[rgba(32,140,252,1)] to-[rgba(66,157,253,1)] rounded-[32px] shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20">
            {/* Top Label */}
            <div className="bg-[rgba(42,147,255,1)] py-2 px-6">
              <p className="text-white/80 text-sm font-medium text-center">PROFESSIONAL GROWTH PACKAGE</p>
            </div>

            {/* Header Section */}
            <div className="p-8 text-white text-center">
              <div className="flex justify-center items-baseline gap-1 mb-4">
                <span className="text-5xl font-bold">$24.99</span>
                <span className="text-white/80">/week</span>
              </div>
              <p className="text-white/80 text-sm">billed monthly</p>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-t-[32px] p-8">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-[rgba(32,140,252,1)]" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-8">
                <Button
                  variant="blue"
                  size="trial"
                  className="w-full py-4 text-base font-semibold bg-gradient-to-r from-[rgba(32,140,252,1)] to-[rgba(66,157,253,1)] hover:from-[rgba(42,147,255,1)] hover:to-[rgba(76,167,255,1)] text-white transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                >
                  Start free trial
                </Button>
                <p className="text-center text-gray-500 mt-4 text-xs">
                  7-day free trial, cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
