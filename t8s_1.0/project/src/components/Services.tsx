import React from 'react';
import { Globe, Smartphone, TrendingUp, Instagram, Code, Database, Palette, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built with modern technologies. From simple landing pages to complex web applications, we create responsive, fast-loading sites that convert visitors into customers.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration", "E-commerce Ready"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We build user-friendly apps that provide seamless experiences across all devices and platforms.",
      features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Optimization", "Push Notifications"],
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive growth. From SEO and PPC to content marketing and analytics, we help you reach your target audience effectively.",
      features: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Analytics & Reporting", "Conversion Optimization"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: Instagram,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns across all major platforms. We create engaging content, manage communities, and drive meaningful interactions with your audience.",
      features: ["Content Creation", "Community Management", "Influencer Outreach", "Social Analytics", "Paid Social Ads"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      icon: Code,
      title: "Frontend Development",
      description: "Modern, interactive user interfaces built with the latest frontend technologies. We create beautiful, responsive designs that provide exceptional user experiences.",
      features: ["React/Vue/Angular", "Responsive Design", "Performance Optimization", "Modern UI/UX", "Progressive Web Apps"],
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and APIs that power your applications. We build scalable, secure backend systems that handle your business logic and data management.",
      features: ["API Development", "Database Design", "Cloud Integration", "Security Implementation", "Scalable Architecture"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      id: 7,
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality. We create intuitive interfaces and seamless user experiences that delight your customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 8,
      icon: Bot,
      title: "AI & Automation Solutions",
      description: "Cutting-edge AI solutions and automation tools that streamline your business processes. From chatbots to machine learning models, we bring intelligence to your operations.",
      features: ["Chatbot Development", "Process Automation", "Machine Learning", "AI Integration", "Data Analytics"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our 8 Core Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Complete Digital Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions that transform your business and drive growth
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              {/* Service number and icon */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-300 dark:text-gray-600">
                  0{service.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2`}></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 text-sm`}>
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Let's discuss which of our 8 solutions can help accelerate your digital growth. Our expert team is ready to bring your vision to life.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;