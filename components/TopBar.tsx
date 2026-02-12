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
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-20 flex-shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="p-2 -ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-slate-500 dark:text-slate-400">
          <Menu className="w-6 h-6" />
        </button>
        <div 
            onClick={onOpenCommand}
            className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 border border-transparent dark:border-slate-700/50 rounded-lg px-3 py-1.5 w-64 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-colors group">
          <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
          <span className="text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">Search...</span>
          <span className="ml-auto text-xs text-slate-400 dark:text-slate-500 font-mono border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={onToggleTheme}
          className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="relative">
          <button className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 transition-colors" aria-label="Notifications">
            <Bell className="w-5 h-5" />
          </button>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border border-white dark:border-slate-900 rounded-full"></span>
        </div>
        
        <div className="flex items-center gap-3 pl-3 ml-2 border-l border-slate-200 dark:border-slate-700">
          <img 
            src="https://i.pravatar.cc/40?u=sarah" 
            alt="Profile" 
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 ring-2 ring-transparent hover:ring-nexus-200 dark:hover:ring-nexus-800 transition-all cursor-pointer"
          />
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800 dark:text-white">Sarah Connor</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Operations Lead</p>
          </div>
        </div>
      </div>
    </header>
  );
};