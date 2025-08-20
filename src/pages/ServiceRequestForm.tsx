import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle, Phone, User, MapPin, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../pages/SupabaseClients'; // ✅ Add this import
import { Calendar } from 'lucide-react';

// Types
interface FormData {
  customerName: string;
  mobileNumber: string;
  phoneModel: string;
  issueDescription: string;
  address: string;
  preferredTimeSlot: string;
  repairDate: string;
}

interface FormErrors {
  customerName?: string;
  mobileNumber?: string;
  phoneModel?: string;
  issueDescription?: string;
  address?: string;
  preferredTimeSlot?: string;
  repairDate?: string;
}

const ServiceRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    mobileNumber: '',
    phoneModel: '',
    issueDescription: '',
    address: '',
    repairDate: '',   // ✅ New field
    preferredTimeSlot: ''
    
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Fetch current user (only if user is logged in using Supabase auth)
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };
    fetchUser();
  }, []);

  const timeSlots = [
    '9:00 AM - 11:00 AM', '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM', '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM', '7:00 PM - 9:00 PM'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required';
    if (!formData.phoneModel.trim()) newErrors.phoneModel = 'Phone model is required';
    if (!formData.issueDescription.trim()) newErrors.issueDescription = 'Issue description is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.preferredTimeSlot) newErrors.preferredTimeSlot = 'Preferred time slot is required';
    if (!formData.repairDate) {
      newErrors.repairDate = 'Please select a date';
    }    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {

      // const { data, error } = await supabase
      //   .from('repair_requests')
      //   .insert({
      //     user_id: user?.id || null,         // user_id if logged in
      //     mobileNumber: formData.mobileNumber,
      //     customerName: formData.customerName,
      //     model: formData.phoneModel,       // your DB column may be 'model'
      //     issueDescription: formData.issueDescription,
      //     address: formData.address,
      //     preferredTimeSlot: formData.preferredTimeSlot
      //   });

      const { data, error } = await supabase
  .from('repair_requests')
  .insert({
    user_id: user?.id || null,
    customername: formData.customerName,
    mobilenumber: formData.mobileNumber,
    model: formData.phoneModel,
    issueDescription: formData.issueDescription,     // after column created
    preferredTimeSlot: formData.preferredTimeSlot,   // after column created
    address: formData.address
  });

      if (error) {
        console.error('Supabase insert error:', error);
        alert('Submission failed');
        setIsSubmitting(false);
        return;
      }

      console.log('Inserted:', data);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you, <strong>{formData.customerName}</strong>! We've received your repair request.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Our team will call you within 15 minutes to confirm details</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>A certified technician will arrive at your preferred time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Quick diagnosis and transparent pricing before repair</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Fast repair with 90-day warranty</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Back to Home
              </Link>
              <a
                href="tel:+1234567890"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Call Us: +1 (234) 567-8900
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Book Mobile Repair Service
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below and our technician will come to your location
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Name */}
            <div>
              <label htmlFor="customerName" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                Customer Name *
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.customerName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.customerName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.customerName}
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                Mobile Number *
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.mobileNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Enter your mobile number"
              />
              {errors.mobileNumber && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            {/* Phone Model */}
            <div>
              <label htmlFor="phoneModel" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Model & Issue Description *
              </label>
              <input
                type="text"
                id="phoneModel"
                name="phoneModel"
                value={formData.phoneModel}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.phoneModel ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="e.g., iPhone 14 Pro, Samsung Galaxy S23"
              />
              {errors.phoneModel && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.phoneModel}
                </p>
              )}
            </div>

            {/* Issue Description */}
            <div>
              <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Describe the Issue *
              </label>
              <textarea
                id="issueDescription"
                name="issueDescription"
                rows={4}
                value={formData.issueDescription}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.issueDescription ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Describe what's wrong with your phone (e.g., cracked screen, won't charge, water damage)"
              />
              {errors.issueDescription && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.issueDescription}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                Complete Address *
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.address ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Enter your complete address including street, city, and ZIP code"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.address}
                </p>
              )}
            </div>


            {/* Repair Date */}
<div>
  <label htmlFor="repairDate" className="flex items-center text-sm font-medium text-gray-700 mb-2">
    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
    Repair Date *
  </label>
  <input
    type="date"
    id="repairDate"
    name="repairDate"
    value={formData.repairDate}
    onChange={handleInputChange}
    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
      errors.repairDate ? 'border-red-300 bg-red-50' : 'border-gray-300'
    }`}
  />
  {errors.repairDate && (
    <p className="mt-1 text-sm text-red-600 flex items-center">
      <AlertCircle className="h-4 w-4 mr-1" />
      {errors.repairDate}
    </p>
  )}
</div>



            {/* Preferred Time Slot */}
            <div>
              <label htmlFor="preferredTimeSlot" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                Preferred Time Slot *
              </label>
              <select
                id="preferredTimeSlot"
                name="preferredTimeSlot"
                value={formData.preferredTimeSlot}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.preferredTimeSlot ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.preferredTimeSlot && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.preferredTimeSlot}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Book Repair Service'
                )}
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">What to expect:</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Our technician will call you within 15 minutes to confirm</li>
                <li>• Free diagnosis and transparent pricing before any repair</li>
                <li>• Most repairs completed in 30-60 minutes</li>
                <li>• 90-day warranty on all repairs</li>
                <li>• Genuine parts and professional service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestForm;