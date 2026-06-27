import React, { useEffect, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const defaultFormData = {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  };

  const [formData, setFormData] = useState({
    ...defaultFormData
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const prefillService = sessionStorage.getItem('prefillService');
    if (!prefillService) return;
    sessionStorage.removeItem('prefillService');
    setFormData((prev) => ({ ...prev, service: prefillService }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL as string | undefined;
    if (!endpoint) {
      setSubmitError('Missing Google Sheets endpoint. Set VITE_GOOGLE_SHEETS_WEBAPP_URL in .env.local.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
      };

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setIsSubmitted(true);
      setFormData(defaultFormData);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      setSubmitError('Could not submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Split Board Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 relative overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: Typography & Info */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4">
              <div>
                <div className="inline-flex items-center rounded-full px-4 py-2 bg-white border border-slate-200 shadow-sm mb-8">
                  <span className="text-sm font-semibold text-slate-800">
                    Get in touch
                  </span>
                </div>
                
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
                  Got an idea?<br />
                  <span className="text-slate-400">Let's build it.</span>
                </h2>
                
                <p className="text-lg sm:text-xl text-slate-600 max-w-md font-medium leading-relaxed mb-12">
                  Share a few details and we’ll respond within 24 hours with next steps, timelines, and a tailored estimate.
                </p>

                <div className="space-y-4 mb-16">
                  <div className="flex items-center gap-3 text-slate-700 font-medium text-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    Free consultation call
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium text-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    Custom solution package
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 font-medium text-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    Transparent timelines & pricing
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 mt-auto">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Email</h4>
                  <a href="mailto:Techno8solutions@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    Techno8solutions@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Phone</h4>
                  <a href="tel:+917755999537" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    +91 77559 99537
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Elevated Form */}
            <div className="lg:col-span-7 w-full relative z-10">
              <form onSubmit={handleSubmit} className="bg-white shadow-2xl shadow-slate-200/50 border border-slate-100 rounded-[2rem] p-8 sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-slate-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-slate-900 mb-2">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full pl-5 pr-12 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 appearance-none focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                      >
                        <option value="">Choose a solution</option>
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
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-bold text-slate-900 mb-2">
                      Project Budget
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full pl-5 pr-12 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 appearance-none focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted || isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isSubmitted
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/10 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-6 w-6" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <span>Sending…</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>

                {submitError && (
                  <div className="mt-6 rounded-xl px-5 py-4 bg-red-50 border border-red-200 text-sm font-medium text-red-700 flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {submitError}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
