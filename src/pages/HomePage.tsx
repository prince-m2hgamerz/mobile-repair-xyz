import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Home, 
  Users, 
  Clock, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Wrench,
  Truck
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Home,
      title: 'Doorstep Delivery',
      description: 'We come to your location - no need to visit a repair shop. Convenient service at your home or office.'
    },
    {
      icon: Users,
      title: 'Trusted Technicians',
      description: 'Certified professionals with years of experience. Background-checked and highly rated technicians.'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Quick diagnosis and repair. Most issues fixed within 30-60 minutes on the spot.'
    }
  ];

  const brands = [
    {
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    {
      name: 'Samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
    },
    {
      name: 'Xiaomi',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg'
    },
    {
      name: 'OnePlus',
      logo: 'https://logos-world.net/wp-content/uploads/2023/03/OnePlus-Logo.png'
    },
    {
      name: 'Oppo',
      logo: 'https://pluspng.com/img-png/oppo-logo-png-img-oppo-logo-in-svg-vector-or-png-file-format-logo-wine-3000x2000.png'
    },
    {
      name: 'Vivo',
      logo: 'https://logos-world.net/wp-content/uploads/2023/03/Vivo-Logo.jpg'
    },
    {
      name: 'Realme',
      logo: 'https://c.realme.com/in/img/logo.a7643831.png'
    },
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
    },
    {
      name: 'Motorola',
      logo: 'https://www.pngmart.com/files/22/Motorola-Logo-PNG-Isolated-HD.png'
    },
    {
      name: 'Huawei',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png'
    }
  ];
  
  
  

  const services = [
    'Screen Replacement',
    'Battery Replacement', 
    'Charging Port Repair',
    'Water Damage Repair',
    'Software Issues',
    'Speaker & Mic Repair'
  ];

  const stats = [
    { number: '10,000+', label: 'Repairs Completed' },
    { number: '4.9/5', label: 'Customer Rating' },
    { number: '30 Min', label: 'Average Repair Time' },
    { number: '90 Days', label: 'Warranty Period' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Smartphone className="h-16 w-16 text-white" />
              </div>
            </div>
            <motion.h1
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="text-4xl md:text-6xl font-bold mb-4 text-center leading-tight"
>
  Fast Mobile Repair
  <span className="block text-blue-200">At Your Doorstep</span>
</motion.h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional technicians come to you. No queues, no waiting. 
              Get your phone fixed in 30-60 minutes with 90-day warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Book Repair Now
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Get Quick Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the convenience of professional mobile repair services delivered right to your location
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
      Supported Brands
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {brands.map((brand, index) => (
        <div key={index} className="border p-6 rounded-xl flex flex-col items-center shadow hover:shadow-lg transition">
          <img src={brand.logo} alt={brand.name} className="h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
          {/* <ul className="text-gray-600 text-sm text-center space-y-1">
            {brand.models.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Mobile Repair Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From cracked screens to water damage, our expert technicians handle all types of mobile phone issues with precision and care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/request"
                className="inline-flex items-center mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Book Service Now
                <Wrench className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
                <div className="flex items-center mb-6">
                  <Truck className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">How It Works</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <p>Book online or call us with your device details</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <p>Our technician arrives at your preferred time</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <p>Quick diagnosis and transparent pricing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <p>Fast repair with 90-day warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-gray-300 text-lg">Numbers that speak for our quality and reliability</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your Phone?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust us with their mobile devices. 
            Fast, reliable, and guaranteed repairs at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Book Repair Service
            </Link>
            <a
              href="tel:+919891176282"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Call Now: +91 9891176282
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;