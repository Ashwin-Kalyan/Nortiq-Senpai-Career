import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs: React.FC = () => {
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
              {language === 'ja' 
                ? 'Senpai Career - About Us'
                : 'Senpai Career - About Us'}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-4 text-black"
            >
              {language === 'ja'
                ? '留学生の就活に、フェアなスタートラインを'
                : 'Give international students a fair start line for job hunting'}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
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
              <FiTarget className="text-4xl text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              {language === 'ja' ? '私たちのミッション' : 'Our Mission'}
            </h2>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
              {language === 'ja'
                ? 'Senpai Careerは、在日留学生が公平なスタートラインから就活を始められる環境を提供します。私たちは、低リスクで始められ、段階的にキャリアを築いていけるプラットフォームを目指しています。'
                : 'Senpai Career provides international students in Japan with a fair starting line for job hunting. We aim to create a platform that enables a low-risk, step-by-step approach to building careers.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text text-center">
              {language === 'ja' ? '解決する課題' : 'Problems We Solve'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
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
                className="mac-card p-8 group cursor-pointer"
                style={{
                  boxShadow: hoveredBox === 0 
                    ? '0 0 20px 4px rgba(236, 72, 153, 0.08), 0 0 40px 8px rgba(236, 72, 153, 0.05), 0 0 60px 12px rgba(236, 72, 153, 0.03), 0 0 80px 16px rgba(59, 130, 246, 0.02)'
                    : '0 2px 8px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={() => {
                  setHoveredBox(0);
                }}
                onMouseLeave={() => {
                  setHoveredBox(null);
                }}
              >
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <FiUsers className="text-3xl text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'ja' ? '留学生の課題' : 'Challenges for International Students'}
                </h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    {language === 'ja'
                      ? '就活の情報やノウハウへのアクセスが限られている'
                      : 'Limited access to job hunting information and know-how'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    {language === 'ja'
                      ? '不安や不確実性が高い'
                      : 'High levels of uncertainty and anxiety'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    {language === 'ja'
                      ? '公平なスタートラインがない'
                      : 'Lack of a fair starting line'}
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                className="mac-card p-8 group cursor-pointer"
                style={{
                  boxShadow: hoveredBox === 1
                    ? '0 0 20px 4px rgba(59, 130, 246, 0.08), 0 0 40px 8px rgba(59, 130, 246, 0.05), 0 0 60px 12px rgba(59, 130, 246, 0.03), 0 0 80px 16px rgba(59, 130, 246, 0.02)'
                    : '0 2px 8px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={() => {
                  setHoveredBox(1);
                }}
                onMouseLeave={() => {
                  setHoveredBox(null);
                }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FiTrendingUp className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'ja' ? '採用の課題' : 'Hiring Challenges'}
                </h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {language === 'ja'
                      ? '労働力不足と限られた採用チャネル'
                      : 'Labor shortage and limited hiring channels'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {language === 'ja'
                      ? '国際人材へのアクセス不足'
                      : 'Lack of access to international talent'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {language === 'ja'
                      ? 'ミスマッチのリスク'
                      : 'Risk of mismatch between candidates and companies'}
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
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
              {language === 'ja' ? 'プラットフォームの概要' : 'Platform Overview'}
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto mb-12">
              {language === 'ja'
                ? '段階的なアプローチで、留学生のキャリア形成をサポートします'
                : 'We support international students\' career development through a step-by-step approach'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: language === 'ja' ? 'OB/OG訪問' : 'OB/OG Visit',
                description: language === 'ja'
                  ? '先輩とのメンタリングと相談から始めましょう。キャリアアドバイス、就活戦略、社風について学べます。'
                  : 'Start with mentoring and consultation from alumni. Learn about career advice, job hunting strategies, and company culture.',
                color: 'from-pink-400 to-pink-600',
              },
              {
                step: '2',
                title: language === 'ja' ? '長期インターンシップ' : 'Long-term Internship',
                description: language === 'ja'
                  ? '実際の仕事を通じて適性を確認できます。低リスクで始められる「試してみる」エントリーポイントです。'
                  : 'Confirm your fit through real work experience. A low-risk "try-first" entry point.',
                color: 'from-blue-400 to-blue-600',
              },
              {
                step: '3',
                title: language === 'ja' ? '新卒採用・スカウト' : 'New Grad Recruiting & Scouting',
                description: language === 'ja'
                  ? '企業が学生を検索し、有料スカウトDMを送信できます。適性が確認された後の本採用への道です。'
                  : 'Companies can search students and send paid scout DMs. The path to full-time employment after fit confirmation.',
                color: 'from-purple-400 to-purple-600',
              },
            ].map((item, index) => (
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
                onMouseEnter={() => {
                  setHoveredBox(index + 2);
                }}
                onMouseLeave={() => {
                  setHoveredBox(null);
                }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl font-bold`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{item.title}</h3>
                <p className="text-gray-800 dark:text-gray-400">{item.description}</p>
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
              ? 'フェアなスタートラインを始めましょう'
              : 'Start Your Fair Start Line'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            {language === 'ja'
              ? '今すぐ登録して、キャリアの第一歩を踏み出しましょう'
              : 'Register now and take the first step in your career'}
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
              {language === 'ja' ? 'OB/OG訪問について' : 'Learn About OB/OG Visit'}
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

