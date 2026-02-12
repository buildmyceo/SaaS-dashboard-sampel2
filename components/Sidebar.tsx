import React from 'react';
import { LayoutDashboard, Users, FolderKanban, Banknote, ShieldCheck, Cpu, BarChart3, Settings, LifeBuoy } from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onChangeView: (view: View) => void;
  collapsed: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, collapsed }) => {
  const menuItems: { id: View; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'crm', label: 'CRM', icon: Users },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'finance', label: 'Finance', icon: Banknote },
    { id: 'hr', label: 'Human Resources', icon: ShieldCheck },
    { id: 'automation', label: 'Automation', icon: Cpu },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className={`flex flex-col h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 z-30 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="h-16 flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5 font-bold text-xl text-nexus-600 tracking-tight">
          <div className="w-8 h-8 bg-nexus-600 rounded-lg flex items-center justify-center text-white font-sans text-2xl">N</div>
          {!collapsed && <span className="text-slate-900 dark:text-white">Nexus<span className="text-nexus-500">OS</span></span>}
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
              currentView === item.id
                ? 'bg-nexus-50 text-nexus-700 dark:bg-nexus-500/10 dark:text-nexus-300'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <item.icon className={`w-5 h-5 flex-shrink-0 ${currentView === item.id ? 'text-nexus-600 dark:text-nexus-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-500'}`} />
            {!collapsed && <span className="truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
          <Settings className="w-5 h-5 text-slate-400" />
          {!collapsed && <span>Settings</span>}
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
          <LifeBuoy className="w-5 h-5 text-slate-400" />
          {!collapsed && <span>Support</span>}
        </button>
        
        {!collapsed && (
           <div className="pt-4 mt-2 border-t border-dashed border-slate-200 dark:border-slate-800">
             <div className="px-3 text-[10px] text-slate-500 dark:text-slate-600 text-center leading-relaxed">
               <p>NexusOS Enterprise v2.5.0</p>
               <p className="mt-1">
                 Sample by <a href="https://buildmyceo.com" target="_blank" rel="noopener noreferrer" className="text-nexus-500 hover:text-nexus-600 dark:hover:text-nexus-400 font-semibold">buildmyceo.com</a>
               </p>
             </div>
           </div>
        )}
      </div>
    </div>
  );
};