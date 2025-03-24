import  { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize, Maximize } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hello! I'm the EcoLagos virtual assistant. How can I help you with your waste management and recycling needs today?" 
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    const userMessage = { role: 'user' as const, content: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      // In a real implementation, this would call the OpenAI API through the proxy
      // Simulating API call delay
      setTimeout(() => {
        let responseContent = '';
        
        // Simple response logic based on user input
        const input = userInput.toLowerCase();
        if (input.includes('quote') || input.includes('cost') || input.includes('price')) {
          responseContent = 'I can help you get a quote for our services. To provide an accurate quote, I need to know a few details:\n\n1. Are you inquiring for residential or commercial service?\n2. What type of waste management services are you looking for? (Collection, recycling, etc.)\n3. What\'s your location in Lagos?\n\nYou can provide these details or call us directly at +234 901 234 5678 for an immediate quote.';
        } else if (input.includes('recycling')) {
          responseContent = 'Our recycling programs include single-stream recycling, e-waste collection, and organic waste processing. We provide specialized containers and regular collection schedules tailored to your needs. Would you like more specific information about any of these recycling services?';
        } else if (input.includes('schedule') || input.includes('pickup')) {
          responseContent = 'EcoLagos offers flexible collection schedules. For residential services, we provide weekly or bi-weekly options. For commercial clients, we can customize the schedule based on your specific requirements. Would you like to set up a collection schedule?';
        } else if (input.includes('contact') || input.includes('reach')) {
          responseContent = 'You can contact EcoLagos in several ways:\n\n- Phone: +234 901 234 5678\n- Email: info@ecolagos.com\n- Visit: 123 Victoria Island, Lagos, Nigeria\n\nOur customer service team is available Monday-Friday from 8:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM.';
        } else {
          responseContent = 'Thank you for your message. At EcoLagos, we provide comprehensive waste management solutions including waste collection, recycling programs, environmental consulting, and community education initiatives. How can we specifically assist you with your waste management needs?';
        }
        
        setMessages(prev => [...prev, { role: 'assistant', content: responseContent }]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error. Please try again or contact us directly at info@ecolagos.com.' 
      }]);
      setIsLoading(false);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Button */}
      {!isOpen && (
        <button 
          onClick={toggleChatbot}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chatbot Interface */}
      {isOpen && (
        <div 
          className={`bg-white rounded-lg shadow-xl transition-all duration-300 flex flex-col ${
            isMinimized ? 'h-14 w-72' : 'h-96 w-80 sm:w-96'
          }`}
        >
          {/* Chatbot Header */}
          <div className="bg-green-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              <h3 className="font-medium">EcoLagos Assistant</h3>
            </div>
            <div className="flex items-center">
              <button 
                onClick={toggleMinimize}
                className="text-white hover:text-green-200 mr-2"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize size={18} /> : <Minimize size={18} />}
              </button>
              <button 
                onClick={toggleChatbot}
                className="text-white hover:text-green-200"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chatbot Messages */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-3/4 rounded-lg p-3 ${
                      message.role === 'user' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Chatbot Input */}
          {!isMinimized && (
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-green-200 focus:border-green-500 transition-colors p-2 outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white rounded-r-md px-3 flex items-center justify-center disabled:opacity-50"
                disabled={isLoading || !userInput.trim()}
              >
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
 