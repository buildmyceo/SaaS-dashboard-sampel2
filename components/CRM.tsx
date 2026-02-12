import React from 'react';
import { CLIENTS } from '../constants';
import { MoreHorizontal, Phone, Mail, Calendar, Filter, Plus } from 'lucide-react';

export const CRM: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'Lead': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Negotiation': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Churned': return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Client Management</h2>
          <p className="text-slate-500 dark:text-slate-400">Manage relationships, track leads, and close deals.</p>
        </div>
        <div className="flex gap-2">
           <button className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
             <Filter className="w-5 h-5" />
           </button>
           <button className="flex items-center gap-2 px-4 py-2 bg-nexus-600 hover:bg-nexus-700 text-white rounded-lg text-sm font-medium transition-colors">
             <Plus className="w-4 h-4" />
             Add Client
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Client Name</th>
                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Company</th>
                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Value</th>
                <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Last Contact</th>
                <th className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {CLIENTS.map((client) => (
                <tr key={client.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-nexus-100 dark:bg-nexus-900/50 flex items-center justify-center text-nexus-600 dark:text-nexus-400 font-bold text-xs">
                        {client.name.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-900 dark:text-slate-200">{client.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{client.company}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border border-transparent ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">
                    ${client.value.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {client.lastContact}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-nexus-600 transition-colors">
                            <Mail className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-nexus-600 transition-colors">
                            <Phone className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <MoreHorizontal className="w-4 h-4" />
                        </button>
                    </div>
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