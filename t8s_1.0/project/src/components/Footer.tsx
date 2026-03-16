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
    <footer className="relative mt-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/10 to-black/30 dark:via-black/30 dark:to-black/60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-strong rounded-[2rem] p-8 sm:p-10 shadow-glass">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Techno8solutions
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md leading-relaxed">
              A complete digital partner across web, mobile, marketing, and AI automation — built with premium design and modern engineering.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <Phone className="h-5 w-5 mr-3 text-emerald-400" />
                <span>+91 77559 99537</span>
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <Mail className="h-5 w-5 mr-3 text-emerald-400" />
                <span>Techno8solutions@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-300">
                <MapPin className="h-5 w-5 mr-3 text-emerald-400" />
                <span>Serving clients worldwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Our 8 Solutions</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile App Development',
                'Digital Marketing',
                'Social Media Marketing',
                'Frontend Development',
                'Backend Development',
                'UI/UX Design',
                'AI & Automation',
              ].map((item) => (
                <li key={item}>
                  <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social media and bottom section */}
        <div className="border-t border-white/15 dark:border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                © {new Date().getFullYear()} Techno8solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
