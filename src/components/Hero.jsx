import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import heroImage from '../assets/dence10.jpeg';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 }
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Top Navigation Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full flex justify-between items-start p-8 z-50"
      >
        {/* Left Menu - Hidden on Mobile */}
        <div className="hidden md:flex flex-col space-y-4">
          <motion.a 
            href="/" 
            className="text-sm hover:text-gray-300 transition-colors"
            whileHover={{ x: 10, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="/work" 
            className="text-sm hover:text-gray-300 transition-colors"
            whileHover={{ x: 10, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Work
          </motion.a>
          <motion.a 
            href="/about" 
            className="text-sm hover:text-gray-300 transition-colors"
            whileHover={{ x: 10, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : 
            <div className="space-y-2">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          }
        </motion.button>

        {/* Center Logo */}
        <motion.div 
          className="flex items-start space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-lg font-medium leading-tight">
            MEDIA
            <br />
            DIAME
          </div>
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Plus size={16} className="mt-1" />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <div className="hidden md:flex items-start space-x-8">
          <motion.div 
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Yogyakarta
            <br />
            [ Since 2016 ]
          </motion.div>
          <motion.button 
            className="px-6 py-2 bg-white text-black text-sm hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center md:hidden"
          >
            <motion.div className="flex flex-col items-center space-y-8">
              {['Home', 'Work', 'About'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-3xl font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                className="mt-8 px-8 py-3 bg-white text-black text-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative w-full h-screen">
        {/* Hero Text */}
        <motion.div 
          className="absolute left-8 md:left-10 bottom-24 md:bottom-32 z-20 max-w-5xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-8xl xl:text-9xl font-medium leading-tight tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            CONFIDENCE
            <br />
            EZEMBA
          </motion.h1>
        </motion.div>

        {/* Hero Image with Folded Corner */}
        <motion.div 
          className="absolute right-4 md:right-8 top-32 w-[45%] md:w-[40%] h-[75vh] md:h-[70vh]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Folded Corner Effect */}
          <motion.div 
            className="absolute top-0 left-0 w-24 h-24 bg-black transform -translate-x-12 -translate-y-12 rotate-45 z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          />
          
          {/* Main Image */}
          <motion.div 
            className="w-full h-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={heroImage}
              alt="Creative visual"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Star Decoration */}
        <motion.div 
          className="absolute left-12 top-1/2 transform -translate-y-1/2"
          initial={{ opacity: 0, rotate: -180, scale: 0 }}
          animate={{ opacity: 0.3, rotate: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.5, rotate: 180 }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;