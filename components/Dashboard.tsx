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
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Executive Overview</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 h-10 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Export Report
            </button>
            <button 
                onClick={handleGenerateInsights}
                disabled={loadingInsights}
                className="flex items-center justify-center gap-2 px-4 h-10 bg-nexus-600 hover:bg-nexus-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-nexus-500/20 disabled:bg-nexus-400 disabled:cursor-not-allowed">
                {loadingInsights ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>AI Insights</span>
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPIS.map((kpi) => {
          const Icon = icons[kpi.icon];
          return (
            <div key={kpi.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                 <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.label}</p>
                 <Icon className="w-6 h-6 text-slate-400 dark:text-slate-500" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{kpi.value}</h3>
              <div className={`flex items-center gap-1 text-xs font-medium ${kpi.trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {kpi.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                <span>{kpi.trend > 0 ? '+' : ''}{kpi.trend}% {kpi.trendLabel}</span>
              </div>
            </div>
          );
        })}
      </div>

      {(insights || loadingInsights) && (
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-nexus-50 dark:bg-nexus-500/10 rounded-lg">
                        <Sparkles className="w-5 h-5 text-nexus-500" />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">AI Business Intelligence</h3>
                </div>
                {loadingInsights ? (
                    <div className="h-24 flex items-center justify-center text-slate-500">
                        <div className="flex flex-col items-center gap-2 text-center">
                             <Loader2 className="w-6 h-6 animate-spin" />
                             <span className="text-sm">Analyzing market trends and internal data...</span>
                        </div>
                    </div>
                ) : (
                    <div className="prose prose-sm max-w-none text-slate-600 dark:text-slate-300 prose-li:marker:text-nexus-500" dangerouslySetInnerHTML={{ __html: insights! }} />
                )}
             </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-[400px]">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Revenue vs Expenses</h3>
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
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-800" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#345df5" strokeWidth={2} fillOpacity={1} fill="url(#colorRv)" />
              <Area type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorEx)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-[400px]">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Project Efficiency</h3>
           <ResponsiveContainer width="100%" height="85%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-800" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip 
                 contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 cursor={{fill: '#fafafa'}}
              />
              <Legend wrapperStyle={{fontSize: '12px'}} />
              <Bar dataKey="revenue" name="Completed Tasks" fill="#345df5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" name="Active Issues" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};