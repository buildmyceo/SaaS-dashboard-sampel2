import React from 'react';
import { TRANSACTIONS } from '../constants';
import { ArrowUpRight, ArrowDownRight, Wallet, Download, Filter } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
    { name: 'Mon', income: 4000, expense: 2400 },
    { name: 'Tue', income: 3000, expense: 1398 },
    { name: 'Wed', income: 2000, expense: 9800 },
    { name: 'Thu', income: 2780, expense: 3908 },
    { name: 'Fri', income: 1890, expense: 4800 },
    { name: 'Sat', income: 2390, expense: 3800 },
    { name: 'Sun', income: 3490, expense: 4300 },
];

export const Finance: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Overview</h2>
          <p className="text-gray-500 dark:text-slate-400">Monitor cash flow, expenses, and invoices.</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
            </button>
            <button className="px-4 py-2 bg-nexus-600 hover:bg-nexus-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm shadow-nexus-200 dark:shadow-none">
                <Wallet className="w-4 h-4" />
                New Invoice
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white">Cash Flow</h3>
                <select className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md text-xs px-2 py-1 text-gray-600 dark:text-slate-300 outline-none">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>This Year</option>
                </select>
             </div>
             <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                         <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-800" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorInc)" />
                    <Area type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorExp)" />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                          <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-slate-400">Total Income</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">$124,500.00</div>
                  <div className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" /> +12% from last month
                  </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg text-rose-600 dark:text-rose-400">
                          <ArrowDownRight className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-slate-400">Total Expenses</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">$42,300.00</div>
                  <div className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" /> +5% from last month
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
             <h3 className="font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
             <button className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 p-1">
                 <Filter className="w-4 h-4" />
             </button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 dark:bg-slate-950/50">
                    <tr>
                        <th className="px-6 py-3 font-medium text-gray-500 dark:text-slate-400">Description</th>
                        <th className="px-6 py-3 font-medium text-gray-500 dark:text-slate-400">Date</th>
                        <th className="px-6 py-3 font-medium text-gray-500 dark:text-slate-400">Status</th>
                        <th className="px-6 py-3 font-medium text-gray-500 dark:text-slate-400 text-right">Amount</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {TRANSACTIONS.map((t) => (
                        <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{t.description}</td>
                            <td className="px-6 py-4 text-gray-500 dark:text-slate-400">{t.date}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                    t.status === 'Paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                    t.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                    'bg-gray-100 text-gray-600'
                                }`}>
                                    {t.status}
                                </span>
                            </td>
                            <td className={`px-6 py-4 text-right font-medium ${t.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-white'}`}>
                                {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};