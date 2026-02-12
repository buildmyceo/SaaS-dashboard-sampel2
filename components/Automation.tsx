import React from 'react';
import { Play, Plus, Zap, ArrowRight, Settings, MoreVertical } from 'lucide-react';

export const Automation: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Automation Center</h2>
          <p className="text-slate-500 dark:text-slate-400">Build workflows to streamline your operations.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-nexus-600 hover:bg-nexus-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm shadow-nexus-200 dark:shadow-none">
             <Plus className="w-4 h-4" />
             New Workflow
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Workflows List */}
          <div className="lg:col-span-1 space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white px-1">Active Workflows</h3>
              {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-nexus-300 dark:hover:border-nexus-700 transition-colors cursor-pointer group">
                      <div className="flex justify-between items-start mb-2">
                          <div className="p-2 bg-nexus-50 dark:bg-nexus-900/30 rounded-lg text-nexus-600 dark:text-nexus-400">
                              <Zap className="w-4 h-4" />
                          </div>
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase rounded tracking-wide">Active</span>
                            <MoreVertical className="w-4 h-4 text-slate-400" />
                          </div>
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Lead Qualification Bot {i}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Auto-assigns leads based on revenue size and industry.</p>
                      <div className="flex items-center text-xs text-slate-400 gap-2">
                          <Play className="w-3 h-3" />
                          <span>Run 142 times today</span>
                      </div>
                  </div>
              ))}
          </div>

          {/* Workflow Builder Visual Placeholder */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-[500px] overflow-hidden relative">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-950/50">
                  <span className="font-medium text-sm text-slate-600 dark:text-slate-300">Editor: Client Onboarding Flow</span>
                  <div className="flex gap-2">
                      <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-500">
                          <Settings className="w-4 h-4" />
                      </button>
                      <button className="px-3 py-1.5 bg-nexus-600 text-white text-xs font-medium rounded hover:bg-nexus-700">
                          Save & Publish
                      </button>
                  </div>
              </div>
              
              <div className="flex-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-slate-50 dark:bg-slate-950 relative p-8 overflow-hidden">
                   {/* Background Grid */}
                   <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2 }}></div>

                   {/* Mock Nodes */}
                   <div className="absolute top-20 left-20 w-64 bg-white dark:bg-slate-900 border-2 border-nexus-500 rounded-lg shadow-lg p-3 z-10">
                       <div className="flex items-center justify-between mb-2">
                           <span className="text-xs font-bold uppercase text-nexus-600 tracking-wider">Trigger</span>
                           <Settings className="w-3 h-3 text-slate-400" />
                       </div>
                       <div className="font-medium text-sm text-slate-900 dark:text-white">New Client Added</div>
                   </div>

                   <div className="absolute top-40 left-48">
                        <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                   </div>

                   <div className="absolute top-60 left-20 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm p-3 z-10">
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-xs font-bold uppercase text-amber-600 tracking-wider">Condition</span>
                           <Settings className="w-3 h-3 text-slate-400" />
                       </div>
                       <div className="font-medium text-sm text-slate-900 dark:text-white">Deal Value {'>'} $10k</div>
                   </div>

                   <div className="absolute top-80 left-48">
                        <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                   </div>

                   <div className="absolute top-[400px] left-20 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm p-3 z-10">
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-xs font-bold uppercase text-emerald-600 tracking-wider">Action</span>
                           <Settings className="w-3 h-3 text-slate-400" />
                       </div>
                       <div className="font-medium text-sm text-slate-900 dark:text-white">Send "Enterprise Welcome" Email</div>
                   </div>

                   {/* Connecting Lines (Simulated) */}
                   <div className="absolute top-[125px] left-[148px] w-0.5 h-[120px] bg-slate-300 -z-0"></div>
                   <div className="absolute top-[285px] left-[148px] w-0.5 h-[120px] bg-slate-300 -z-0"></div>

              </div>
          </div>
      </div>
    </div>
  );
};