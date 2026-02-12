import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';
import { CRM } from './components/CRM';
import { Projects } from './components/Projects';
import { Finance } from './components/Finance';
import { HR } from './components/HR';
import { Automation } from './components/Automation';
import { Analytics } from './components/Analytics';
import { CommandPalette } from './components/CommandPalette';
import { SplashScreen } from './components/SplashScreen';
import { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'crm': return <CRM />;
      case 'projects': return <Projects />;
      case 'finance': return <Finance />;
      case 'hr': return <HR />;
      case 'automation': return <Automation />;
      case 'analytics': return <Analytics />;
      default: return <Dashboard />;
    }
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-950 font-sans text-gray-900 dark:text-gray-100 overflow-hidden animate-in fade-in duration-700">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        collapsed={isSidebarCollapsed} 
      />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopBar 
          onToggleSidebar={toggleSidebar} 
          isDark={isDark} 
          onToggleTheme={toggleTheme}
          onOpenCommand={() => setIsCommandOpen(true)}
        />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderView()}
          </div>
        </main>
      </div>

      <CommandPalette 
        isOpen={isCommandOpen} 
        onClose={() => setIsCommandOpen(false)} 
        onChangeView={setCurrentView}
      />
    </div>
  );
}

export default App;