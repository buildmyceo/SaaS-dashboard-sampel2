import React from 'react';
import { Search, Bell, Sun, Moon, Menu } from 'lucide-react';

interface TopBarProps {
  onToggleSidebar: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCommand: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar, isDark, onToggleTheme, onOpenCommand }) => {
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md text-gray-500 dark:text-slate-400">
          <Menu className="w-5 h-5" />
        </button>
        <div 
            onClick={onOpenCommand}
            className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg px-4 py-1.5 w-64 cursor-pointer hover:border-nexus-300 dark:hover:border-nexus-700 transition-colors">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Search...</span>
          <span className="ml-auto text-xs text-gray-300 dark:text-slate-600 font-mono border border-gray-200 dark:border-slate-700 rounded px-1.5 py-0.5">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full text-gray-500 dark:text-slate-400 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full text-gray-500 dark:text-slate-400 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
        </div>
        
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-slate-700">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Connor</p>
            <p className="text-xs text-gray-500 dark:text-slate-400">Operations Lead</p>
          </div>
          <img 
            src="https://picsum.photos/40/40" 
            alt="Profile" 
            className="w-9 h-9 rounded-full border border-gray-200 dark:border-slate-700 ring-2 ring-transparent hover:ring-nexus-100 transition-all cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};