import  { useState } from 'react';

const QuoteCalculator = () => {
  const [serviceType, setServiceType] = useState('residential');
  const [frequency, setFrequency] = useState('weekly');
  const [location, setLocation] = useState('victoria_island');
  const [size, setSize] = useState('small');
  const [quote, setQuote] = useState<number | null>(null);
  
  const calculateQuote = () => {
    // Basic pricing logic - this would be more sophisticated in a real application
    let basePrice = serviceType === 'residential' ? 15000 : 50000; // Naira
    
    // Adjust based on frequency
    const frequencyMultiplier = {
      'weekly': 1,
      'biweekly': 0.6,
      'monthly': 0.4
    }[frequency] || 1;
    
    // Adjust based on location
    const locationMultiplier = {
      'victoria_island': 1.2,
      'lekki': 1.1,
      'ikeja': 1,
      'surulere': 0.9,
      'other': 1.05
    }[location] || 1;
    
    // Adjust based on size (for commercial only)
    let sizeMultiplier = 1;
    if (serviceType === 'commercial') {
      sizeMultiplier = {
        'small': 1,
        'medium': 2,
        'large': 3.5
      }[size] || 1;
    }
    
    const finalPrice = basePrice * frequencyMultiplier * locationMultiplier * sizeMultiplier;
    setQuote(Math.round(finalPrice));
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Quick Quote Calculator</h3>
      <p className="text-gray-600 mb-4">
        Get an estimate for our waste management services based on your needs.
      </p>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Service Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${
                serviceType === 'residential' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setServiceType('residential')}
            >
              Residential
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded-md ${
                serviceType === 'commercial' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setServiceType('commercial')}
            >
              Commercial
            </button>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Collection Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
          >
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
          >
            <option value="victoria_island">Victoria Island</option>
            <option value="lekki">Lekki</option>
            <option value="ikeja">Ikeja</option>
            <option value="surulere">Surulere</option>
            <option value="other">Other Areas</option>
          </select>
        </div>
        
        {serviceType === 'commercial' && (
          <div>
            <label className="block text-gray-700 font-medium mb-2">Business Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
            >
              <option value="small">Small (1-10 employees)</option>
              <option value="medium">Medium (11-50 employees)</option>
              <option value="large">Large (50+ employees)</option>
            </select>
          </div>
        )}
      </div>
      
      <button
        onClick={calculateQuote}
        className="btn-primary w-full"
      >
        Calculate Estimate
      </button>
      
      {quote && (
        <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-md">
          <p className="text-gray-700 mb-1">Estimated Monthly Cost:</p>
          <p className="text-2xl font-bold text-green-600">₦{quote.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-2">
            This is an estimate only. Contact us for a detailed quote tailored to your specific needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuoteCalculator;
 