import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events to style the header differently when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  // Handle navigation
  const handleNavigation = (destination: string) => {
    // Scroll to top of the page when navigating
    window.scrollTo(0, 0);
    
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };
  
  // Handle button click
  const handleButtonClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full flex flex-col items-center text-base transition-all duration-300 ${scrolled ? 'bg-white shadow-[1px_1px_22px_10px_rgba(14,18,59,0.05)]' : 'bg-white bg-opacity-95'} ${isMenuOpen ? 'h-auto' : ''} pt-[11px] pb-5 px-5 lg:px-[70px]`}>
      <div className="flex w-full max-w-[1478px] justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={() => handleNavigation('/')}>
            <Logo />
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-stretch gap-[39px] text-gray-600 font-medium flex-wrap mt-[9px]">
          <Link
            to="/"
            className="self-stretch px-3 py-2 rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors"
            onClick={() => {
              handleNavigation('/');
              setTimeout(() => {
                const heroSection = document.querySelector('.hero-section');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection('features')}
            className="self-stretch whitespace-nowrap px-3 py-2 rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="self-stretch whitespace-nowrap px-3 py-2 rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="self-stretch whitespace-nowrap px-3 py-2 rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="self-stretch whitespace-nowrap px-3 py-2 rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            FAQ
          </button>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex gap-[22px]">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={handleButtonClick}
          >
            Login
          </Button>
          <Button 
            variant="blue" 
            className="flex items-center gap-2"
            onClick={handleButtonClick}
          >
            Start free trial
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 5H8.5M8.5 5L5 1.5M8.5 5L5 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`w-full lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-[1000px] opacity-100 mt-4' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col w-full text-gray-600 font-medium">
          <Link
            to="/"
            className="w-full px-4 py-3 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            onClick={() => handleNavigation('/')}
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection('features')}
            className="w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            FAQ
          </button>
          
          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-2 mt-4 px-4 pb-2">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={handleButtonClick}
            >
              Login
            </Button>
            <Button 
              variant="blue" 
              className="w-full flex items-center justify-center gap-2"
              onClick={handleButtonClick}
            >
              Start free trial
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 5H8.5M8.5 5L5 1.5M8.5 5L5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
