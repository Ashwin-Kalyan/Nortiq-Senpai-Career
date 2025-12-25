import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiUser, FiEdit, FiSave, FiMail, FiUsers } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const CompanyDashboard: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'editor' | 'students' | 'inquiry'>('editor');
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState({
    name: 'Tech Corp Japan',
    overview: 'We are a leading technology company...',
    location: 'Tokyo, Japan',
    hourlyWage: '1500',
    weeklyHours: '20',
    weeklyDays: '3',
    minHours: '15',
    details: 'Long-term internship opportunity...',
    idealCandidate: 'Looking for students with programming skills...',
    sellingPoints: 'Great learning environment, flexible schedule...',
    message: 'Join us and grow your career!',
  });

  const students = [
    {
      id: '1',
      name: 'John Doe',
      university: 'Keio University',
      year: '3rd Year',
      languages: ['English', 'Japanese (N2)'],
      interests: ['Software Development', 'AI'],
      experience: 'Previous internship at Startup XYZ',
      skills: ['React', 'Python', 'JavaScript'],
    },
    {
      id: '2',
      name: 'Jane Smith',
      university: 'Waseda University',
      year: '4th Year',
      languages: ['English', 'Japanese (N1)'],
      interests: ['Data Science', 'Machine Learning'],
      experience: 'Research assistant at university',
      skills: ['Python', 'TensorFlow', 'SQL'],
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
            {language === 'ja' ? '企業ダッシュボード' : 'Company Dashboard'}
          </h1>
          <p className="text-gray-600">
            {language === 'ja' ? '企業ページを編集し、学生を探す' : 'Edit your company page and find students'}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {[
            { id: 'editor', label: language === 'ja' ? '企業ページ編集' : 'Company Page Editor', icon: FiEdit },
            { id: 'students', label: language === 'ja' ? '学生リスト' : 'Student List', icon: FiUsers },
            { id: 'inquiry', label: language === 'ja' ? 'お問い合わせ' : 'Contact / Inquiry', icon: FiMail },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600 font-semibold'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                <Icon />
                {tab.label}
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'editor' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mac-card p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {language === 'ja' ? '企業ページ編集' : 'Company Page Editor'}
              </h2>
              <motion.button
                onClick={() => setIsEditing(!isEditing)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg gradient-accent text-white flex items-center gap-2"
              >
                {isEditing ? <FiSave /> : <FiEdit />}
                {isEditing ? (language === 'ja' ? '保存' : 'Save') : (language === 'ja' ? '編集' : 'Edit')}
              </motion.button>
            </div>

            <div className="space-y-6">
              {Object.entries(companyData).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setCompanyData({ ...companyData, [key]: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-700">{value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                {language === 'ja'
                  ? '注意: 学生は学期中は週28時間、長期休暇中は週40時間まで働くことができます。'
                  : 'Note: Students can work up to 28 hours/week during term, up to 40 hours/week during long breaks.'}
              </p>
            </div>
          </motion.div>
        )}

        {activeTab === 'students' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={language === 'ja' ? '学生を検索...' : 'Search students...'}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-white border border-gray-300 flex items-center gap-2 hover:border-pink-400"
              >
                <FiFilter />
                {t('common.filter')}
              </motion.button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {students.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mac-card p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center">
                      <FiUser className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.university} • {student.year}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 mb-1">
                        {language === 'ja' ? '言語' : 'Languages'}:
                      </p>
                      <p className="text-gray-600">{student.languages.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">
                        {language === 'ja' ? 'スキル' : 'Skills'}:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">
                        {language === 'ja' ? '経験' : 'Experience'}:
                      </p>
                      <p className="text-gray-600">{student.experience}</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 py-2 rounded-lg gradient-accent text-white font-semibold"
                  >
                    {language === 'ja' ? 'スカウトを送る (¥200)' : 'Send Scout (¥200)'}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'inquiry' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mac-card p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {language === 'ja' ? 'お問い合わせ' : 'Contact / Inquiry'}
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ja' ? '件名' : 'Subject'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ja' ? 'メッセージ' : 'Message'}
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg gradient-accent text-white font-semibold"
              >
                {language === 'ja' ? '送信' : 'Submit'}
              </motion.button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CompanyDashboard;

