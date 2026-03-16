import React from 'react';
import { Globe, Smartphone, TrendingUp, Instagram, Code, Database, Palette, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full px-4 py-2 glass">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Our 8 core solutions
            </span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Everything you need to grow online.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Choose a single service or combine multiple solutions into a complete digital package — designed, built, and shipped with premium polish.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group glass glass-hover rounded-3xl overflow-hidden">
              <div className="relative h-36">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <div className={`w-11 h-11 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white/80 text-sm font-semibold">
                    0{service.id}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 glass"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className={`mt-6 w-full rounded-2xl bg-gradient-to-r ${service.gradient} text-white px-4 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg`}
                >
                  Get a quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-strong rounded-[2rem] p-10 sm:p-12 shadow-glass">
            <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Ready to transform your business?
            </h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Tell us what you’re building and we’ll recommend the best mix of services — along with a clear plan, timeline, and pricing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10 transition-all duration-300"
              >
                Book a consultation
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-slate-900 dark:text-white glass glass-hover"
              >
                See recent work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
