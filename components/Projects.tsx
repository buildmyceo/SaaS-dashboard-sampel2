import React from 'react';
import { PROJECTS } from '../constants';
import { Plus, Clock, MoreVertical, CheckSquare, Calendar, Users } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Active Projects</h2>
          <p className="text-gray-500 dark:text-slate-400">Track timelines, assignments, and deliverables.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-nexus-600 hover:bg-nexus-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-nexus-200 dark:shadow-none">
             <Plus className="w-4 h-4" />
             New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-nexus-700 bg-nexus-50 dark:bg-nexus-900/30 dark:text-nexus-400 px-2.5 py-1 rounded-md border border-nexus-100 dark:border-nexus-900">
                  {project.client}
                </span>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 line-clamp-1">{project.name}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 mb-6">
                <Calendar className="w-3.5 h-3.5" />
                <span>Due {project.dueDate}</span>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-xs font-medium mb-2">
                  <span className="text-gray-600 dark:text-slate-400">Progress</span>
                  <span className="text-gray-900 dark:text-white">{project.progress}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${project.progress === 100 ? 'bg-emerald-500' : 'bg-nexus-600'}`} 
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 dark:border-slate-800 pt-4 mt-auto">
              <div className="flex -space-x-2.5">
                {project.team.map((avatar, idx) => (
                  <img key={idx} src={avatar} alt="Team" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" />
                ))}
                <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-medium text-gray-500 dark:text-slate-400">
                  +1
                </div>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                project.status === 'Done' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-900 dark:text-emerald-400' :
                project.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:border-blue-900 dark:text-blue-400' :
                'bg-gray-50 text-gray-700 border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'
              }`}>
                {project.status}
              </span>
            </div>
          </div>
        ))}
        
        <button className="flex flex-col items-center justify-center gap-3 bg-gray-50 dark:bg-slate-900/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-slate-700 p-6 hover:border-nexus-400 dark:hover:border-nexus-600 hover:bg-nexus-50 dark:hover:bg-nexus-900/10 transition-all group min-h-[280px]">
           <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-400 group-hover:text-nexus-600 group-hover:border-nexus-200 transition-colors">
              <Plus className="w-6 h-6" />
           </div>
           <span className="font-medium text-gray-500 dark:text-slate-400 group-hover:text-nexus-700 dark:group-hover:text-nexus-300">Create New Project</span>
        </button>
      </div>
    </div>
  );
};