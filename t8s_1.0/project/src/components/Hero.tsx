import React from 'react';
import { ArrowRight, CheckCircle, Zap, Target, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 dark:bg-emerald-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Elevate Your</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your Complete Digital Partner - From Web Development to AI Solutions, We Deliver Excellence Across 8 Core Services
          </p>

          {/* Key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
            {[
              { icon: Globe, text: "8 Comprehensive Digital Solutions Under One Roof" },
              { icon: Target, text: "End-to-End Development from Frontend to Backend" },
              { icon: Zap, text: "Modern Technologies with Future-Ready Approach" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-left">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "8", label: "Core Solutions" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "150+", label: "Projects Delivered" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;