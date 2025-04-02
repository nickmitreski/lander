import { useState, useRef, useEffect } from "react";
import AnimatedSectionTitle from './AnimatedSectionTitle';
import { gsap } from 'gsap';
import '../../lib/gsap-config'; // Import GSAP configuration with ScrollTrigger

export const Testimonials = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);
  const cardsContainerRef = useRef(null);

  // Define avatar images for reuse
  const avatarImages = [
    "/avatar-user-1.png",
    "/avatar-user-2.png",
    "https://originui.com/avatar-80-01.jpg",
    "https://originui.com/avatar-80-02.jpg",
    "https://originui.com/avatar-80-03.jpg",
    "https://originui.com/avatar-80-04.jpg",
    "https://originui.com/avatar-80-05.jpg",
    "https://originui.com/avatar-80-06.jpg",
    "https://originui.com/avatar-80-07.jpg",
    "https://originui.com/avatar-80-08.jpg",
    "https://originui.com/avatar-80-09.jpg",
    "https://originui.com/avatar-80-10.jpg",
    "https://originui.com/avatar-80-11.jpg",
    "https://originui.com/avatar-80-12.jpg",
    "https://originui.com/avatar-80-13.jpg",
    "https://originui.com/avatar-80-14.jpg",
    "https://originui.com/avatar-80-15.jpg",
    "https://originui.com/avatar-80-16.jpg",
    "https://originui.com/avatar-80-17.jpg",
    "https://originui.com/avatar-80-18.jpg"
  ];

  const filters = [
    "All",
    "Business",
    "Fitness",
    "Beauty & Fashion",
    "Photography",
    "Others",
  ];

  // Helper function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      }
    }
    return stars;
  };

  const testimonials = [
    // Business (6)
    {
      name: "Carlos Rodriguez",
      text: "The ROI from this service is incredible. My financial advisory business has gained credibility and we've secured high-value clients directly through Instagram. Worth every penny!",
      category: "Business",
      rating: 5
    },
    {
      name: "Jason Miller",
      text: "My business coaching clients have doubled since I started using this service. The authority that comes with a substantial following has been instrumental in growing my consultancy.",
      category: "Business",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "As a real estate agent, having a strong Instagram presence is crucial. This service helped me showcase properties to a wider audience and close deals faster than ever before.",
      category: "Business",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      text: "My e-commerce store's sales increased by 150% after growing our Instagram following. The targeted growth brought in customers who were genuinely interested in our products.",
      category: "Business",
      rating: 5
    },
    {
      name: "David Kumar",
      text: "Running a tech startup, we needed to build brand awareness quickly. This service helped us reach potential investors and customers, leading to a successful funding round.",
      category: "Business",
      rating: 4
    },
    {
      name: "Emma Wilson",
      text: "As a marketing agency owner, I was impressed by the quality of followers. They're not just numbers - they're potential clients who engage with our content and convert.",
      category: "Business",
      rating: 5
    },

    // Fitness (8)
    {
      name: "Mike Peterson",
      text: "Best investment I've made for my fitness page. The growth is organic and the followers are actually interested in my content! I've seen a 40% increase in class sign-ups directly from Instagram.",
      category: "Fitness",
      rating: 5
    },
    {
      name: "James Wilson",
      text: "My fitness challenge sign-ups have increased by 200% since using this service. What impressed me most was how targeted the growth was - these are followers who are genuinely interested in fitness.",
      category: "Fitness",
      rating: 5
    },
    {
      name: "Ryan Parker",
      text: "I was skeptical at first, but the results speak for themselves. My online fitness program enrollments are up 80%, and supplement affiliate revenue has tripled since using this service.",
      category: "Fitness",
      rating: 4
    },
    {
      name: "Alex Thompson",
      text: "As a CrossFit coach, I needed followers who would actually show up to classes. This service brought in real fitness enthusiasts who are now regular members of my gym.",
      category: "Fitness",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      text: "My yoga studio's membership grew by 60% after implementing this service. The followers we gained are genuinely interested in wellness and mindfulness.",
      category: "Fitness",
      rating: 5
    },
    {
      name: "Chris Anderson",
      text: "The targeted growth helped me build a community of runners who share their progress and motivate each other. My running app downloads increased significantly.",
      category: "Fitness",
      rating: 5
    },
    {
      name: "Rachel Kim",
      text: "As a personal trainer, I needed clients who would commit to their fitness journey. This service brought in followers who are serious about their health and fitness goals.",
      category: "Fitness",
      rating: 4
    },
    {
      name: "Tom Bradley",
      text: "My sports nutrition brand's engagement skyrocketed after using this service. The followers are active fitness enthusiasts who regularly purchase our products.",
      category: "Fitness",
      rating: 5
    },

    // Beauty & Fashion (5)
    {
      name: "Sarah Johnson",
      text: "I've been using this service for 3 months now and my engagement has grown exponentially! The followers are real and engaged. My beauty product partnerships have doubled since I started.",
      category: "Beauty & Fashion",
      rating: 5
    },
    {
      name: "Sophia Martinez",
      text: "The quality of followers I've gained is impressive. They engage with my fashion content and I've seen a substantial increase in swipe-ups and conversions for my affiliate links.",
      category: "Beauty & Fashion",
      rating: 5
    },
    {
      name: "Nadia Hassan",
      text: "Since growing my account, I've been invited to fashion week events and brand launches. My modest fashion line now has international customers who discovered me through Instagram.",
      category: "Beauty & Fashion",
      rating: 5
    },
    {
      name: "Victoria Chen",
      text: "My beauty brand's sales increased by 120% after growing our Instagram following. The followers are beauty enthusiasts who actively engage with our tutorials and product launches.",
      category: "Beauty & Fashion",
      rating: 5
    },
    {
      name: "Maya Patel",
      text: "As a fashion stylist, I needed followers who would trust my recommendations. This service helped me build a community of fashion-conscious followers who regularly book my services.",
      category: "Beauty & Fashion",
      rating: 4
    },

    // Photography (4)
    {
      name: "Emma Creative",
      text: "Amazing results for my photography business. I'm getting real inquiries from the new followers. Highly recommend! Within weeks I booked 3 wedding gigs from Instagram alone.",
      category: "Photography",
      rating: 5
    },
    {
      name: "Daniel Brown",
      text: "The authentic growth has completely transformed my photography business. I'm now booking commercial shoots with brands that found me through Instagram. Best marketing investment ever!",
      category: "Photography",
      rating: 5
    },
    {
      name: "Marcus Lee",
      text: "My portrait photography business grew by 80% after implementing this service. The followers are photography enthusiasts who appreciate my work and book sessions regularly.",
      category: "Photography",
      rating: 5
    },
    {
      name: "Sophie Anderson",
      text: "As a travel photographer, I needed followers who would value my work. This service helped me build a community of photography lovers who regularly purchase my prints.",
      category: "Photography",
      rating: 4
    },

    // Others (Food, Travel, Tech, Art, Music, Lifestyle)
    {
      name: "Alex Chen",
      text: "As a food blogger, I needed real followers who would engage with my restaurant reviews. This service delivered beyond my expectations! My posts now receive 3x more saves and shares.",
      category: "Food",
      rating: 5
    },
    {
      name: "Priya Patel",
      text: "My cooking tutorials now reach 5x more people than before. I've been approached by two cookbook publishers and a kitchenware brand for sponsorships. Life-changing for my culinary career!",
      category: "Food",
      rating: 5
    },
    {
      name: "Jessica Williams",
      text: "I've partnered with 5 travel companies since growing my account with this service. The targeted growth means I'm reaching people who actually care about travel content. Game changer!",
      category: "Travel",
      rating: 5
    },
    {
      name: "Thomas Wright",
      text: "The targeted growth helped me land partnerships with outdoor gear brands and travel companies. My adventure tours are now booking months in advance thanks to Instagram leads.",
      category: "Travel",
      rating: 4
    },
    {
      name: "David Kim",
      text: "As a tech reviewer, having a credible following is crucial. This service helped me go from 2K to 25K followers in just 4 months, and now brands are reaching out to me daily.",
      category: "Tech",
      rating: 4
    },
    {
      name: "Rebecca Lee",
      text: "As a female tech entrepreneur, building credibility online was crucial. This service helped me grow an engaged audience that's genuinely interested in my startup's journey.",
      category: "Tech",
      rating: 5
    },
    {
      name: "Olivia Taylor",
      text: "As an independent artist, I was struggling to reach new audiences. Since using this service, I've sold more prints in 2 months than all of last year combined. The ROI is incredible!",
      category: "Art",
      rating: 5
    },
    {
      name: "Aisha Johnson",
      text: "My digital art commissions have a 3-month waiting list now! The growth in genuine followers who appreciate my artistic style has completely transformed my freelance career.",
      category: "Art",
      rating: 5
    },
    {
      name: "Marco Rossi",
      text: "As an independent music producer, visibility is everything. This service helped me connect with artists looking for beats, and I've sold more licenses in the last month than ever before.",
      category: "Music",
      rating: 5
    },
    {
      name: "Lisa Chang",
      text: "My engagement rate increased from 2% to 7% within weeks of using this service. I've secured 3 long-term brand ambassador roles directly from my enhanced Instagram presence.",
      category: "Lifestyle",
      rating: 4
    }
  ];

  // Filter testimonials based on active filter
  const filteredTestimonials = filter === "All" 
    ? testimonials
    : filter === "Others"
      ? testimonials.filter(t => !["Business", "Fitness", "Beauty & Fashion", "Photography"].includes(t.category))
      : testimonials.filter(t => t.category === filter);
    
  // Get the testimonials to display based on current visibleCount
  const displayedTestimonials = filteredTestimonials.slice(0, visibleCount);
  
  // Determine if we should show the "Show more" button
  const hasMoreToShow = displayedTestimonials.length < filteredTestimonials.length;
  
  // Function to handle showing more testimonials
  const handleShowMore = () => {
    // Animate the new cards that will appear
    gsap.set(".testimonial-card:nth-child(n+" + (visibleCount + 1) + ")", {
      opacity: 0,
      y: 30
    });
    
    // Update the visible count
    setVisibleCount(prev => Math.min(prev + 6, filteredTestimonials.length));
    
    // Trigger scroll to ensure the new cards are in view
    setTimeout(() => {
      const newCards = document.querySelectorAll(".testimonial-card:nth-child(n+" + (visibleCount + 1) + ")");
      if (newCards.length > 0) {
        gsap.to(newCards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08
        });
      }
    }, 100);
  };
  
  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(9);
  }, [filter]);

  useEffect(() => {
    // Set initial state for cards
    gsap.set(".testimonial-card", {
      opacity: 0,
      y: 30
    });

    // Create animation for cards
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: "top 80%"
      }
    });

    tl.to(".testimonial-card", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.08
    });
  }, [filter]); // Re-run when filter changes

  const handleCardHover = (e, isEntering) => {
    const card = e.currentTarget;
    const image = card.querySelector('.avatar-image');
    const name = card.querySelector('.name-text');
    const text = card.querySelector('.testimonial-text');
    const stars = card.querySelectorAll('.stars-container svg');
    
    if (isEntering) {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        backgroundColor: '#fcfcff',
        duration: 0.2
      });
      
      gsap.to(image, {
        scale: 1.1,
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
        duration: 0.3
      });
      
      gsap.to(name, {
        color: 'rgba(32,140,252,1)',
        y: -2,
        duration: 0.2
      });
      
      gsap.to(text, {
        fontWeight: 500,
        duration: 0.3
      });
      
      gsap.to(stars, {
        scale: 1.2,
        stagger: 0.05,
        duration: 0.2
      });
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        backgroundColor: 'white',
        duration: 0.5
      });
      
      gsap.to(image, {
        scale: 1,
        boxShadow: 'none',
        duration: 0.3
      });
      
      gsap.to(name, {
        color: '#111827',
        y: 0,
        duration: 0.2
      });
      
      gsap.to(text, {
        fontWeight: 400,
        duration: 0.3
      });
      
      gsap.to(stars, {
        scale: 1,
        stagger: 0.05,
        duration: 0.2
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSectionTitle
          firstPart="Trusted by"
          highlightedPart="20,000+ clients"
          subtitle="Join thousands of successful Instagram creators and businesses"
        />

        <div className="flex flex-wrap gap-2 justify-center mb-12 overflow-x-auto py-2">
          {filters.map((filterName) => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === filterName
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filterName}
            </button>
          ))}
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 relative"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div className="mb-4">
                <p className="name-text font-semibold text-gray-900 transition-all duration-300">{testimonial.name}</p>
              </div>
              
              <div className="stars-container flex mb-2">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="testimonial-text text-gray-700 leading-relaxed transition-all duration-300">
                {testimonial.text}
              </p>
              
              {/* Decorative elements that appear on hover */}
              <div className="absolute w-6 h-6 border-t-2 border-l-2 border-blue-400 top-2 left-2 transition-all duration-300 opacity-0 scale-0 origin-top-left hover:opacity-100 hover:scale-100"></div>
              <div className="absolute w-6 h-6 border-b-2 border-r-2 border-blue-400 bottom-2 right-2 transition-all duration-300 opacity-0 scale-0 origin-bottom-right hover:opacity-100 hover:scale-100"></div>
            </div>
          ))}
        </div>

        {hasMoreToShow && (
          <div className="text-center mt-12">
            <button 
              onClick={handleShowMore}
              className="inline-flex items-center gap-2 bg-white shadow-lg border px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group"
            >
              Show more
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8H13M13 8L8 13M13 8L8 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
