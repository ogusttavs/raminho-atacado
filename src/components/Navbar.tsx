import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active section
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Atacado', href: '#wholesale' },
    { name: 'Produtos', href: '#products' },
    { name: 'Varejo', href: '#retail' },
    { name: 'Parceiros', href: '#partners' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" aria-label="Ir para a página inicial" className="block">
              <img
                src="/Logo.png"
                alt="Raminho Importadora"
                width="160"
                height="64"
                className={`w-auto transition-all duration-500 ${scrolled ? 'h-12' : 'h-16'}`}
                style={!scrolled ? { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' } : undefined}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <div className={`flex items-center space-x-1 px-2 py-1.5 rounded-full transition-colors ${scrolled ? 'bg-gray-100/50' : 'bg-white/10 backdrop-blur-sm border border-white/10'}`}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${scrolled
                      ? isActive
                        ? 'text-primary bg-white shadow-sm'
                        : 'text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm'
                      : isActive
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/20'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className={`ml-4 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group ${scrolled
                ? 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg'
                : 'bg-white text-primary hover:bg-white/90 shadow-lg'
                }`}
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Menu de navegação"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${isActive
                      ? 'text-primary bg-primary/5 font-bold'
                      : 'text-gray-900 hover:text-primary hover:bg-gray-50'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="mt-6 px-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
