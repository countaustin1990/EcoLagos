import  { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend API
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1555465910-31f7f20a184d)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">
              Get in touch with our team to discuss your waste management needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our waste management services? Ready to start a waste collection or recycling program? Our team is here to help you find the perfect solution for your needs.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">123 Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+2349012345678" className="hover:text-green-600 transition-colors">
                        +234 901 234 5678
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@ecolagos.com" className="hover:text-green-600 transition-colors">
                        info@ecolagos.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Clock className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <QuoteCalculator />
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="p-4 bg-green-100 text-green-700 rounded-md mb-6">
                  Thank you for your message! We'll be in touch with you shortly.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="waste_collection">Waste Collection</option>
                      <option value="recycling">Recycling Programs</option>
                      <option value="environmental_consulting">Environmental Consulting</option>
                      <option value="community_programs">Community Programs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary flex items-center justify-center w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-12">Find Us</h2>
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-full w-full flex items-center justify-center">
              <p className="text-gray-600">Map of EcoLagos location (123 Victoria Island, Lagos, Nigeria)</p>
              {/* In a real implementation, this would be replaced with an actual map */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
 