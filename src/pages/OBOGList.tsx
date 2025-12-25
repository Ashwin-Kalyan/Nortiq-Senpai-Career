import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiUser, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

interface OBOG {
  id: string;
  name: string;
  type: 'working' | 'job-offer';
  university: string;
  nationality: string;
  company: string;
  topics: string[];
  message: string;
  photo?: string;
}

const OBOGList: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const obogList: OBOG[] = [
    {
      id: '1',
      name: 'Tanaka Yuki',
      type: 'working',
      university: 'Keio University',
      nationality: 'Japanese',
      company: 'Tech Corp Japan',
      topics: ['Career Advice', 'Interview Practice', 'Life Advice'],
      message: 'Happy to help international students navigate their career in Japan!',
    },
    {
      id: '2',
      name: 'Sarah Chen',
      type: 'job-offer',
      university: 'Waseda University',
      nationality: 'Chinese',
      company: 'Global Finance Inc.',
      topics: ['Career Advice', 'Resume Review'],
      message: 'Recently got a job offer! Can share my experience.',
    },
    {
      id: '3',
      name: 'John Smith',
      type: 'working',
      university: 'University of Tokyo',
      nationality: 'American',
      company: 'Startup XYZ',
      topics: ['Interview Practice', 'Networking'],
      message: 'Working in tech startup. Happy to mentor!',
    },
  ];

  const filteredList = obogList.filter(
    (obog) =>
      obog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      obog.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      obog.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">
            {t('section.obogVisit')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {language === 'ja'
              ? 'OB/OG訪問は、在日留学生が先輩とつながり、キャリアアドバイスや就活のサポートを受けることができる機能です。'
              : 'OB/OG Visit allows international students to connect with alumni for career advice and job hunting support.'}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          <div className="flex-1 relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={language === 'ja' ? '名前、大学、企業で検索...' : 'Search by name, university, company...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-white border border-gray-300 flex items-center gap-2 hover:border-pink-400 transition-colors"
          >
            <FiFilter />
            {t('common.filter')}
          </motion.button>
        </motion.div>

        {/* OB/OG Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((obog, index) => (
            <motion.div
              key={obog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/obog/${obog.id}`}>
                <div className="mac-card p-6 h-full cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <FiUser className="text-2xl text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-800 truncate">{obog.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          obog.type === 'working'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {obog.type === 'working'
                            ? (language === 'ja' ? '社会人' : 'Working Professional')
                            : (language === 'ja' ? '内定者' : 'Job Offer Holder')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                        <FiBriefcase className="text-gray-400" />
                        {obog.company}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <FiMapPin className="text-gray-400" />
                        {obog.university}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">
                      {language === 'ja' ? '国籍' : 'Nationality'}: {obog.nationality}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {obog.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 line-clamp-2">{obog.message}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OBOGList;

