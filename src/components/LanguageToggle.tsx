import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { FiGlobe } from 'react-icons/fi';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiGlobe className="text-lg" />
      <AnimatePresence mode="wait">
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="font-medium text-sm"
        >
          {language === 'en' ? 'English' : '日本語'}
        </motion.span>
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 gradient-accent opacity-0 hover:opacity-10"
        whileHover={{ opacity: 0.1 }}
      />
    </motion.button>
  );
};

export default LanguageToggle;

