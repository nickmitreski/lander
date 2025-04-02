import { useState, useEffect } from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { gsap } from 'gsap';

const InstagramAnalysis = () => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showFeatureMessage, setShowFeatureMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoading(true);
      
      // Simulate a brief loading state
      setTimeout(() => {
        setIsLoading(false);
        setShowFeatureMessage(true);
      }, 1000);
    }
  };

  // Animation for the message
  useEffect(() => {
    if (showFeatureMessage) {
      gsap.from('.feature-message', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    }
  }, [showFeatureMessage]);

  return (
    <div className="min-h-screen bg-[rgba(246,246,249,1)]">
      <Header />
      <main className="pt-20 md:pt-32 pb-12 md:pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header content */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                Preview Your Instagram Growth
              </h1>
              <p className="text-lg md:text-xl text-gray-600 px-2">
                Enter your Instagram username to see your potential growth
              </p>
            </div>

            {/* Analysis Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8 md:mb-12 px-2">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Instagram username"
                  className="w-full flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgba(32,140,252,0.2)] focus:border-[rgba(32,140,252,1)] text-base"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[rgba(32,140,252,1)] text-white rounded-xl hover:bg-[rgba(32,140,252,0.9)] transition-colors font-medium text-base"
                  disabled={isLoading}
                >
                  {isLoading ? 'Analyzing...' : 'Analyze'}
                </button>
              </div>
            </form>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center px-4">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgba(32,140,252,1)] mb-4"></div>
                <p className="text-gray-600 text-base md:text-lg">Analyzing Instagram profile...</p>
              </div>
            )}

            {/* Feature Coming Soon Message */}
            {showFeatureMessage && !isLoading && (
              <div className="feature-message text-center bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto m-4">
                <div className="inline-block bg-[rgba(32,140,252,0.1)] text-[rgba(32,140,252,1)] uppercase tracking-wider text-xs font-bold px-3 py-1 rounded-full mb-4">
                  COMING SOON
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  This Feature is Coming Soon!
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  We're working hard to bring you detailed Instagram analytics. Stay tuned for updates!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InstagramAnalysis; 