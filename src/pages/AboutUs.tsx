import React from 'react';
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Wrench,
  Heart,
  Target,
  TrendingUp
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'All our technicians are background-checked and certified professionals you can trust with your valuable devices.'
    },
    {
      icon: Clock,
      title: 'Speed & Efficiency',
      description: 'We value your time. Most repairs are completed within 30-60 minutes right at your location.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to ensure you have the best repair experience.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Using genuine parts and professional techniques, we provide 90-day warranty on all our repair services.'
    }
  ];

  const achievements = [
    { icon: Users, number: '10,000+', label: 'Satisfied Customers' },
    { icon: Wrench, number: '15,000+', label: 'Repairs Completed' },
    { icon: Star, number: '4.9/5', label: 'Average Rating' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate' }
  ];

  const certifications = [
    'Certified Mobile Repair Technicians',
    'Insurance Coverage for all Services',
    'ISO 9001:2015 Quality Management',
    'Local Business License & Permits',
    'Environmental Compliance Certified'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About FixMobile
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your trusted partner for professional mobile repair services. 
              We bring expertise, convenience, and reliability right to your doorstep.
            </p>
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2020, FixMobile started with a simple mission: to make mobile phone repairs 
                  convenient, reliable, and accessible to everyone. We recognized the frustration of long 
                  queues, uncertain wait times, and the inconvenience of visiting repair shops.
                </p>
                <p>
                  Our innovative doorstep service model revolutionized the mobile repair industry. 
                  By bringing certified technicians directly to our customers, we've eliminated the 
                  traditional hassles of phone repairs while maintaining the highest quality standards.
                </p>
                <p>
                  Today, we're proud to have served over 10,000 customers across major cities, 
                  completing more than 15,000 repairs with an industry-leading 98% success rate 
                  and 4.9/5 customer satisfaction rating.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 p-8 rounded-2xl text-white">
                <Target className="h-12 w-12 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-blue-100 mb-6">
                  To provide fast, reliable, and convenient mobile repair services that exceed 
                  customer expectations while building lasting trust in every interaction.
                </p>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Core Promise</h4>
                  <p className="text-blue-100">
                    "Your phone, repaired professionally, at your convenience, with complete peace of mind."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our service and define our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-300 text-lg">Numbers that reflect our dedication to excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Certified & Trusted
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to professionalism and quality is backed by proper certifications, 
                insurance coverage, and compliance with industry standards. You can trust us with 
                your valuable devices knowing we meet the highest professional criteria.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  90-Day Warranty
                </h3>
                <p className="text-gray-600 mb-6">
                  We stand behind our work with a comprehensive 90-day warranty on all repairs. 
                  If anything goes wrong, we'll fix it free of charge.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Warranty Covers:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Parts replacement if defective</li>
                    <li>• Labor for warranty repairs</li>
                    <li>• Free service calls for warranty issues</li>
                    <li>• No-questions-asked guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Choose FixMobile?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Convenience</h3>
              <p className="text-gray-600">No need to leave your home or office. We come to you.</p>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">Certified technicians using genuine parts and professional tools.</p>
            </div>
            <div className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Care</h3>
              <p className="text-gray-600">Personal service with attention to your specific needs.</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust FixMobile for their mobile repair needs. 
            Experience the convenience of professional doorstep service with the assurance of quality and reliability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;