import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white border-t border-slate-200 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Left Column: Brand & Statement */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
              Techno8solutions
            </h3>
            <p className="text-slate-500 font-medium max-w-sm leading-relaxed mb-8">
              A premium digital partner across web, mobile, marketing, and AI automation. Built with modern engineering and uncompromising design.
            </p>
            
            <a 
              href="mailto:Techno8solutions@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all font-semibold text-sm text-slate-900"
            >
              Start a project 
              <span className="text-slate-400 font-normal">↗</span>
            </a>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            
            {/* Column 1: Navigation */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="#/services"
                    className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
                  >
                    All Services
                  </a>
                </li>
                <li>
                  <a
                    href="#/case-studies"
                    className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Solutions</h4>
              <ul className="space-y-4">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'Digital Marketing',
                  'UI/UX Design',
                  'AI & Automation',
                ].map((item) => (
                  <li key={item}>
                    <span className="text-sm font-medium text-slate-500 cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social & Contact */}
            <div className="col-span-2 sm:col-span-1 grid grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-0">
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Connect</h4>
                <ul className="space-y-4">
                  {[
                    { label: 'Twitter', href: '#' },
                    { label: 'LinkedIn', href: '#' },
                    { label: 'Instagram', href: '#' },
                    { label: 'GitHub', href: '#' },
                  ].map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        className="group inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.label}
                        <span className="text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Direct</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+917755999537" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                      +91 77559 99537
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Techno8solutions@gmail.com" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors line-clamp-1">
                      Techno8solutions@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Massive Brand Watermark */}
      <div className="w-full overflow-hidden flex justify-center items-center select-none pointer-events-none mt-10 mb-[-5%] sm:mb-[-4%] md:mb-[-3%]">
        <span 
          className="font-bold text-slate-100 leading-none tracking-tighter"
          style={{ fontSize: '18vw' }}
        >
          TECHNO8
        </span>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} Techno8solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
