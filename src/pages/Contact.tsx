import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Headphones } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our support team',
      details: '+919891176282',
      action: 'tel:+919891176282',
      available: '24/7 Support Available'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick support via WhatsApp',
      details: '+91 9891176282',
      action: 'https://wa.me/9891176282',
      available: 'Instant Response'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your queries anytime',
      details: 'info@mobilerepairxyz.in',
      action: 'mailto:info@mobilerepairxyz.in',
      available: 'Response within 2 hours'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Emergency Service', hours: 'Available 24/7' }
  ];

  const serviceAreas = [
    'Downtown & City Center',
    'Suburban Areas',
    'Business Districts',
    'Residential Neighborhoods',
    'University Campus Areas',
    'Shopping Centers'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Headphones className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Need help? Have questions? Our friendly support team is here to assist you 
            with all your mobile repair needs.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600">
              Choose the most convenient way to get in touch with our support team
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <method.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {method.description}
                </p>
                <div className="text-center">
                  <a
                    href={method.action}
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 block mb-2"
                  >
                    {method.details}
                  </a>
                  <p className="text-sm text-green-600 font-medium">
                    {method.available}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={method.action}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 block text-center"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Business Information
              </h2>
              
              {/* Business Hours */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Service Areas</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">We provide doorstep repair services across:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-blue-600 mt-4 font-medium">
                    Don't see your area? Call us - we're expanding our coverage!
                  </p>
                </div>
              </div>

              {/* Response Times */}
              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Response Times</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Phone Calls</span>
                    <span className="text-green-600 font-semibold">Immediate</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">WhatsApp Messages</span>
                    <span className="text-green-600 font-semibold">Within 5 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-700">Email Inquiries</span>
                    <span className="text-blue-600 font-semibold">Within 2 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Location
              </h2>
              <div className="bg-gray-200 rounded-xl overflow-hidden" style={{ height: '500px' }}>
                {/* Google Maps Embed - Replace with actual Google Maps embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.709839985344!2d77.24871677559061!3d28.54843997571076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30073f13c0b%3A0x42e4507a3133ce2e!2smobile_repair_xyz!5e0!3m2!1sen!2sin!4v1755703298024!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mobile Repair XYZ"
                ></iframe>
              </div>
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Service Coverage</h4>
                <p className="text-gray-600">
                  We provide doorstep mobile repair services across the metropolitan area. 
                  Our technicians can reach most locations within 30-45 minutes of your booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly can you reach my location?
              </h3>
              <p className="text-gray-600">
                Most locations within our service area can be reached within 30-45 minutes of booking. 
                We'll provide you with an accurate time estimate when you call.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you charge for diagnosis?
              </h3>
              <p className="text-gray-600">
                No, diagnosis is completely free. We'll assess your device and provide transparent 
                pricing before starting any repair work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept cash, all major credit cards, digital payments (Apple Pay, Google Pay), 
                and online transfers for your convenience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if you can't fix my phone?
              </h3>
              <p className="text-gray-600">
                If we determine that your device cannot be repaired cost-effectively, 
                we'll provide honest advice and won't charge you anything for the assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Phone className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Your Phone Fixed?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait - get professional doorstep mobile repair service today. 
            Our technicians are standing by to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919891176282"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: +91 9891176282
            </a>
            <a
              href="https://wa.me/9891176282"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;