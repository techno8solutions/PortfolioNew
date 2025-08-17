import React from 'react';
import { Code, Palette, TrendingUp, Shield, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const capabilities = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "From frontend interfaces to backend logic and APIs — we build secure, scalable digital products that perform flawlessly across all platforms."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization", 
      description: "We ensure lightning-fast loading times with image optimization, lazy loading, code splitting, and advanced caching strategies."
    },
    {
      icon: Palette,
      title: "Responsive UX Design",
      description: "Pixel-perfect experiences across all devices using modern design systems, accessibility principles, and user-centered design methodologies."
    },
    {
      icon: Shield,
      title: "SEO & Technical Strategy",
      description: "Clean code, semantic structure, and best practices help improve discoverability on Google while ensuring technical excellence."
    },
    {
      icon: Users,
      title: "CMS & No-Code Integration",
      description: "WordPress, Sanity, Webflow, Shopify — we empower clients with intuitive tools to manage content and grow their business independently."
    },
    {
      icon: Award,
      title: "Reliable Support & Scaling",
      description: "Post-launch support, server scaling, proactive maintenance, and continuous optimization for sustainable long-term growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Techno8solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for complete digital transformation. We deliver 8 comprehensive solutions that cover every aspect of your digital journey — from initial concept to ongoing success.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company values */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">The Techno8solutions Promise</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              We deliver 8 world-class digital solutions under one roof, ensuring seamless integration and consistent quality across all your digital touchpoints. Your success is our mission, and we're committed to being your long-term technology partner.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">8 Solutions</div>
                <div className="text-blue-100">Complete digital coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">One Partner</div>
                <div className="text-blue-100">Unified approach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Endless Growth</div>
                <div className="text-blue-100">Future-ready solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;