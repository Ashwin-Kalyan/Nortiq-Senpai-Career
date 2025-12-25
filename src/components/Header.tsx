import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBell, FiMessageCircle, FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  isLoggedIn?: boolean;
  userRole?: 'student' | 'obog' | 'company' | 'admin';
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false, userRole }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNotificationClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/notifications');
    }
  };

  const handleMessageClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/messages');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold gradient-text">Senpai Career</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          {!isLoggedIn && (
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/about" className="text-gray-700 hover:text-pink-400 transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/obog-visit" className="text-gray-700 hover:text-pink-400 transition-colors">
                {t('nav.obog')}
              </Link>
              <Link to="/internship" className="text-gray-700 hover:text-pink-400 transition-colors">
                {t('nav.internship')}
              </Link>
              <Link to="/for-companies" className="text-gray-700 hover:text-pink-400 transition-colors">
                {t('nav.forCompanies')}
              </Link>
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Icons */}
            <motion.button
              onClick={handleNotificationClick}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiBell className="text-xl text-gray-700" />
              {isLoggedIn && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </motion.button>

            <motion.button
              onClick={handleMessageClick}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMessageCircle className="text-xl text-gray-700" />
              {isLoggedIn && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
              )}
            </motion.button>

            <LanguageToggle />

            {/* Auth Buttons */}
            {!isLoggedIn ? (
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/signup/student"
                  className="px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-pink-400 text-gray-700 hover:text-pink-400 transition-all"
                >
                  {t('auth.studentSignUp')}
                </Link>
                <Link
                  to="/signup/obog"
                  className="px-4 py-2 rounded-full gradient-accent text-white hover:opacity-90 transition-opacity"
                >
                  {t('auth.obogSignUp')}
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                >
                  {t('auth.login')}
                </Link>
              </div>
            ) : (
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                Dashboard
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col gap-4">
              <Link to="/about" className="text-gray-700">{t('nav.about')}</Link>
              <Link to="/obog-visit" className="text-gray-700">{t('nav.obog')}</Link>
              <Link to="/internship" className="text-gray-700">{t('nav.internship')}</Link>
              <Link to="/for-companies" className="text-gray-700">{t('nav.forCompanies')}</Link>
              {!isLoggedIn && (
                <>
                  <Link to="/signup/student" className="text-gray-700">{t('auth.studentSignUp')}</Link>
                  <Link to="/signup/obog" className="text-gray-700">{t('auth.obogSignUp')}</Link>
                  <Link to="/login" className="text-gray-700">{t('auth.login')}</Link>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
