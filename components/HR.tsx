import React from 'react';
import { Users, UserPlus, Clock, Award, MoreHorizontal } from 'lucide-react';

const EMPLOYEES = [
    { id: 1, name: 'Sarah Connor', role: 'Operations Lead', dept: 'Operations', status: 'Present', performance: 98, avatar: 'https://picsum.photos/40/40?1' },
    { id: 2, name: 'John Doe', role: 'Senior Developer', dept: 'Engineering', status: 'Remote', performance: 95, avatar: 'https://picsum.photos/40/40?2' },
    { id: 3, name: 'Jane Smith', role: 'Product Manager', dept: 'Product', status: 'Absent', performance: 92, avatar: 'https://picsum.photos/40/40?3' },
    { id: 4, name: 'Mike Johnson', role: 'Sales Executive', dept: 'Sales', status: 'Present', performance: 88, avatar: 'https://picsum.photos/40/40?4' },
];

export const HR: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">People & Teams</h2>
          <p className="text-slate-500 dark:text-slate-400">Manage directory, attendance, and performance.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-nexus-600 hover:bg-nexus-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-nexus-200 dark:shadow-none">
             <UserPlus className="w-4 h-4" />
             Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-nexus-100 dark:bg-nexus-900/30 text-nexus-600 rounded-lg">
                <Users className="w-6 h-6" />
            </div>
            <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">42</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Total Employees</div>
            </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                <Clock className="w-6 h-6" />
            </div>
            <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">96%</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">On-Time Attendance</div>
            </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg">
                <Award className="w-6 h-6" />
            </div>
            <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">4.8</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Avg Performance Score</div>
            </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Employee</th>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Role</th>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Department</th>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Performance</th>
                    <th className="px-6 py-4 text-right font-semibold text-slate-900 dark:text-white">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {EMPLOYEES.map((emp) => (
                    <tr key={emp.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <img src={emp.avatar} alt={emp.name} className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700" />
                                <div>
                                    <div className="font-medium text-slate-900 dark:text-white">{emp.name}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">ID: #{1000 + emp.id}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{emp.role}</td>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                                {emp.dept}
                            </span>
                        </td>
                        <td className="px-6 py-4">
                             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                emp.status === 'Present' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                emp.status === 'Remote' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400'
                             }`}>
                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                    emp.status === 'Present' ? 'bg-emerald-500' : emp.status === 'Remote' ? 'bg-blue-500' : 'bg-rose-500'
                                }`}></span>
                                {emp.status}
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-nexus-500" style={{ width: `${emp.performance}%` }}></div>
                                </div>
                                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{emp.performance}%</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                             <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};