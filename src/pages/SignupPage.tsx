import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiUser, FiCheck } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const SignupPage: React.FC = () => {
  const { type } = useParams<{ type: 'student' | 'obog' | 'company' }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(language === 'ja' ? 'パスワードが一致しません' : 'Passwords do not match');
      return;
    }
    if (!formData.acceptedTerms) {
      alert(language === 'ja' ? '利用規約に同意してください' : 'Please accept the terms');
      return;
    }
    // Handle signup logic here
    navigate('/dashboard');
  };

  const userTypeLabel = type === 'student' 
    ? (language === 'ja' ? '学生' : 'Student')
    : type === 'obog'
    ? 'OB/OG'
    : language === 'ja' ? '企業' : 'Company';

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
            {language === 'ja' ? `${userTypeLabel}登録` : `${userTypeLabel} Sign Up`}
          </h2>
          <p className="text-gray-600">
            {language === 'ja' ? '新しいアカウントを作成' : 'Create a new account'}
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
              {language === 'ja' ? '名前' : 'Name'}
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                placeholder={language === 'ja' ? 'お名前' : 'Your name'}
              />
            </div>
          </div>

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
                placeholder="your@email.com"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'ja' ? 'パスワード確認' : 'Confirm Password'}
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                placeholder={language === 'ja' ? '••••••••' : '••••••••'}
              />
            </div>
          </div>

          {/* Terms and Rules */}
          <div className="mac-card p-4 bg-gray-50 max-h-60 overflow-y-auto">
            <h3 className="font-semibold mb-2">
              {language === 'ja' ? '利用規約とルール' : 'Terms of Service and Rules'}
            </h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>{language === 'ja' ? '就活・キャリア相談以外の目的での使用禁止' : 'No use outside job hunting/career consultation'}</li>
              <li>{language === 'ja' ? '個人連絡先の交換は原則禁止' : 'Exchanging personal contact info: generally prohibited'}</li>
              <li>{language === 'ja' ? '午後10時以降のオンラインミーティング禁止' : 'No online meetings after 10pm'}</li>
              <li>{language === 'ja' ? 'アルコールを伴うミーティング禁止' : 'No meetings involving alcohol'}</li>
              <li>{language === 'ja' ? '学生の無断欠席・連絡なしは2回で永久追放' : 'Student no-show/ghosting: 2 strikes → permanent ban'}</li>
            </ul>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              required
              checked={formData.acceptedTerms}
              onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
              className="mt-1 mr-3 w-5 h-5 text-pink-500 border-gray-300 rounded focus:ring-pink-400"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              {language === 'ja' 
                ? '利用規約とルールに同意します'
                : 'I agree to the Terms of Service and Rules'}
            </label>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg gradient-accent text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            {language === 'ja' ? '登録' : 'Sign Up'}
            <FiCheck />
          </motion.button>

          <div className="text-center text-sm text-gray-600">
            {language === 'ja' ? '既にアカウントをお持ちですか？' : 'Already have an account?'}{' '}
            <Link to="/login" className="text-pink-500 hover:text-pink-600 font-medium">
              {t('auth.login')}
            </Link>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default SignupPage;

