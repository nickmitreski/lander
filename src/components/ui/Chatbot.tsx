import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../../types';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: 'Hey there! I can help you grow your Instagram. What questions do you have about our services?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorLog, setErrorLog] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the messages when new ones are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setErrorLog(null); // Clear error log when toggling
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: ChatMessage = { role: 'user', content: input };
    
    // Add user message
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setErrorLog(null); // Clear previous errors
    
    try {
      console.log('Sending request to /api/chat');
      
      // Send request to our Express server API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        let errorMessage = `API request failed with status ${response.status}`;
        try {
          const errorData = await response.json();
          console.error('Error data:', errorData);
          errorMessage += ` - ${JSON.stringify(errorData)}`;
        } catch (e) {
          console.error('Could not parse error response as JSON');
        }
        setErrorLog(errorMessage);
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Response data:', data);
      
      // Add assistant response
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.message 
      }]);
    } catch (error) {
      console.error('Error processing chat request:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I had trouble connecting. Please try again.' 
      }]);
      
      if (error instanceof Error) {
        setErrorLog(`Error: ${error.message}`);
      } else {
        setErrorLog('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={handleToggle}
        className="bg-[rgba(32,140,252,1)] hover:bg-[rgba(32,140,252,0.9)] text-white p-3 rounded-full shadow-lg flex items-center justify-center w-14 h-14 transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-[rgba(32,140,252,1)] text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-medium">Instagram Boost Assistant</h3>
            <button onClick={handleToggle} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Error Display (only shown if there's an error) */}
          {errorLog && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 text-xs">
              <p className="font-bold">Connection Error</p>
              <p className="truncate">{errorLog}</p>
            </div>
          )}
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 ${message.role === 'user' ? 'text-right' : ''}`}
              >
                <div 
                  className={`inline-block px-4 py-2 rounded-xl ${
                    message.role === 'user' 
                      ? 'bg-[rgba(32,140,252,1)] text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mb-3">
                <div className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-xl rounded-bl-none">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-[rgba(32,140,252,0.5)] rounded-full animate-bounce mr-1"></span>
                    <span className="w-2 h-2 bg-[rgba(32,140,252,0.7)] rounded-full animate-bounce delay-75 mr-1"></span>
                    <span className="w-2 h-2 bg-[rgba(32,140,252,1)] rounded-full animate-bounce delay-150"></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[rgba(32,140,252,1)] font-medium"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-[rgba(32,140,252,1)] hover:bg-[rgba(32,140,252,0.9)] text-white px-4 py-2 rounded-r-md transition-colors"
              disabled={isLoading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 