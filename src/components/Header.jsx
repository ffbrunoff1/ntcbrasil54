import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753905663801_0.png"
              alt="NTC Brasil"
              className="h-12"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-800 hover:text-primary'
                    : 'text-gray-800 hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
            >
              <div className="flex flex-col py-4">
                {menuItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-gray-800 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
