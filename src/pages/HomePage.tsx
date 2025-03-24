import { useEffect } from 'react';
import  { ArrowRight, Recycle, Trash, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(2, 1, 1, 0.6), rgba(6, 46, 26, 0.6)), url(https://images.unsplash.com/photo-1531264243361-d746dd2918a3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sustainable Waste Management Solutions for Lagos
            </h1>
            <p className="text-xl mb-8">
              We are committed to creating a cleaner, greener Lagos through innovative waste management and recycling solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/contact" className="btn bg-transparent border border-white text-white hover:bg-green-700 hover:text-white transition-transform duration-500 hover:scale-100">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              We provide comprehensive waste management solutions tailored to the needs of both businesses and communities in Lagos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105">
              <Trash className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Waste Collection</h3>
              <p className="text-gray-600 mb-4">
                Regular and reliable waste collection services for residential areas, businesses, and industrial zones.
              </p>
              <Link to="/services#waste-collection" className="flex items-center text-green-600 font-medium hover:text-green-700">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105">
              <Recycle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Recycling Programs</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive recycling solutions that help reduce landfill waste and promote circular economy.
              </p>
              <Link to="/services#recycling" className="flex items-center text-green-600 font-medium hover:text-green-700">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Programs</h3>
              <p className="text-gray-600 mb-4">
                Educational initiatives and community engagement programs to promote sustainable waste practices.
              </p>
              <Link to="/services#community" className="flex items-center text-green-600 font-medium hover:text-green-700">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577451581377-523b0a03bb6b" 
                alt="Green roller shutter of a waste management facility" 
                className="rounded-lg shadow-lg object-cover w-full h-full max-h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Committed to a Sustainable Lagos</h2>
              <p className="text-gray-600 mb-6">
                At EcoLagos, we're more than just a waste management company. We're pioneers in environmentally responsible waste solutions, committed to preserving Lagos's natural beauty for future generations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Eco-Friendly Practices</h3>
                    <p className="text-gray-600">All our operations follow sustainable practices to minimize environmental impact.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Local Expertise</h3>
                    <p className="text-gray-600">Our team understands Lagos's unique waste management challenges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Community Impact</h3>
                    <p className="text-gray-600">We create jobs and invest in local community development.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p className="text-green-200">Homes Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-green-200">Business Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000</div>
              <p className="text-green-200">Tons Recycled</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-green-200">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600">
              Discover how our sustainable waste management solutions are making a difference across Lagos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Victoria Island Community Recycling Initiative</h3>
              <p className="text-gray-600 mb-4">
                Our flagship community project has helped reduce landfill waste by 60% in the Victoria Island area, created 25 local jobs, and established a model for sustainable waste management that's being replicated across Lagos.
              </p>
              <p className="text-gray-600 mb-6">
                Through education, infrastructure development, and community engagement, we've transformed how residents think about and handle waste.
              </p>
              <Link to="/services#community" className="btn-primary">
                Explore Our Community Programs
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1555465910-31f7f20a184d" 
                alt="Green plant symbolizing environmental growth and sustainability" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              We take pride in providing exceptional service to our clients across Lagos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-600">
              <p className="text-gray-600 mb-6">
                "EcoLagos has transformed how our business handles waste. Their recycling program has helped us reduce our environmental footprint significantly."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Adebayo Johnson</h4>
                  <p className="text-gray-500 text-sm">Business Owner, Victoria Island</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-600">
              <p className="text-gray-600 mb-6">
                "The community education program implemented by EcoLagos has made a huge difference in our neighborhood. Everyone is more conscious about waste disposal now."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Folake Adeyemi</h4>
                  <p className="text-gray-500 text-sm">Community Leader, Lekki</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-600">
              <p className="text-gray-600 mb-6">
                "Reliable, professional, and truly committed to sustainability. EcoLagos has been our waste management partner for over 5 years, and we couldn't be happier."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold">Emmanuel Okonkwo</h4>
                  <p className="text-gray-500 text-sm">Hotel Manager, Ikoyi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1612153018787-4899c6e056d7)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in our mission to create a cleaner, more sustainable Lagos. Contact us today to discuss your waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:+2349012345678" className="btn bg-white text-gray-900 hover:bg-gray-100">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
 