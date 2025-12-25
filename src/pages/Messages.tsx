import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiSend, FiUser, FiCheck, FiClock } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

interface MessageThread {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  status: 'sent' | 'no-reply' | 'read';
  unread: number;
}

const Messages: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');

  // Mock data
  const threads: MessageThread[] = [
    {
      id: '1',
      name: 'Tanaka Yuki',
      lastMessage: 'Thank you for your message! I\'d be happy to help...',
      timestamp: '2 hours ago',
      status: 'read',
      unread: 0,
    },
    {
      id: '2',
      name: 'Sarah Chen',
      lastMessage: 'I can share my interview experience with you.',
      timestamp: '1 day ago',
      status: 'sent',
      unread: 1,
    },
    {
      id: '3',
      name: 'Tech Corp Japan',
      lastMessage: 'We are interested in your profile...',
      timestamp: '3 days ago',
      status: 'no-reply',
      unread: 0,
    },
  ];

  const selectedThreadData = threads.find(t => t.id === selectedThread) || threads[0];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle message sending
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-2">
            {t('common.messages')}
          </h1>
          <p className="text-gray-600">
            {language === 'ja' ? 'メッセージと会話を管理' : 'Manage your messages and conversations'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Thread List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-1"
          >
            <div className="mac-card p-4 mb-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={language === 'ja' ? '検索...' : 'Search...'}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              {threads.map((thread) => (
                <motion.div
                  key={thread.id}
                  onClick={() => setSelectedThread(thread.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mac-card p-4 cursor-pointer ${
                    selectedThread === thread.id ? 'ring-2 ring-pink-400' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <FiUser className="text-xl text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800 truncate">{thread.name}</h3>
                        {thread.unread > 0 && (
                          <span className="w-5 h-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center">
                            {thread.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-1">{thread.lastMessage}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{thread.timestamp}</span>
                        {thread.status === 'sent' && (
                          <FiCheck className="text-blue-500 text-sm" />
                        )}
                        {thread.status === 'no-reply' && (
                          <FiClock className="text-gray-400 text-sm" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chat Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
            <div className="mac-card p-6 h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-4">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                  <FiUser className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{selectedThreadData.name}</h3>
                  <p className="text-sm text-gray-500">{selectedThreadData.timestamp}</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {[
                  { text: 'Hello! I\'m interested in learning about your career journey.', isSelf: false, time: '10:30 AM' },
                  { text: 'Hi! I\'d be happy to help. What would you like to know?', isSelf: true, time: '10:32 AM' },
                  { text: 'I\'m particularly interested in how you prepared for interviews at tech companies.', isSelf: false, time: '10:35 AM' },
                ].map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${msg.isSelf ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-2xl p-4 ${
                      msg.isSelf
                        ? 'bg-gradient-to-br from-pink-400 to-blue-400 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.isSelf ? 'text-white/70' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={language === 'ja' ? 'メッセージを入力...' : 'Type a message...'}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg gradient-accent text-white flex items-center gap-2"
                >
                  <FiSend />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
