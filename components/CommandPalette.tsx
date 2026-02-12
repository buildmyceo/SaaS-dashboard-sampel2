import React, { useEffect, useState } from 'react';
import { Search, LayoutDashboard, Users, FolderKanban, Banknote, ShieldCheck, ArrowRight } from 'lucide-react';
import { View } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onChangeView: (view: View) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onChangeView }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: 'dashboard', label: 'Go to Dashboard', icon: LayoutDashboard },
    { id: 'crm', label: 'Go to CRM', icon: Users },
    { id: 'projects', label: 'Go to Projects', icon: FolderKanban },
    { id: 'finance', label: 'Go to Finance', icon: Banknote },
    { id: 'hr', label: 'Go to HR', icon: ShieldCheck },
  ];

  const filteredActions = actions.filter(action => 
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center px-4 py-4 border-b border-gray-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search..."
            className="w-full bg-transparent outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="text-xs bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-gray-500">ESC</button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredActions.length === 0 ? (
            <div className="p-4 text-center text-gray-500 dark:text-slate-400">No results found.</div>
          ) : (
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Navigation</div>
              {filteredActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => {
                    onChangeView(action.id as View);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-nexus-50 dark:hover:bg-nexus-900/20 group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-slate-800 rounded-md text-gray-500 dark:text-slate-400 group-hover:bg-nexus-100 dark:group-hover:bg-nexus-900/50 group-hover:text-nexus-600 transition-colors">
                      <action.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 dark:text-slate-200 font-medium group-hover:text-gray-900 dark:group-hover:text-white">{action.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};