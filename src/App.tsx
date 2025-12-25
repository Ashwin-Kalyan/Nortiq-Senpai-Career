import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import OBOGList from './pages/OBOGList';
import OBOGDetail from './pages/OBOGDetail';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import CompanyDashboard from './pages/CompanyDashboard';
import AdminPanel from './pages/AdminPanel';

function App() {
  const isLoggedIn = false; // This would come from auth context
  const userRole = undefined; // This would come from auth context

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Header isLoggedIn={isLoggedIn} userRole={userRole} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup/:type" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/obog-visit" element={<OBOGList />} />
            <Route path="/obog/:id" element={<OBOGDetail />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/company" element={<CompanyDashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/about" element={<LandingPage />} />
            <Route path="/internship" element={<OBOGList />} />
            <Route path="/for-companies" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
