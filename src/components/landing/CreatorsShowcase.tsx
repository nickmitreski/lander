import AnimatedSectionTitle from './AnimatedSectionTitle';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Add timestamp to ensure new thumbnails are loaded
const timestamp = Date.now();

const PhoneMockupsShowcase = () => {
  const videosRef = useRef<HTMLDivElement>(null);
  // Track which videos are playing
  const [playingVideos, setPlayingVideos] = useState<{[key: number]: boolean}>({});
  // Track which videos are loading
  const [loadingVideos, setLoadingVideos] = useState<{[key: number]: boolean}>({});

  // Create array with 4 testimonial videos
  const testimonials = [
    {
      id: 1,
      name: "Isabella C.",
      title: "Actress",
      location: "LA",
      video: "/Testimonial_Actress.mp4",
      thumbnail: `/Testimonial_Actress_thumb.jpg?t=${timestamp}`
    },
    {
      id: 2,
      name: "Ethan H.",
      title: "Business Owner",
      location: "Melbourne",
      video: "/Testimonial_Business_Owner.mp4",
      thumbnail: `/Testimonial_Business_Owner_thumb.jpg?t=${timestamp}`
    },
    {
      id: 3,
      name: "Valeria R.",
      title: "Influencer",
      location: "Madrid",
      video: "/Testimonial_Influencer.mp4",
      thumbnail: `/Testimonial_Influencer_thumb.jpg?t=${timestamp}`
    },
    {
      id: 4,
      name: "Adam R.",
      title: "Personal Trainer",
      location: "Dubai",
      video: "/Testimonial_Personal_Trainer.mp4",
      thumbnail: `/Testimonial_Personal_Trainer_thumb.jpg?t=${timestamp}`
    }
  ];

  // Preload videos
  useEffect(() => {
    // Create hidden video elements for preloading
    testimonials.forEach(testimonial => {
      // Method 1: Use link preload
      const preloadVideo = document.createElement('link');
      preloadVideo.rel = 'preload';
      preloadVideo.href = testimonial.video;
      preloadVideo.as = 'video';
      preloadVideo.type = 'video/mp4';
      document.head.appendChild(preloadVideo);
      
      // Method 2: Pre-fetch the first chunk of each video (more efficient)
      fetch(testimonial.video, {
        method: 'GET',
        headers: {
          Range: 'bytes=0-1000000' // Fetch first ~1MB of each video
        },
        cache: 'force-cache'
      }).catch(err => console.log('Prefetch error:', err));
    });
    
    // Initialize empty videos
    setTimeout(() => {
      testimonials.forEach(testimonial => {
        const videoEl = document.getElementById(`video-${testimonial.id}`) as HTMLVideoElement;
        if (videoEl) {
          // Prepare video element with empty source that will be replaced when playing
          videoEl.innerHTML = `<source src="data:video/mp4;base64," type="video/mp4">`;
          videoEl.load();
        }
      });
    }, 1000); // Wait a second after component mounts
  }, []);

  useEffect(() => {
    // Add animation for videos
    if (videosRef.current) {
      const videoEls = videosRef.current.querySelectorAll('.testimonial-video');
      
      // Set initial state
      gsap.set(videoEls, { y: 30, opacity: 0 });
      
      // Create timeline for smooth animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videosRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          scrub: 0.5
        }
      });

      // Add staggered animations to timeline
      tl.to(videoEls, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          amount: 0.4,
          ease: "power2.out"
        }
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Toggle video play/pause
  const toggleVideo = (id: number) => {
    // If video is already loading, don't do anything
    if (loadingVideos[id]) return;
    
    setPlayingVideos(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      
      // After state update, handle video element
      setTimeout(() => {
        const videoEl = document.getElementById(`video-${id}`) as HTMLVideoElement;
        if (videoEl) {
          if (newState[id]) {
            // Keep the thumbnail visible until video is ready to play
            const thumbnail = document.getElementById(`thumbnail-${id}`);
            
            // Set loading state
            setLoadingVideos(prev => ({ ...prev, [id]: true }));
            
            // Set video sources only when playing
            const videoSrc = testimonials.find(t => t.id === id)?.video || '';
            videoEl.innerHTML = `
              <source src="${videoSrc}" type="video/mp4" />
            `;
            videoEl.load();
            
            // Show video only when it's ready to play
            videoEl.style.visibility = 'visible';
            
            // Play the video and hide thumbnail once it's ready
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  // Video is playing, now hide the thumbnail
                  if (thumbnail) {
                    thumbnail.style.display = 'none';
                  }
                  // Reset loading state
                  setLoadingVideos(prev => ({ ...prev, [id]: false }));
                })
                .catch((error) => {
                  console.log("Video play error:", error);
                  // On error, reset the states
                  setPlayingVideos(prev => ({ ...prev, [id]: false }));
                  setLoadingVideos(prev => ({ ...prev, [id]: false }));
                });
            }
          } else {
            // Show thumbnail when pausing
            const thumbnail = document.getElementById(`thumbnail-${id}`);
            if (thumbnail) {
              thumbnail.style.display = 'block';
            }
            
            videoEl.pause();
            videoEl.currentTime = 0;
            videoEl.style.visibility = 'hidden';
            // Clear video sources when paused
            videoEl.innerHTML = '';
          }
        }
      }, 0);
      
      return newState;
    });
  };

  return (
    <section id="creators" className="py-12 sm:py-24 bg-[rgba(246,246,249,1)] relative z-10 overflow-hidden">
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
                <div className="w-full bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-40 p-4 rounded-t-lg">
                  <h3 className="text-white text-xl font-medium">{testimonial.name}</h3>
                  <p className="text-white/80 text-sm">{testimonial.title}</p>
                  <p className="text-white/60 text-xs mt-1">{testimonial.location}</p>
                </div>

                {/* Video container */}
                <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-lg relative">
                  {/* Video element */}
                  <video 
                    className="w-full h-full object-cover rounded-lg"
                    style={{ visibility: 'hidden' }}
                    loop
                    playsInline
                    id={`video-${testimonial.id}`}
                  />

                  {/* Black blocker - only show when video is not playing */}
                  <div 
                    className="absolute inset-0 bg-black z-5"
                    style={{ display: playingVideos[testimonial.id] ? 'none' : 'block' }}
                  />

                  {/* Thumbnail overlay */}
                  <img 
                    id={`thumbnail-${testimonial.id}`}
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name} thumbnail`}
                    className="absolute inset-0 w-full h-full object-cover z-20"
                    style={{ display: 'block' }}
                  />
                  
                  {/* Play button overlay */}
                  <button 
                    className="absolute inset-0 w-full h-full flex items-center justify-center z-30"
                    onClick={() => toggleVideo(testimonial.id)}
                    disabled={loadingVideos[testimonial.id]}
                  >
                    <div className={`${loadingVideos[testimonial.id] ? 'bg-white/20' : 'bg-white/30'} backdrop-blur-sm rounded-full p-5 hover:bg-white/40 transition duration-200 ${playingVideos[testimonial.id] ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                      {loadingVideos[testimonial.id] ? (
                        <svg className="w-10 h-10 text-white animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : playingVideos[testimonial.id] ? (
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