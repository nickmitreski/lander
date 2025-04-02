import { useState, useEffect } from 'react';

interface RecentSignupProps {
  // Optional prop to control if the component should appear
  active?: boolean;
}

const locations = [
  'Maryland',
  'California',
  'Texas',
  'New York',
  'Florida',
  'Washington',
  'Illinois',
  'Massachusetts',
  'Arizona',
  'Colorado',
  'Oregon',
  'Georgia',
  'Pennsylvania'
];

const names = [
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Charlotte',
  'James',
  'Amelia',
  'Benjamin',
  'Sophia',
  'Michael',
  'Isabella',
  'Jacob',
  'Mia',
  'Ethan',
  'Harper',
  'Daniel',
  'Evelyn',
  'Logan',
  'Abigail',
  'Matthew',
  'Clarissa',
  'John',
  'Elizabeth',
  'David',
  'Sofia'
];

export const RecentSignup = ({ active = true }: RecentSignupProps) => {
  const [visible, setVisible] = useState(false);
  const [signup, setSignup] = useState({
    name: 'Clarissa',
    location: 'Maryland',
    time: '20 minutes ago',
    plan: 'Basic Plan'
  });

  useEffect(() => {
    if (!active) return;
    
    // Initial delay before first appearance
    const initialTimeout = setTimeout(() => {
      generateRandomSignup();
      setVisible(true);
      
      // Auto-hide after 4 seconds
      const hideTimeout = setTimeout(() => {
        setVisible(false);
      }, 4000);
      
      return () => clearTimeout(hideTimeout);
    }, 3000);
    
    // Set up interval to show notifications periodically
    const interval = setInterval(() => {
      generateRandomSignup();
      setVisible(true);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    }, 15000); // Show a new one every 15 seconds
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [active]);
  
  const generateRandomSignup = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomMinutes = Math.floor(Math.random() * 55) + 5; // 5 to 60 minutes
    
    setSignup({
      name: randomName,
      location: randomLocation,
      time: `${randomMinutes} minutes ago`,
      plan: 'Basic Plan'
    });
  };
  
  if (!visible) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 opacity-100 translate-y-0 animate-slideIn">
      <div className="flex items-start p-4">
        <div className="flex-shrink-0 mr-3">
          <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" />
            </svg>
          </div>
        </div>
        <div className="ml-2">
          <p className="text-sm font-semibold text-gray-900">{signup.name} from {signup.location}</p>
          <p className="text-xs text-gray-600">
            just signed up for Follow Fuse {signup.plan}
          </p>
          <p className="text-xs text-gray-500 mt-1">{signup.time}</p>
        </div>
        <button 
          onClick={() => setVisible(false)}
          className="ml-auto text-gray-400 hover:text-gray-500"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RecentSignup; 