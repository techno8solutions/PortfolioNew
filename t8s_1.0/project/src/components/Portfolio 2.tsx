import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "TechCorp Solutions",
      category: "Web Development",
      tags: ["CORPORATE", "FULL-STACK", "RESPONSIVE", "CMS"],
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete corporate website with custom CMS, advanced analytics, and seamless user experience across all devices."
    },
    {
      id: 2,
      title: "ShopEasy Mobile App",
      category: "Mobile App",
      tags: ["REACT NATIVE", "E-COMMERCE", "iOS", "ANDROID"],
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Cross-platform e-commerce mobile app with seamless shopping experience and integrated payment gateway."
    },
    {
      id: 3,
      title: "GrowthHack Campaign",
      category: "Digital Marketing",
      tags: ["SEO", "PPC", "ANALYTICS", "CONVERSION"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive digital marketing campaign that increased client's online visibility by 300% and doubled conversions."
    },
    {
      id: 4,
      title: "Viral Social Campaign",
      category: "Social Media Marketing",
      tags: ["INSTAGRAM", "FACEBOOK", "CONTENT", "ENGAGEMENT"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Social media campaign that achieved 2M+ impressions and 150% follower growth across multiple platforms."
    },
    {
      id: 5,
      title: "Interactive Dashboard",
      category: "Frontend Development",
      tags: ["REACT", "DASHBOARD", "REAL-TIME", "UI/UX"],
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern React-based dashboard with real-time data visualization and intuitive user interface design."
    },
    {
      id: 6,
      title: "ScaleAPI Backend",
      category: "Backend Development",
      tags: ["NODE.JS", "API", "DATABASE", "CLOUD"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Robust backend API system handling 10K+ requests per minute with advanced security and scalability features."
    },
    {
      id: 7,
      title: "FinanceFlow UX",
      category: "UI/UX Design",
      tags: ["FIGMA", "USER RESEARCH", "PROTOTYPING", "TESTING"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete UX redesign for fintech app resulting in 40% increase in user engagement and 25% reduction in support tickets."
    },
    {
      id: 8,
      title: "SmartBot AI Assistant",
      category: "AI Solutions",
      tags: ["CHATBOT", "MACHINE LEARNING", "NLP", "AUTOMATION"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "AI-powered customer service chatbot with natural language processing, reducing response time by 80%."
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'Digital Marketing', 'Social Media Marketing', 'Frontend Development', 'Backend Development', 'UI/UX Design', 'AI Solutions'];

  const filteredProjects = selectedCategory === 'All'
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full px-4 py-2 glass">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Selected work
            </span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Case studies with premium polish.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            A snapshot of outcomes across design, development, marketing, and AI automation — built to look great and perform fast.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10'
                    : 'glass glass-hover text-slate-700 dark:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group glass glass-hover rounded-3xl overflow-hidden">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-full font-semibold glass text-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-5 line-clamp-3">
                  {project.description}
                </p>
                
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center text-blue-700 dark:text-blue-300 font-semibold hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
                >
                  Request details
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 dark:shadow-blue-400/10 transition-all duration-300"
          >
            Get a tailored proposal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
