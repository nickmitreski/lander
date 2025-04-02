import FeatureCard from './FeatureCard';
import EnhanceCard from './EnhanceCard';
import MonetiseCard from './MonetiseCard';
import AccelerateCard from './AccelerateCard';
import ConnectCard from './ConnectCard';
import SupportCard from './SupportCard';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import AnimatedSectionTitle from '../AnimatedSectionTitle';
import '../.././../lib/gsap-config'; // Import GSAP configuration with ScrollTrigger

const FeaturesSection = () => {
  const cardsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);

    gsap.set(".feature-card", { 
      opacity: 0, 
      y: 30 
    });

    // Create a timeline for smooth animations
    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%"
      }
    });
    
    tl.to(".feature-card", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: isMobile ? 0.05 : 0.08,
      delay: 0.1
    });

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return (
    <section id="features" className="w-full pt-16 pb-8 sm:pb-12 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24">
        <AnimatedSectionTitle
          firstPart="Save Time & See Results"
          highlightedPart="Fast"
          subtitle="Attract real followers and go viral—quickly and organically."
        />
        
        <div 
          ref={cardsRef} 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* Enhance Your Reputation */}
          <FeatureCard 
            title="Enhance Your Reputation"
            description="Grow an engaged audience and build instant credibility."
          >
            <EnhanceCard />
          </FeatureCard>

          {/* Monetize Your Influence */}
          <FeatureCard 
            title="Monetize Your Influence"
            description="Earn through brand deals, promotions, and business exposure."
          >
            <MonetiseCard />
          </FeatureCard>

          {/* Accelerate Your Growth */}
          <FeatureCard 
            title="Accelerate Your Growth"
            description="Gain 1000s of real followers per month with FollowFuse."
          >
            <AccelerateCard />
          </FeatureCard>

          {/* Connect with Your Ideal Audience */}
          <FeatureCard 
            title="Connect with Your Ideal Audience"
            description="Reach engaged followers in your niche or target location."
            isWide={true}
          >
            <ConnectCard />
          </FeatureCard>

          {/* Personalized Support */}
          <FeatureCard 
            title="Personalized Support"
            description="Each account is assigned a dedicated account manager."
          >
            <SupportCard />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection as Features };
export default FeaturesSection; 