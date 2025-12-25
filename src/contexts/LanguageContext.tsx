import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.mission': 'Our Mission',
    'nav.obog': 'OB/OG Visit',
    'nav.internship': 'Long-term Internship',
    'nav.recruiting': 'New Graduate Recruiting',
    'nav.subsidy': 'Subsidy Info',
    'nav.forCompanies': 'For Companies',
    'nav.forOBOG': 'For OB/OG',
    
    // Auth
    'auth.studentSignUp': 'Student Sign Up',
    'auth.obogSignUp': 'OB/OG Sign Up',
    'auth.login': 'Log In',
    'auth.logout': 'Log Out',
    
    // Hero
    'hero.catchphrase': 'Give international students a fair start line for job hunting',
    
    // Sections
    'section.whatIs': 'What is Senpai Career',
    'section.mission': 'Our Mission',
    'section.obogVisit': 'What is OB/OG Visit',
    
    // Buttons
    'btn.freeConsultation': 'Free Consultation',
    'btn.learnMore': 'Learn More',
    'btn.sendMessage': 'Send Message',
    'btn.apply': 'Apply',
    'btn.submit': 'Submit',
    'btn.save': 'Save',
    'btn.cancel': 'Cancel',
    
    // Common
    'common.notifications': 'Notifications',
    'common.messages': 'Messages',
    'common.profile': 'Profile',
    'common.search': 'Search',
    'common.filter': 'Filter',
  },
  ja: {
    // Navigation
    'nav.about': '私たちについて',
    'nav.mission': '私たちのミッション',
    'nav.obog': 'OB/OG訪問',
    'nav.internship': '長期インターンシップ',
    'nav.recruiting': '新卒採用',
    'nav.subsidy': '補助金情報',
    'nav.forCompanies': '企業向け',
    'nav.forOBOG': 'OB/OG向け',
    
    // Auth
    'auth.studentSignUp': '学生登録',
    'auth.obogSignUp': 'OB/OG登録',
    'auth.login': 'ログイン',
    'auth.logout': 'ログアウト',
    
    // Hero
    'hero.catchphrase': '留学生の就活にフェアなスタートラインを',
    
    // Sections
    'section.whatIs': 'Senpai Careerとは',
    'section.mission': '私たちのミッション',
    'section.obogVisit': 'OB/OG訪問とは',
    
    // Buttons
    'btn.freeConsultation': '無料相談',
    'btn.learnMore': '詳しく見る',
    'btn.sendMessage': 'メッセージを送る',
    'btn.apply': '応募する',
    'btn.submit': '送信',
    'btn.save': '保存',
    'btn.cancel': 'キャンセル',
    
    // Common
    'common.notifications': '通知',
    'common.messages': 'メッセージ',
    'common.profile': 'プロフィール',
    'common.search': '検索',
    'common.filter': 'フィルター',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
