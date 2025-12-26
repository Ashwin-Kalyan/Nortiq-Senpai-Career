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
          <p className="text-black">
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
            className="space-y-4"
          >
            <div className="mac-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">
                {language === 'ja' ? 'クレジット取引ログ' : 'Credit Transaction Logs'}
              </h2>
              <p className="text-black mb-6">
                {language === 'ja' ? 'すべてのクレジット取引を表示' : 'View all credit transactions'}
              </p>

              {/* Summary Stats */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-black mb-1">
                    {language === 'ja' ? '総入金' : 'Total Credits'}
                  </p>
                  <p className="text-2xl font-bold text-green-600">¥85,000</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm text-black mb-1">
                    {language === 'ja' ? '総消費' : 'Total Spent'}
                  </p>
                  <p className="text-2xl font-bold text-red-600">¥12,400</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-black mb-1">
                    {language === 'ja' ? 'アクティブ企業' : 'Active Companies'}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">24</p>
                </div>
              </div>

              {/* Transaction List */}
              <div className="space-y-3">
                {[
                  {
                    id: '1',
                    company: 'Tech Corp Japan',
                    type: 'debit',
                    amount: 200,
                    description: language === 'ja' ? 'スカウトメッセージ送信' : 'Scout Message Sent',
                    student: 'John Doe',
                    timestamp: '2025-01-15 14:30',
                  },
                  {
                    id: '2',
                    company: 'Global Solutions Inc',
                    type: 'credit',
                    amount: 10000,
                    description: language === 'ja' ? 'クレジット購入' : 'Credit Purchase',
                    timestamp: '2025-01-15 10:15',
                  },
                  {
                    id: '3',
                    company: 'Tech Corp Japan',
                    type: 'debit',
                    amount: 200,
                    description: language === 'ja' ? 'スカウトメッセージ送信' : 'Scout Message Sent',
                    student: 'Jane Smith',
                    timestamp: '2025-01-14 16:45',
                  },
                  {
                    id: '4',
                    company: 'Startup XYZ',
                    type: 'debit',
                    amount: 200,
                    description: language === 'ja' ? 'スカウトメッセージ送信' : 'Scout Message Sent',
                    student: 'Tanaka Yuki',
                    timestamp: '2025-01-14 09:20',
                  },
                  {
                    id: '5',
                    company: 'Global Solutions Inc',
                    type: 'credit',
                    amount: 5000,
                    description: language === 'ja' ? 'クレジット購入' : 'Credit Purchase',
                    timestamp: '2025-01-13 11:30',
                  },
                ].map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-4 rounded-lg border-l-4 ${
                      transaction.type === 'debit' 
                        ? 'bg-red-50 border-red-500' 
                        : 'bg-green-50 border-green-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-semibold text-black">{transaction.company}</span>
                          <span className={`text-lg font-bold ${
                            transaction.type === 'debit' ? 'text-red-600' : 'text-green-600'
                          }`}>
                            {transaction.type === 'debit' ? '-' : '+'}¥{transaction.amount.toLocaleString()}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            transaction.type === 'debit'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {transaction.type === 'debit' 
                              ? (language === 'ja' ? '支払い' : 'Debit')
                              : (language === 'ja' ? '入金' : 'Credit')
                            }
                          </span>
                        </div>
                        <p className="text-black text-sm">{transaction.description}</p>
                        {transaction.student && (
                          <p className="text-sm text-gray-600 mt-1">
                            {language === 'ja' ? '学生' : 'Student'}: {transaction.student}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">{transaction.timestamp}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

