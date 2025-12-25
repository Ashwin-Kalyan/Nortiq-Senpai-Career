import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBell, FiMessageCircle, FiMenu, FiX, FiChevronDown, FiUser, FiLogIn } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  isLoggedIn?: boolean;
  userRole?: 'student' | 'obog' | 'company' | 'admin';
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false, userRole }) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const authDropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (authDropdownRef.current && !authDropdownRef.current.contains(event.target as Node)) {
        setAuthDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-100 via-white to-blue-100 shadow-sm border-b border-gray-200">
      <div className="w-full px-2 sm:px-4">
        <div className="relative flex items-center h-20">
          {/* Logo - S block in 1.5 inch container, centered with .75 inch margins */}
          <div className="w-[144px] flex items-center justify-center flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation - moved closer to logo */}
          {!isLoggedIn && (
            <nav className="hidden md:flex items-center gap-1.5 ml-2 flex-1">
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Link 
                  to="/about" 
                  className={`relative px-3 py-1.5 rounded-[9999px] text-sm font-medium whitespace-nowrap transition-all ${
                    isActive('/about') 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {isActive('/about') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-blue-500/80 rounded-[9999px] backdrop-blur-sm"
                      style={{
                        boxShadow: '0 0 30px 8px rgba(236, 72, 153, 0.2), 0 0 50px 12px rgba(236, 72, 153, 0.12), 0 0 70px 15px rgba(59, 130, 246, 0.08)'
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t('nav.about')}</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Link 
                  to="/ob-visit" 
                  className={`relative px-3 py-1.5 rounded-[9999px] text-sm font-medium whitespace-nowrap transition-all ${
                    isActive('/ob-visit') 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {isActive('/ob-visit') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-blue-500/80 rounded-[9999px] backdrop-blur-sm"
                      style={{
                        boxShadow: '0 0 30px 8px rgba(236, 72, 153, 0.2), 0 0 50px 12px rgba(236, 72, 153, 0.12), 0 0 70px 15px rgba(59, 130, 246, 0.08)'
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t('nav.obog')}</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Link 
                  to="/internship" 
                  className={`relative px-3 py-1.5 rounded-[9999px] text-sm font-medium whitespace-nowrap transition-all ${
                    isActive('/internship') 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {isActive('/internship') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-blue-500/80 rounded-[9999px] backdrop-blur-sm"
                      style={{
                        boxShadow: '0 0 30px 8px rgba(236, 72, 153, 0.2), 0 0 50px 12px rgba(236, 72, 153, 0.12), 0 0 70px 15px rgba(59, 130, 246, 0.08)'
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t('nav.internship')}</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Link 
                  to="/for-companies" 
                  className={`relative px-3 py-1.5 rounded-[9999px] text-sm font-medium whitespace-nowrap transition-all ${
                    isActive('/for-companies') 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {isActive('/for-companies') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-blue-500/80 rounded-[9999px] backdrop-blur-sm"
                      style={{
                        boxShadow: '0 0 30px 8px rgba(236, 72, 153, 0.2), 0 0 50px 12px rgba(236, 72, 153, 0.12), 0 0 70px 15px rgba(59, 130, 246, 0.08)'
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t('nav.forCompanies')}</span>
                </Link>
              </motion.div>
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
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

            {/* Auth Dropdown Button */}
            {!isLoggedIn ? (
              <div className="hidden md:block relative" ref={authDropdownRef}>
                <motion.button
                  onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-[9999px] bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: authDropdownOpen 
                      ? '0 0 30px 8px rgba(236, 72, 153, 0.25), 0 0 50px 12px rgba(59, 130, 246, 0.15)'
                      : '0 0 0 0 rgba(236, 72, 153, 0)'
                  }}
                >
                  <FiUser className="text-lg" />
                  <span className="font-medium text-sm">
                    {language === 'ja' ? 'サインアップ' : 'Sign Up'}
                  </span>
                  <motion.div
                    animate={{ rotate: authDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown className="text-sm" />
                  </motion.div>
                  <span className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-50 blur-md transition-opacity" style={{ zIndex: -1 }}></span>
                </motion.button>

                <AnimatePresence>
                  {authDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                    >
                      <Link
                        to="/signup/student"
                        onClick={() => setAuthDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-pink-50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center flex-shrink-0">
                          <FiUser className="text-white text-lg" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover:text-red-600 whitespace-nowrap">
                          {t('auth.studentSignUp')}
                        </span>
                      </Link>
                      <Link
                        to="/signup/obog"
                        onClick={() => setAuthDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 flex items-center justify-center flex-shrink-0">
                          <FiUser className="text-white text-lg" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover:text-purple-600 whitespace-nowrap">
                          {t('auth.obogSignUp')}
                        </span>
                      </Link>
                      <div className="border-t border-gray-200"></div>
                      <Link
                        to="/login"
                        onClick={() => setAuthDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                          <FiLogIn className="text-white text-lg" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 whitespace-nowrap">
                          {t('auth.login')}
                        </span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/dashboard"
                  className="relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all overflow-hidden bg-white border-2 border-transparent hover:border-blue-500"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-white rounded-full"></span>
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </Link>
              </motion.div>
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
