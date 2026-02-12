import React, { useState, useEffect } from 'react';
import { KPIS } from '../constants';
import { DollarSign, Users, Briefcase, Activity, TrendingUp, TrendingDown, Sparkles, Loader2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { fetchBusinessInsights } from '../services/geminiService';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
];

const icons: any = { DollarSign, Users, Briefcase, Activity };

export const Dashboard: React.FC = () => {
  const [insights, setInsights] = useState<string | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);

  const handleGenerateInsights = async () => {
    setLoadingInsights(true);
    const result = await fetchBusinessInsights({ kpis: KPIS, recentData: data });
    setInsights(result);
    setLoadingInsights(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Executive Overview</h1>
          <p className="text-gray-500 dark:text-slate-400">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                Export Report
            </button>
            <button 
                onClick={handleGenerateInsights}
                className="flex items-center gap-2 px-4 py-2 bg-nexus-600 hover:bg-nexus-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-nexus-200 dark:shadow-none">
                {loadingInsights ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                AI Insights
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map((kpi) => {
          const Icon = icons[kpi.icon];
          return (
            <div key={kpi.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-nexus-50 dark:bg-nexus-900/20 rounded-lg">
                  <Icon className="w-6 h-6 text-nexus-600 dark:text-nexus-400" />
                </div>
                {kpi.trend > 0 ? (
                  <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    +{kpi.trend}%
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-rose-600 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded text-xs font-medium">
                    <TrendingDown className="w-3 h-3" />
                    {kpi.trend}%
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{kpi.value}</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      {/* AI Insights Panel */}
      {(insights || loadingInsights) && (
        <div className="bg-gradient-to-r from-nexus-900 to-slate-900 rounded-xl p-6 text-white border border-nexus-700/50 shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-nexus-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-nexus-300" />
                    <h3 className="font-semibold text-lg">AI Business Intelligence</h3>
                </div>
                {loadingInsights ? (
                    <div className="h-24 flex items-center justify-center text-nexus-200">
                        <div className="flex flex-col items-center gap-2">
                             <Loader2 className="w-6 h-6 animate-spin" />
                             <span className="text-sm">Analyzing market trends and internal data...</span>
                        </div>
                    </div>
                ) : (
                    <div className="prose prose-invert prose-sm max-w-none text-nexus-100" dangerouslySetInnerHTML={{ __html: insights! }} />
                )}
             </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm h-[400px]">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Revenue vs Expenses</h3>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#345df5" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#345df5" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEx" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-700" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#345df5" strokeWidth={2} fillOpacity={1} fill="url(#colorRv)" />
              <Area type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorEx)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm h-[400px]">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Project Efficiency</h3>
           <ResponsiveContainer width="100%" height="85%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-700" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <Tooltip 
                 contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 cursor={{fill: 'transparent'}}
              />
              <Legend />
              <Bar dataKey="revenue" name="Completed Tasks" fill="#345df5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" name="Active Issues" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};