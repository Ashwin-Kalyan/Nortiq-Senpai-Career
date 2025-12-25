import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiMessageCircle, FiBriefcase, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const OBVisitLP: React.FC = () => {
  const { t, language } = useLanguage();
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            >
              {language === 'ja' ? 'OB訪問とは' : 'What is OB/OG Visit'}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed"
            >
              {language === 'ja'
                ? '内定者及び社会人にキャリア相談、就活について、社風を聞くなど自由に自身の就活に役立つ使い方ができるシステム！'
                : 'A system where you can freely use it to help with your job hunting, such as career consultation with job-offer holders and working professionals, learning about job hunting, and understanding company culture!'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is OB Visit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-accent flex items-center justify-center">
              <FiUsers className="text-4xl text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              {language === 'ja' ? 'OB訪問とは' : 'What is OB/OG Visit'}
            </h2>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
              {language === 'ja'
                ? 'OB/OG訪問は、在日留学生が先輩（内定者や社会人）とつながり、キャリアアドバイスや就活のサポートを受けることができる機能です。実際に働いている先輩や、就活を経験したばかりの内定者から、リアルな情報やアドバイスを得ることができます。'
                : 'OB/OG Visit is a feature that allows international students in Japan to connect with alumni (job-offer holders and working professionals) to receive career advice and job hunting support. You can get real information and advice from seniors who are actually working or recent job-offer holders who have just experienced job hunting.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Types */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text text-center">
              {language === 'ja' ? '内定者及び社会人のプロフィール欄' : 'Job-Offer Holders & Working Professionals'}
            </h2>
            <p className="text-xl text-black text-center max-w-3xl mx-auto mb-12">
              {language === 'ja'
                ? '2種類の先輩プロフィールから、あなたに合った相談相手を見つけることができます'
                : 'Find the right person to consult with from two types of senior profiles'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              animate={hoveredBox === 0 ? {
                scale: 1.05,
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 1200,
                  damping: 20
                }
              } : {
                scale: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 1500,
                  damping: 25
                }
              }}
              className="mac-card p-8 relative group cursor-pointer"
              style={{
                boxShadow: hoveredBox === 0 ? '0 0 20px 4px rgba(34, 197, 94, 0.08), 0 0 40px 8px rgba(34, 197, 94, 0.05), 0 0 60px 12px rgba(34, 197, 94, 0.03), 0 0 80px 16px rgba(34, 197, 94, 0.02)' : '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={() => setHoveredBox(0)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <FiCheckCircle className="text-3xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {language === 'ja' ? '内定者' : 'Job-Offer Holders'}
              </h3>
              <p className="text-gray-900 dark:text-gray-300 mb-4">
                {language === 'ja'
                  ? '最近就活を経験したばかりの内定者から、最新の就活情報や面接対策、選考プロセスについて学べます。'
                  : 'Learn from recent job-offer holders who have just experienced job hunting about the latest job hunting information, interview strategies, and selection processes.'}
              </p>
              <ul className="space-y-2 text-gray-800 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {language === 'ja' ? '最新の就活情報' : 'Latest job hunting information'}
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {language === 'ja' ? '面接対策とアドバイス' : 'Interview strategies and advice'}
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {language === 'ja' ? '選考プロセスの体験談' : 'Selection process experiences'}
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              animate={hoveredBox === 1 ? {
                scale: 1.05,
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 1200,
                  damping: 20
                }
              } : {
                scale: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 1500,
                  damping: 25
                }
              }}
              className="mac-card p-8 relative group cursor-pointer"
              style={{
                boxShadow: hoveredBox === 1 ? '0 0 20px 4px rgba(59, 130, 246, 0.08), 0 0 40px 8px rgba(59, 130, 246, 0.05), 0 0 60px 12px rgba(59, 130, 246, 0.03), 0 0 80px 16px rgba(59, 130, 246, 0.02)' : '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={() => setHoveredBox(1)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FiBriefcase className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {language === 'ja' ? '社会人' : 'Working Professionals'}
              </h3>
              <p className="text-gray-900 dark:text-gray-300 mb-4">
                {language === 'ja'
                  ? '実際に働いている社会人の先輩から、キャリアパス、職場環境、業界の実態について学べます。'
                  : 'Learn from working professionals about career paths, workplace environments, and industry realities.'}
              </p>
              <ul className="space-y-2 text-gray-800 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  {language === 'ja' ? 'キャリアパスの相談' : 'Career path consultation'}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  {language === 'ja' ? '職場環境と社風' : 'Workplace environment and company culture'}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  {language === 'ja' ? '業界の実態とアドバイス' : 'Industry realities and advice'}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              {language === 'ja' ? '活用例' : 'Use Cases'}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {language === 'ja'
                ? 'OB訪問を活用して、あなたの就活をサポートします'
                : 'Use OB/OG Visit to support your job hunting'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FiMessageCircle,
                title: language === 'ja' ? 'キャリア相談' : 'Career Consultation',
                description: language === 'ja'
                  ? '自分のキャリアパスや将来の方向性について、先輩からアドバイスをもらえます。'
                  : 'Get advice from seniors about your career path and future direction.',
                color: 'from-pink-400 to-pink-600',
              },
              {
                icon: FiBriefcase,
                title: language === 'ja' ? '就活戦略' : 'Job Hunting Strategy',
                description: language === 'ja'
                  ? '効果的な就活の進め方や、面接対策、エントリーシートの書き方などを学べます。'
                  : 'Learn effective job hunting strategies, interview preparation, and how to write entry sheets.',
                color: 'from-blue-400 to-blue-600',
              },
              {
                icon: FiUsers,
                title: language === 'ja' ? '社風を聞く' : 'Learn Company Culture',
                description: language === 'ja'
                  ? '実際に働いている先輩から、会社の雰囲気や社風、働き方について詳しく聞けます。'
                  : 'Learn in detail about the company atmosphere, culture, and work style from seniors who actually work there.',
                color: 'from-purple-400 to-purple-600',
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                animate={hoveredBox === index + 2 ? {
                  scale: 1.05,
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 1200,
                    damping: 20
                  }
                } : {
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 1500,
                    damping: 25
                  }
                }}
                className="mac-card p-8 text-center relative group cursor-pointer"
                style={{
                  boxShadow: hoveredBox === index + 2 ? (() => {
                    const colors = [
                      { inner: 'rgba(236, 72, 153, 0.08)', mid1: 'rgba(236, 72, 153, 0.05)', mid2: 'rgba(236, 72, 153, 0.03)', outer: 'rgba(59, 130, 246, 0.02)' },
                      { inner: 'rgba(59, 130, 246, 0.08)', mid1: 'rgba(59, 130, 246, 0.05)', mid2: 'rgba(59, 130, 246, 0.03)', outer: 'rgba(59, 130, 246, 0.02)' },
                      { inner: 'rgba(168, 85, 247, 0.08)', mid1: 'rgba(168, 85, 247, 0.05)', mid2: 'rgba(168, 85, 247, 0.03)', outer: 'rgba(168, 85, 247, 0.02)' }
                    ];
                    const color = colors[index] || colors[0];
                    return `0 0 20px 4px ${color.inner}, 0 0 40px 8px ${color.mid1}, 0 0 60px 12px ${color.mid2}, 0 0 80px 16px ${color.outer}`;
                  })() : '0 2px 8px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={() => setHoveredBox(index + 2)}
                onMouseLeave={() => setHoveredBox(null)}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${useCase.color} flex items-center justify-center`}>
                  <useCase.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{useCase.title}</h3>
                <p className="text-gray-900 dark:text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              {language === 'ja' ? '使い方' : 'How It Works'}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: language === 'ja' ? 'プロフィールを探す' : 'Find Profiles',
                description: language === 'ja'
                  ? '内定者や社会人のプロフィールを閲覧し、相談したい先輩を見つけます。'
                  : 'Browse profiles of job-offer holders and working professionals to find the senior you want to consult with.',
              },
              {
                step: '2',
                title: language === 'ja' ? 'メッセージを送る' : 'Send a Message',
                description: language === 'ja'
                  ? '気になる先輩にメッセージを送り、相談内容を伝えます。'
                  : 'Send a message to the senior you\'re interested in and explain what you\'d like to consult about.',
              },
              {
                step: '3',
                title: language === 'ja' ? '相談・ミーティング' : 'Consultation & Meeting',
                description: language === 'ja'
                  ? '先輩と相談し、必要に応じてオンラインミーティングや対面でのミーティングを設定します。'
                  : 'Consult with the senior and, if necessary, schedule an online or in-person meeting.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 mb-8 mac-card p-6"
              >
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black">{step.title}</h3>
                  <p className="text-black">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            {language === 'ja'
              ? 'OB訪問を始めましょう'
              : 'Start Your OB/OG Visit'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            {language === 'ja'
              ? '先輩のプロフィールを閲覧して、あなたの就活をサポートしてもらいましょう'
              : 'Browse senior profiles and get support for your job hunting'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/signup/student"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              {language === 'ja' ? '学生として登録' : 'Sign Up as Student'}
              <FiArrowRight />
            </Link>
            <Link
              to="/obog-visit"
              className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-2 border-2 border-white/50"
            >
              {language === 'ja' ? 'プロフィールを閲覧' : 'Browse Profiles'}
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OBVisitLP;

