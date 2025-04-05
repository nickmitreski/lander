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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const features = [
    {
      id: "enhance",
      title: "Enhance Your Reputation",
      description: "Grow an engaged audience and build instant credibility.",
      component: <EnhanceCard />
    },
    {
      id: "monetize",
      title: "Monetize Your Influence",
      description: "Earn via brand deals, promotions & business exposure.",
      component: <MonetiseCard />
    },
    {
      id: "accelerate",
      title: "Accelerate Your Growth",
      description: "Gain 1000s of real followers per month with FollowFuse.",
      component: <AccelerateCard />
    },
    {
      id: "connect",
      title: "Connect with Your Ideal Audience",
      description: "Reach engaged followers in your niche or target location.",
      component: <ConnectCard />,
      isWide: true
    },
    {
      id: "support",
      title: "Personalized Support",
      description: "Each account is assigned a dedicated account manager.",
      component: <SupportCard />
    }
  ];

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

  // Handle touch events for carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < features.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Animate carousel slide
  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: `-${currentIndex * 100}%`,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [currentIndex]);

  return (
    <section id="features" className="w-full pt-16 pb-8 sm:pb-12 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24">
        <AnimatedSectionTitle
          firstPart="Save Time & See Results"
          highlightedPart="Fast"
          subtitle="Attract real followers and go viral—quickly and organically."
        />
        
        {/* Mobile View - Sliding Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature) => (
              <div key={feature.id} className="w-full flex-shrink-0">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  isWide={feature.isWide}
                >
                  {feature.component}
                </FeatureCard>
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Grid Layout */}
        <div 
          ref={cardsRef} 
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              isWide={feature.isWide}
            >
              {feature.component}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection as Features };
export default FeaturesSection; 