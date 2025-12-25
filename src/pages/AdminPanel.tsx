import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiUserX, FiCheckCircle, FiEye, FiXCircle } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

interface Report {
  id: string;
  reportedUser: string;
  reporter: string;
  reason: string;
  description: string;
  timestamp: string;
  status: 'pending' | 'reviewed' | 'resolved';
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  strikes: number;
  banned: boolean;
}

const AdminPanel: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'reports' | 'users' | 'transactions'>('reports');

  // Mock data
  const reports: Report[] = [
    {
      id: '1',
      reportedUser: 'John Doe',
      reporter: 'Tanaka Yuki',
      reason: language === 'ja' ? '不適切な行動' : 'Inappropriate behavior',
      description: language === 'ja' ? '詳細な説明...' : 'Detailed description...',
      timestamp: '2 days ago',
      status: 'pending',
    },
    {
      id: '2',
      reportedUser: 'Jane Smith',
      reporter: 'Sarah Chen',
      reason: language === 'ja' ? '無断欠席' : 'No-show',
      description: language === 'ja' ? '約束したミーティングに現れなかった' : 'Did not show up to scheduled meeting',
      timestamp: '5 days ago',
      status: 'reviewed',
    },
  ];

  const users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'student',
      strikes: 1,
      banned: false,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'student',
      strikes: 2,
      banned: true,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-2">
            {language === 'ja' ? '管理者パネル' : 'Admin Panel'}
          </h1>
          <p className="text-gray-600">
            {language === 'ja' ? 'レポート、ユーザー、取引を管理' : 'Manage reports, users, and transactions'}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {[
            { id: 'reports', label: language === 'ja' ? 'レポート' : 'Reports' },
            { id: 'users', label: language === 'ja' ? 'ユーザー管理' : 'User Management' },
            { id: 'transactions', label: language === 'ja' ? '取引ログ' : 'Transaction Logs' },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-pink-500 text-pink-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'reports' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {reports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mac-card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <FiAlertTriangle className="text-red-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{report.reason}</h3>
                      <p className="text-sm text-gray-600">
                        {language === 'ja' ? '報告者' : 'Reporter'}: {report.reporter} • {language === 'ja' ? '報告対象' : 'Reported'}: {report.reportedUser}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    report.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : report.status === 'reviewed'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{report.description}</p>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 flex items-center gap-2"
                  >
                    <FiEye />
                    {language === 'ja' ? '詳細を見る' : 'View Details'}
                  </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-red-100 text-red-700 flex items-center gap-2"
                    >
                      <FiXCircle />
                      {language === 'ja' ? 'ストライク追加' : 'Add Strike'}
                    </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {users.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mac-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                      <FiUserX className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.email} • {user.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-600">{user.strikes}</p>
                      <p className="text-xs text-gray-600">
                        {language === 'ja' ? 'ストライク' : 'Strikes'}
                      </p>
                    </div>
                    {user.banned ? (
                      <span className="px-4 py-2 rounded-lg bg-red-100 text-red-700 font-medium">
                        {language === 'ja' ? 'BAN済み' : 'BANNED'}
                      </span>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-red-100 text-red-700 flex items-center gap-2"
                      >
                        <FiXCircle />
                        {language === 'ja' ? 'BAN' : 'Ban'}
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'transactions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mac-card p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {language === 'ja' ? '取引ログ' : 'Transaction Logs'}
            </h2>
            <p className="text-gray-600">
              {language === 'ja' ? 'クレジット取引のログを表示' : 'View credit transaction logs'}
            </p>
            {/* Transaction logs would go here */}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

