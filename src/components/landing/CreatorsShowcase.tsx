import AnimatedSectionTitle from './AnimatedSectionTitle';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const PhoneMockupsShowcase = () => {
  const videosRef = useRef<HTMLDivElement>(null);
  // Track which videos are playing
  const [playingVideos, setPlayingVideos] = useState<{[key: number]: boolean}>({});

  // Create array with 4 testimonial videos
  const testimonials = [
    {
      id: 1,
      name: "Isabella C.",
      title: "Actress",
      location: "LA",
      video: "/Testimonial_Actress.mp4"
    },
    {
      id: 2,
      name: "Ethan H.",
      title: "Business Owner",
      location: "Melbourne",
      video: "/Testimonial_Business_Owner.mp4"
    },
    {
      id: 3,
      name: "Valeria R.",
      title: "Influencer",
      location: "Madrid",
      video: "/Testimonial_Influencer.mp4"
    },
    {
      id: 4,
      name: "Adam R.",
      title: "Personal Trainer",
      location: "Dubai",
      video: "/Testimonial_Personal_Trainer.mp4"
    }
  ];

  useEffect(() => {
    // Add animation for videos
    if (videosRef.current) {
      const videoEls = videosRef.current.querySelectorAll('.testimonial-video');
      
      gsap.fromTo(
        videoEls,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videosRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  // Toggle video play/pause
  const toggleVideo = (id: number, videoEl: HTMLVideoElement) => {
    if (playingVideos[id]) {
      videoEl.pause();
      setPlayingVideos(prev => ({...prev, [id]: false}));
    } else {
      videoEl.play();
      setPlayingVideos(prev => ({...prev, [id]: true}));
    }
  };

  return (
    <section id="creators" className="py-24 bg-[rgba(246,246,249,1)] relative z-10 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4">
        <AnimatedSectionTitle
          firstPart="Trusted by Creators and Businesses"
          highlightedPart="Worldwide"
          subtitle="A growth platform trusted by users across the globe to elevate Instagram accounts."
        />
        
        <div className="mt-16 relative">
          {/* Fade edges on mobile scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[rgba(246,246,249,1)] to-transparent z-10 md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[rgba(246,246,249,1)] to-transparent z-10 md:hidden"></div>
          
          <div 
            ref={videosRef} 
            className="flex flex-row justify-start md:justify-center gap-4 overflow-x-auto pb-8 px-4 md:px-0 md:flex-wrap scrollbar-none"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style 
              dangerouslySetInnerHTML={{
                __html: `
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `
              }}
            />
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="testimonial-video transform transition duration-300 hover:-translate-y-1 relative flex-shrink-0 w-[280px] md:w-[260px] lg:w-[270px]"
              >
                {/* Text overlay at top */}
                <div className="w-full bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10 p-4 rounded-t-lg">
                  <h3 className="text-white text-xl font-medium">{testimonial.name}</h3>
                  <p className="text-white/80 text-sm">{testimonial.title}</p>
                  <p className="text-white/60 text-xs mt-1">{testimonial.location}</p>
                </div>

                {/* Video container */}
                <div className="aspect-[9/16] bg-[#111] rounded-lg overflow-hidden shadow-lg">
                  {/* Video content */}
                  <video 
                    className="w-full h-full object-cover rounded-lg"
                    loop
                    playsInline
                    id={`video-${testimonial.id}`}
                  >
                    <source src={testimonial.video} type="video/quicktime" />
                    <source src={testimonial.video.replace('.mov', '.mp4')} type="video/mp4" />
                    <div className="w-full h-full flex items-center justify-center text-white text-center p-4">
                      Your browser does not support the video format. Please try using Safari or convert the video to MP4 format.
                    </div>
                  </video>
                  
                  {/* Play button overlay */}
                  <button 
                    className={`absolute inset-0 w-full h-full flex items-center justify-center z-20 transition-opacity ${playingVideos[testimonial.id] ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                    onClick={(e) => {
                      const videoEl = document.getElementById(`video-${testimonial.id}`) as HTMLVideoElement;
                      if (videoEl) {
                        toggleVideo(testimonial.id, videoEl);
                      }
                    }}
                  >
                    <div className="bg-white/30 backdrop-blur-sm rounded-full p-5 hover:bg-white/40 transition duration-200">
                      {playingVideos[testimonial.id] ? (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneMockupsShowcase; 