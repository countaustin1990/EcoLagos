import  { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hello! I'm the EcoLagos virtual assistant. How can I help you with your waste management and recycling needs today?" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Add user message
    const newUserMessage = { role: 'user' as const, content: userMessage };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // In a real implementation, this would call the OpenAI API through the proxy
      // Simulating API call delay and response
      setTimeout(() => {
        let responseContent = '';
        
        // Simple response logic based on user input
        const input = userMessage.toLowerCase();
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

  return {
    messages,
    isLoading,
    sendMessage
  };
};
 