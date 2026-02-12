import React from 'react';
import { BarChart3, PieChart, LineChart, Download } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Direct', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Organic', value: 300 },
  { name: 'Referral', value: 200 },
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics & Reports</h2>
          <p className="text-gray-500 dark:text-slate-400">Deep dive into data with custom reports.</p>
        </div>
        <div className="flex gap-2">
             <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export CSV
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center h-64 hover:border-nexus-300 dark:hover:border-nexus-700 transition-colors cursor-pointer group">
              <div className="p-4 bg-nexus-50 dark:bg-nexus-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-nexus-600 dark:text-nexus-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Revenue Report</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Monthly recurring revenue breakdown</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center h-64 hover:border-nexus-300 dark:hover:border-nexus-700 transition-colors cursor-pointer group">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <PieChart className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Client Demographics</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Industry and region distribution</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center h-64 hover:border-nexus-300 dark:hover:border-nexus-700 transition-colors cursor-pointer group">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <LineChart className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Web and mobile app analytics</p>
          </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm h-[400px]">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Traffic Analysis</h3>
           <ResponsiveContainer width="100%" height="85%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-800" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <Tooltip 
                 contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 cursor={{fill: 'transparent'}}
              />
              <Bar dataKey="value" fill="#345df5" radius={[4, 4, 0, 0]} barSize={50} />
            </BarChart>
          </ResponsiveContainer>
      </div>
    </div>
  );
};