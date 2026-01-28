import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quick: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/fadydieaa22', icon: FiGithub },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/fady-dieaa-8b4261323/', icon: FiLinkedin },
      { name: 'Email', href: 'mailto:fadydieaa2@gmail.com', icon: FiMail }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <a href="#home" className="text-3xl font-bold gradient-text mb-4 inline-block">
              Fady Dieaa
            </a>
            <p className="text-gray-400 leading-relaxed">
              Junior Full-Stack Developer specializing in MERN stack. Fresh graduate passionate about building modern web applications and learning new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-bg rounded-lg hover:bg-neon-blue/20 hover:text-neon-blue 
                           transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Open to entry-level positions, internships, and freelance projects.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Fady Dieaa. Made with <FiHeart className="inline text-neon-pink animate-pulse" /> and React
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg 
                     hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/50"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
