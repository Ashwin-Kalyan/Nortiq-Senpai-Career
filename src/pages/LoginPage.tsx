import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const LoginPage: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text mb-2">
            {language === 'ja' ? 'ログイン' : 'Log In'}
          </h2>
          <p className="text-gray-600">
            {language === 'ja' ? 'アカウントにログインしてください' : 'Sign in to your account'}
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mac-card p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'ja' ? 'メールアドレス' : 'Email'}
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                placeholder={language === 'ja' ? 'your@email.com' : 'your@email.com'}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'ja' ? 'パスワード' : 'Password'}
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                placeholder={language === 'ja' ? '••••••••' : '••••••••'}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg gradient-accent text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            {language === 'ja' ? 'ログイン' : 'Log In'}
            <FiArrowRight />
          </motion.button>

          <div className="text-center text-sm text-gray-600">
            {language === 'ja' ? 'アカウントをお持ちでないですか？' : "Don't have an account?"}{' '}
            <Link to="/signup/student" className="text-pink-500 hover:text-pink-600 font-medium">
              {t('auth.studentSignUp')}
            </Link>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LoginPage;

