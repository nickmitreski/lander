import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef, useEffect } from 'react';
import AnimatedSectionTitle from './AnimatedSectionTitle';
import { gsap } from 'gsap';
import '../../lib/gsap-config'; // Import GSAP configuration with ScrollTrigger

const faqs = [
  {
    question: "Does this work for my industry or niche?",
    answer: "Yes! Whether you're a business, influencer, or creator, we tailor our approach to attract the most relevant audience for your specific niche."
  },
  {
    question: "Is the growth targeted?",
    answer: "Yes! We only interact with users who are already engaging with similar content in your niche. This ensures that your new followers are genuinely interested in what you post, leading to higher-quality growth and better engagement."
  },
  {
    question: "How do you grow my account?",
    answer: "We use a highly targeted follow/unfollow method to attract the right audience to your profile. By following users who engage with similar content and then unfollowing them once they've engaged with your account, we ensure that your growth is organic and relevant."
  },
  {
    question: "How fast will my followers grow?",
    answer: "Growth varies based on your niche, content quality, and engagement strategy. Most users see 1,000 to 2,000 new followers per month, while top-performing accounts can gain 10,000+ followers with consistent effort."
  },
  {
    question: "When will I start seeing results?",
    answer: "It takes 24 hours for us to connect your account and set everything up. After that, you'll start seeing interactions, with follower growth becoming more visible in the first few days. As your account continues engaging with the right audience, your reach and growth will accelerate."
  },
  {
    question: "Will my engagement (likes, comments) increase too?",
    answer: "Yes! As your profile gets more exposure to the right audience, you'll naturally see an increase in likes, comments, story views, and overall engagement."
  },
  {
    question: "Are the followers real?",
    answer: "Yes! Every follower you gain is a genuine Instagram user interested in your content—no bots, no fake accounts."
  },
  {
    question: "Is my account safe?",
    answer: "Yes! We use secure, Instagram-compliant methods to grow your account and prioritize account safety at all times. Your data is always handled with the highest level of security and confidentiality. We've earned the loyalty of over 20,000 clients by providing safe and reliable growth."
  },
  {
    question: "Do we provide support for things beyond growth?",
    answer: "Yes! Each account is assigned an account manager who is there to assist with anything Instagram-related, whether it's content advice, engagement strategies, or general platform tips."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! Each client receives a 7-day free trial, which is completely risk-free. You can cancel before the trial ends with no charges."
  },
  {
    question: "How can I cancel my subscription?",
    answer: "Simply contact us at billing@followfuse.com, and we'll assist you with the cancellation process."
  }
];

export const FAQ = () => {
  const accordionRef = useRef(null);
  
  useEffect(() => {
    // Set initial state for accordion items
    gsap.set(".faq-accordion-item", {
      opacity: 0,
      y: 20
    });
    
    // Animate accordion items when scrolled into view
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: accordionRef.current,
        start: "top 80%"
      }
    });
    
    tl.to(".faq-accordion-item", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1
    });
    
    // Add hover effects on accordion items
    const items = document.querySelectorAll('.faq-accordion-item');
    
    items.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          backgroundColor: '#f8fafc',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
          y: -3,
          duration: 0.2
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          backgroundColor: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          y: 0,
          duration: 0.2
        });
      });
    });
  }, []);
  
  return (
    <section id="faq" className="py-12 sm:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSectionTitle
          firstPart="Frequently asked"
          highlightedPart="questions"
          subtitle="Got more questions? Reach out to us for help!"
        />

        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4"
          ref={accordionRef}
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="faq-accordion-item transition-all duration-300 shadow-md rounded-lg overflow-hidden bg-white"
            >
              <AccordionTrigger className="text-left w-full text-base font-bold py-8 px-6 bg-white hover:text-blue-500 transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600 text-left text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
