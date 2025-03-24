import { useEffect } from 'react';
import  { CheckCircle, Award, Clock, Users } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1601370690183-1c7796ecec61)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EcoLagos</h1>
            <p className="text-xl">
              Leading the way in sustainable waste management for a cleaner, greener Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                EcoLagos was founded in 2013 with a simple mission: to transform waste management in Lagos and create sustainable solutions that benefit both the environment and the community.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small recycling initiative has grown into one of Lagos's leading waste management companies, serving thousands of homes and hundreds of businesses across the city.
              </p>
              <p className="text-gray-600">
                Our journey has been driven by a commitment to innovation, environmental responsibility, and community engagement. As Lagos continues to grow, we're proud to be part of the solution to its waste management challenges.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577451581377-523b0a03bb6b" 
                alt="Green roller shutter of a waste management facility" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide innovative and sustainable waste management solutions that protect the environment, enhance public health, and create value for our communities and stakeholders.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <span>Reduce landfill waste through effective recycling and recovery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <span>Promote environmental education and awareness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <span>Support the transition to a circular economy</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the leading provider of sustainable waste management solutions in West Africa, known for our innovation, reliability, and positive impact on the environment and communities we serve.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <span>A cleaner, healthier Lagos for all residents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <span>Zero waste communities across Nigeria</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
                  <span>Sustainable resource management that benefits future generations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do at EcoLagos, from daily operations to long-term planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from customer service to operational efficiency.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                Our customers count on us for consistent, dependable service that meets their needs.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We're committed to making a positive impact in the communities we serve.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental sustainability is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sustainability Approach</h2>
            <p className="text-gray-600">
              At EcoLagos, sustainability isn't just a buzzword—it's integrated into every aspect of our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1555465910-31f7f20a184d" 
                alt="Green plant symbolizing environmental growth and sustainability" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Carbon Footprint Reduction</h3>
                  <p className="text-gray-600">
                    Our fleet utilizes fuel-efficient vehicles and optimized route planning to minimize emissions, while our facilities operate on renewable energy where possible.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Zero Waste Goal</h3>
                  <p className="text-gray-600">
                    We're working toward a goal of zero waste to landfill by maximizing recycling, composting, and resource recovery from collected materials.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Circular Economy</h3>
                  <p className="text-gray-600">
                    We collaborate with local manufacturers to create markets for recycled materials, completing the loop and creating a true circular economy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Water Conservation</h3>
                  <p className="text-gray-600">
                    Our facilities implement rainwater harvesting and water recycling systems to minimize freshwater consumption in our operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the dedicated professionals leading EcoLagos towards a more sustainable future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1659422440807-8c6d65bf1878" 
                alt="Oluwaseun Adeyemi" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Oluwaseun Adeyemi</h3>
                <p className="text-green-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years in environmental management, Oluwaseun founded EcoLagos with a vision to transform waste management in Lagos.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1659422441756-087534cc6b0b" 
                alt="Chioma Nwosu" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Chioma Nwosu</h3>
                <p className="text-green-600 mb-4">Operations Director</p>
                <p className="text-gray-600">
                  Chioma oversees all operational aspects of EcoLagos, ensuring efficient and effective service delivery across the city.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1515344905723-babc01aac23d" 
                alt="Emeka Okafor" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Emeka Okafor</h3>
                <p className="text-green-600 mb-4">Sustainability Manager</p>
                <p className="text-gray-600">
                  Emeka leads our sustainability initiatives, developing innovative approaches to waste reduction and resource recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
 