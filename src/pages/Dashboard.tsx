import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiMessageCircle, FiBell, FiUser, FiBriefcase } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard: React.FC = () => {
  const { t, language } = useLanguage();

  const quickActions = [
    {
      icon: FiUsers,
      title: language === 'ja' ? 'OB/OGを探す' : 'Find OB/OG',
      description: language === 'ja' ? '先輩とつながる' : 'Connect with alumni',
      link: '/obog-visit',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: FiMessageCircle,
      title: language === 'ja' ? 'メッセージ' : 'Messages',
      description: language === 'ja' ? '会話を確認' : 'View conversations',
      link: '/messages',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FiBriefcase,
      title: language === 'ja' ? 'インターンシップ' : 'Internships',
      description: language === 'ja' ? '機会を探す' : 'Find opportunities',
      link: '/internship',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: FiBell,
      title: language === 'ja' ? '通知' : 'Notifications',
      description: language === 'ja' ? '最新情報を確認' : 'Check updates',
      link: '/notifications',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-2">
            {language === 'ja' ? 'ダッシュボード' : 'Dashboard'}
          </h1>
          <p className="text-gray-600">
            {language === 'ja' ? 'ようこそ、Senpai Careerへ' : 'Welcome to Senpai Career'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={action.link}>
                <div className="mac-card p-6 cursor-pointer h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-4`}>
                    <action.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mac-card p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {language === 'ja' ? '最近の活動' : 'Recent Activity'}
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                  <FiUser className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">
                    {language === 'ja' ? '新しいメッセージがあります' : 'New message received'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'ja' ? '2時間前' : '2 hours ago'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

