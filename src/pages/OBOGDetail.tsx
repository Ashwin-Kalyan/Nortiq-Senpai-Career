import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiUser, FiBriefcase, FiMapPin, FiGlobe, FiSend } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const OBOGDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  // Mock data - in real app, fetch by id
  const obog = {
    id: '1',
    name: 'Tanaka Yuki',
    type: 'working' as const,
    university: 'Keio University',
    nationality: 'Japanese',
    company: 'Tech Corp Japan',
    languages: ['Japanese', 'English'],
    topics: ['Career Advice', 'Interview Practice', 'Life Advice', 'Resume Review'],
    message: 'Happy to help international students navigate their career in Japan!',
    studentEra: 'I was an international student myself, so I understand the challenges you face.',
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending
      navigate('/messages');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <FiArrowLeft />
          {language === 'ja' ? '戻る' : 'Back'}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mac-card p-8 mb-6"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
              <FiUser className="text-4xl text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-800">{obog.name}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  obog.type === 'working'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {obog.type === 'working'
                    ? (language === 'ja' ? '社会人' : 'Working Professional')
                    : (language === 'ja' ? '内定者' : 'Job Offer Holder')}
                </span>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <FiBriefcase className="text-gray-400" />
                  {obog.company}
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin className="text-gray-400" />
                  {obog.university}
                </p>
                <p className="flex items-center gap-2">
                  <FiGlobe className="text-gray-400" />
                  {language === 'ja' ? '国籍' : 'Nationality'}: {obog.nationality}
                </p>
                <p className="flex items-center gap-2">
                  <FiGlobe className="text-gray-400" />
                  {language === 'ja' ? '言語' : 'Languages'}: {obog.languages.join(', ')}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {language === 'ja' ? '対応可能なトピック' : 'Topics Supported'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {obog.topics.map((topic, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {language === 'ja' ? 'メッセージ' : 'Message'}
            </h2>
            <p className="text-gray-700">{obog.message}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {language === 'ja' ? '学生時代の経験' : 'Student Era Summary'}
            </h2>
            <p className="text-gray-700">{obog.studentEra}</p>
          </div>
        </motion.div>

        {/* Message Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mac-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            {language === 'ja' ? 'メッセージを送る' : 'Send a Message'}
          </h3>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={language === 'ja' ? 'メッセージを入力...' : 'Type your message...'}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent mb-4 min-h-[120px] resize-none"
          />
          <motion.button
            onClick={handleSendMessage}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg gradient-accent text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            {t('btn.sendMessage')}
            <FiSend />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OBOGDetail;

