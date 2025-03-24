import { useEffect } from 'react';
import  { Trash, Recycle, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1531264243361-d746dd2918a3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              Comprehensive waste management solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Waste Management Solutions</h2>
              <p className="text-gray-600 mb-4">
                At EcoLagos, we offer a wide range of waste management services designed to meet the diverse needs of residential communities, businesses, and industrial clients throughout Lagos.
              </p>
              <p className="text-gray-600 mb-4">
                Our integrated approach combines efficient collection, responsible disposal, innovative recycling, and community education to create sustainable waste management solutions.
              </p>
              <p className="text-gray-600">
                Whether you're a homeowner looking for reliable waste collection, a business seeking to improve your environmental practices, or a community organization interested in recycling initiatives, we have a solution for you.
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

      {/* Detailed Services */}
      <section id="waste-collection" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Trash className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Waste Collection Services</h2>
            <p className="text-gray-600">
              Reliable, efficient waste collection tailored to your schedule and needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Residential Collection</h3>
              <p className="text-gray-600 mb-4">
                Regular scheduled waste collection for homes, apartments, and residential communities. Choose from weekly, bi-weekly, or custom collection schedules.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Door-to-door collection</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Sorted waste collection options</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Commercial Collection</h3>
              <p className="text-gray-600 mb-4">
                Customized waste collection solutions for businesses of all sizes, from small offices to large commercial establishments.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Dedicated collection containers</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Schedule based on business needs</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Compliance with regulations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Bulk Waste Removal</h3>
              <p className="text-gray-600 mb-4">
                Specialized services for removing large volumes of waste from renovations, cleanouts, events, or special projects.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>One-time collection services</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Construction debris removal</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Event waste management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="recycling" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Recycle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Recycling Programs</h2>
            <p className="text-gray-600">
              Innovative recycling solutions to reduce landfill waste and promote circular economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Single-Stream Recycling</h3>
              <p className="text-gray-600 mb-4">
                Convenient recycling collection service where all recyclables can be placed in a single container.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Paper, plastic, metal, and glass</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Regular collection schedule</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Sorting done at our facility</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">E-Waste Collection</h3>
              <p className="text-gray-600 mb-4">
                Safe and environmentally responsible disposal of electronic waste, including computers, phones, and appliances.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Secure data destruction</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Responsible component recycling</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Collection events and drop-off</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Organic Waste Program</h3>
              <p className="text-gray-600 mb-4">
                Composting and organic waste processing to convert food waste and green waste into valuable compost.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Food waste collection</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Yard waste processing</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Compost production and distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Community Programs</h2>
            <p className="text-gray-600">
              Educational initiatives and community engagement to promote sustainable waste practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">School Education Programs</h3>
              <p className="text-gray-600 mb-4">
                Interactive workshops and educational materials for schools to teach students about waste reduction, recycling, and environmental responsibility.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Age-appropriate presentations</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Hands-on recycling activities</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>School recycling program setup</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Community Clean-Up Events</h3>
              <p className="text-gray-600 mb-4">
                Organized community clean-up initiatives to remove litter and waste from public spaces, beaches, and neighborhoods.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Event planning and coordination</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Equipment and supply provision</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Waste collection and disposal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="environmental" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Environmental Consulting</h2>
            <p className="text-gray-600">
              Expert guidance to help organizations improve their waste management practices and environmental performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Waste Audits</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive assessment of your current waste streams to identify opportunities for reduction, recycling, and cost savings.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Detailed waste composition analysis</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Identification of recyclable materials</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Cost-benefit analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Sustainability Planning</h3>
              <p className="text-gray-600 mb-4">
                Development of customized waste reduction and sustainability plans for businesses and organizations.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Goal setting and benchmarking</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Implementation strategies</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Progress tracking and reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Compliance Support</h3>
              <p className="text-gray-600 mb-4">
                Assistance with navigating waste management regulations and ensuring compliance with local and national environmental laws.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Regulatory requirement review</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Compliance assessment</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                  <span>Documentation and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1601370690183-1c7796ecec61)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your waste management needs and discover how EcoLagos can help you create a more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-green-600 hover:bg-gray-100">
              Request a Quote
            </Link>
            <a href="tel:+2349012345678" className="btn bg-green-700 text-white hover:bg-green-800">
              Call Us: +234 901 234 5678
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
 