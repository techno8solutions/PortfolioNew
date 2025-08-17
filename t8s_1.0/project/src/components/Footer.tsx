import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Techno8solutions
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your complete digital partner offering 8 comprehensive solutions. From websites to AI automation, we deliver end-to-end digital transformation that drives real business results.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+91 77559 99537</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>Techno8solutions@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>Serving clients worldwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our 8 Solutions</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Web Development</span></li>
              <li><span className="text-gray-300">Mobile App Development</span></li>
              <li><span className="text-gray-300">Digital Marketing</span></li>
              <li><span className="text-gray-300">Social Media Marketing</span></li>
              <li><span className="text-gray-300">Frontend Development</span></li>
              <li><span className="text-gray-300">Backend Development</span></li>
              <li><span className="text-gray-300">UI/UX Design</span></li>
              <li><span className="text-gray-300">AI & Automation</span></li>
              <li><span className="text-gray-300">Digital Marketing</span></li>
            </ul>
          </div>
        </div>

        {/* Social media and bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Techno8solutions. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2 font-light">
                Thank you for scrolling ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent opacity-50 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;