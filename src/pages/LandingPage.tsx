import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiBriefcase, FiTarget, FiMail } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const LandingPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const heroText = language === 'ja' 
    ? '留学生の就活にフェアなスタートラインを'
    : 'Give international students a fair start line for job hunting';

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
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              {heroText}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto"
            >
              {language === 'ja' 
                ? '低リスクで始められる、ステップバイステップの就活支援プラットフォーム'
                : 'A low-risk, step-by-step platform for international students to start their career journey in Japan'}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="mailto:info@senpaicareer.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full gradient-accent text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <FiMail className="text-xl" />
                {t('btn.freeConsultation')}
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white border-2 border-gray-300 text-black font-semibold flex items-center gap-2 hover:border-pink-400 transition-all"
              >
                {t('btn.learnMore')}
                <FiArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Senpai Career */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">{t('section.whatIs')}</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {language === 'ja'
                ? 'Senpai Careerは、在日留学生向けの会員制プラットフォームです。OB/OG訪問から始まり、長期インターンシップ、新卒採用まで、段階的にキャリア形成をサポートします。'
                : 'Senpai Career is a membership-based platform for international students in Japan. Starting with OB/OG career interviews, we connect students to long-term internships and new graduate recruiting opportunities.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FiUsers,
                title: language === 'ja' ? 'OB/OG訪問' : 'OB/OG Visit',
                description: language === 'ja'
                  ? '先輩とのメンタリングと相談から始めましょう'
                  : 'Start with mentoring and consultation from alumni',
              },
              {
                icon: FiBriefcase,
                title: language === 'ja' ? '長期インターンシップ' : 'Long-term Internship',
                description: language === 'ja'
                  ? '実際の仕事を通じて適性を確認できます'
                  : 'Confirm your fit through real work experience',
              },
              {
                icon: FiTarget,
                title: language === 'ja' ? '新卒採用' : 'New Graduate Recruiting',
                description: language === 'ja'
                  ? 'あなたに合った企業を見つけましょう'
                  : 'Find companies that match your interests',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                animate={hoveredBox === index ? {
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
                  boxShadow: hoveredBox === index ? (() => {
                    const colors = [
                      { inner: 'rgba(236, 72, 153, 0.08)', mid1: 'rgba(236, 72, 153, 0.05)', mid2: 'rgba(236, 72, 153, 0.03)', outer: 'rgba(59, 130, 246, 0.02)' },
                      { inner: 'rgba(59, 130, 246, 0.08)', mid1: 'rgba(59, 130, 246, 0.05)', mid2: 'rgba(59, 130, 246, 0.03)', outer: 'rgba(59, 130, 246, 0.02)' },
                      { inner: 'rgba(168, 85, 247, 0.08)', mid1: 'rgba(168, 85, 247, 0.05)', mid2: 'rgba(168, 85, 247, 0.03)', outer: 'rgba(168, 85, 247, 0.02)' }
                    ];
                    const color = colors[index] || colors[0];
                    return `0 0 20px 4px ${color.inner}, 0 0 40px 8px ${color.mid1}, 0 0 60px 12px ${color.mid2}, 0 0 80px 16px ${color.outer}`;
                  })() : '0 2px 8px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={() => setHoveredBox(index)}
                onMouseLeave={() => setHoveredBox(null)}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                  <feature.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-800 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">{t('section.mission')}</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-black">
              <p>
                {language === 'ja'
                  ? '私たちは、在日留学生が公平なスタートラインから就活を始められる環境を提供します。低リスクで始められ、段階的にキャリアを築いていけるプラットフォームを目指しています。'
                  : 'We provide international students in Japan with a fair starting line for job hunting. Our platform enables a low-risk, step-by-step approach to building careers.'}
              </p>
              <p>
                {language === 'ja'
                  ? '企業側にとっては、より広い候補者プールへのアクセスと、実際の仕事を通じた適性確認により、ミスマッチのリスクを減らすことができます。'
                  : 'For companies, we expand the candidate pool and reduce mismatch risk through work-fit confirmation.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              {language === 'ja' ? '登録学生数' : 'Registered Students'}
            </h2>
            <p className="text-5xl font-bold text-black mb-2">63</p>
            <p className="text-black">
              {language === 'ja' ? '2025年12月時点' : 'As of December 2025'}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { name: 'Keio', count: 31 },
              { name: 'Ritsumeikan', count: 19 },
              { name: 'Waseda', count: 6 },
              { name: 'Univ. of Tokyo', count: 6 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mac-card p-6"
              >
                <p className="text-3xl font-bold gradient-text mb-2">{stat.count}</p>
                <p className="text-black">{stat.name}</p>
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
              ? '低リスクで始められる採用体験'
              : 'Start accepting international interns with low risk'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            {language === 'ja'
              ? 'まずは1人のインターンから始めましょう'
              : 'Start with 1 intern model: deposit + success fee after 1 month'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/for-companies"
              className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:shadow-xl transition-all"
            >
              {t('nav.forCompanies')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
