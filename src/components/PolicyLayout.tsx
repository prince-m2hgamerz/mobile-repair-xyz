import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Shield, Home } from 'lucide-react';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-6 w-6"
    fill="currentColor"
  >
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.828.738 5.463 2.016 7.792L0 32l8.36-2.023A15.933 15.933 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.462 23.9c-.317.887-1.852 1.697-2.59 1.805-.686.103-1.532.144-2.398-.143-3.219-.891-5.272-3.16-6.827-5.227-.377-.516-.8-.532-1.386-.57-.57-.037-1.46-.17-2.221-1.08-.763-.914-1.344-2.056-1.34-3.84.004-1.784 1.37-2.824 1.858-3.202.482-.37 1.057-.462 1.41-.462.356 0 .654.008.939.008.317 0 .703-.122 1.11.91.406 1.034 1.376 3.36 1.5 3.6.123.24.207.523.037.843-.17.32-.256.518-.5.803-.246.287-.524.63-.747.854-.246.246-.5.52-.177 1.03.317.513 1.414 2.322 3.047 3.764 2.034 1.786 2.964 1.546 3.495 1.446.529-.1 1.68-.687 1.918-1.354.238-.667.238-1.238.17-1.354-.07-.118-.256-.18-.537-.318z"/>
  </svg>
);

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, subtitle, icon: Icon = Shield, children }) => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-14 md:py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition">
              <Home className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="text-blue-100 text-xs sm:text-sm">mobilerepairxyz.in</div>
          </div>

          {/* Title */}
          <div className="text-center mt-10">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Icon className="h-12 w-12 text-white" />
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-tight break-words"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <p className="text-blue-100 mt-3 text-base sm:text-lg max-w-2xl mx-auto px-2">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-blue">
          {children}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Shield className="h-12 md:h-14 w-12 md:w-14 mx-auto mb-4 text-blue-200" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Need help or wish to book a repair?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base mb-6">
            Our technician can come to your location. Most repairs are done within 30–60 minutes and include a 90-day warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 text-center"
            >
              Book Repair Now
            </Link>
            <a
              href="tel:+919891176282"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition text-center"
            >
              Call: +91 9891176282
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919891176282"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50 transition-transform transform hover:scale-110"
      >
        <WhatsAppIcon />
        <span className="hidden md:inline-block font-semibold">Chat with us</span>
      </a>
    </div>
  );
};

export default PolicyLayout;
