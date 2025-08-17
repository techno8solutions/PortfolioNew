import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');


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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Success Stories Across All 8 Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Real projects, real results. See how our 8 comprehensive solutions have helped businesses transform their digital presence and achieve remarkable growth.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
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
            <div key={project.id} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <button className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  View Project
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;