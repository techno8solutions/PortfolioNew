import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our 8 comprehensive solutions or let us create a custom package for your unique needs. Get a free consultation and project quote today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Connect With Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">We're Online</h4>
                    <p className="text-blue-100">Serving clients worldwide from our digital workspace</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-blue-100">+91 77559 99537</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-100">Techno8solutions@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">What You Get:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-blue-100">Free Consultation Call</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-blue-100">Custom Solution Package</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-blue-100">Detailed Project Roadmap</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-blue-100">Transparent Pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Choose from our 8 solutions</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="ai-solutions">AI & Automation Solutions</option>
                    <option value="consultation">Consultation</option>
                    <option value="multiple">Multiple Solutions</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;