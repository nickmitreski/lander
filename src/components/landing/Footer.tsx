import Logo from "@/components/ui/Logo";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Logo and Copyright - Left Side */}
          <div className="md:col-span-6">
            <Logo className="h-7 sm:h-8 mb-3 sm:mb-4" />
            <p className="text-gray-700 text-sm">
              © 2025 FollowFuse. All rights reserved.
            </p>
          </div>

          {/* Legal and Contact - Right Side */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {/* Legal Section */}
              <div>
                <h3 className="text-gray-900 font-bold uppercase text-sm mb-4">
                  LEGAL
                </h3>
                <div className="flex flex-col gap-2">
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
              
              {/* Contact Us Section */}
              <div>
                <h3 className="text-gray-900 font-bold uppercase text-sm mb-4">
                  CONTACT US
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Questions or feedback? We'd love to hear from you.
                </p>
                <a 
                  href="mailto:support@followfuse.com" 
                  className="text-blue-600 hover:underline text-sm"
                >
                  support@followfuse.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
