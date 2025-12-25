import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBell, FiBriefcase, FiInfo, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

interface Notification {
  id: string;
  type: 'internship' | 'recruiting' | 'message' | 'system';
  title: string;
  message: string;
  timestamp: string;
  link?: string;
  read: boolean;
}

const Notifications: React.FC = () => {
  const { t, language } = useLanguage();

  // Mock data
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'internship',
      title: language === 'ja' ? '新しいインターンシップ機会' : 'New Internship Opportunity',
      message: language === 'ja'
        ? 'Tech Corp Japanが新しい長期インターンシップを投稿しました'
        : 'Tech Corp Japan posted a new long-term internship',
      timestamp: '2 hours ago',
      link: '/internship',
      read: false,
    },
    {
      id: '2',
      type: 'recruiting',
      title: language === 'ja' ? '新卒採用情報が更新されました' : 'New Graduate Recruiting Updated',
      message: language === 'ja'
        ? 'Global Finance Inc.の新卒採用情報が更新されました'
        : 'Global Finance Inc. updated their new graduate recruiting info',
      timestamp: '1 day ago',
      link: '/recruiting',
      read: false,
    },
    {
      id: '3',
      type: 'message',
      title: language === 'ja' ? '新しいメッセージ' : 'New Message',
      message: language === 'ja'
        ? 'Tanaka Yukiさんからメッセージが届きました'
        : 'You received a message from Tanaka Yuki',
      timestamp: '2 days ago',
      link: '/messages',
      read: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'internship':
      case 'recruiting':
        return FiBriefcase;
      case 'message':
        return FiBell;
      default:
        return FiInfo;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'from-blue-400 to-blue-600';
      case 'recruiting':
        return 'from-purple-400 to-purple-600';
      case 'message':
        return 'from-pink-400 to-pink-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-2">
            {t('common.notifications')}
          </h1>
          <p className="text-gray-600">
            {language === 'ja' ? '最新の通知と更新を確認' : 'Check your latest notifications and updates'}
          </p>
        </motion.div>

        <div className="space-y-4">
          {notifications.map((notification, index) => {
            const Icon = getIcon(notification.type);
            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Link to={notification.link || '#'}>
                  <div className={`mac-card p-6 cursor-pointer ${!notification.read ? 'ring-2 ring-pink-400' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColor(notification.type)} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="text-xl text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{notification.title}</h3>
                          {!notification.read && (
                            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{notification.message}</p>
                        <p className="text-sm text-gray-500">{notification.timestamp}</p>
                      </div>
                      <FiArrowRight className="text-gray-400 flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {notifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FiBell className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">
              {language === 'ja' ? '通知はありません' : 'No notifications'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Notifications;

