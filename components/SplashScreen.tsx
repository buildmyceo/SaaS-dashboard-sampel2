import React from 'react';
import { Loader2 } from 'lucide-react';

export const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 -right-24 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-nexus-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 animate-fadeIn">
        {/* Logo Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-nexus-500 blur-2xl opacity-20 rounded-full animate-pulse"></div>
          <div className="relative w-24 h-24 bg-gradient-to-br from-nexus-500 to-nexus-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-nexus-500/30 ring-4 ring-white">
               <span className="text-6xl font-bold font-sans tracking-tighter text-white">N</span>
          </div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-400 rounded-full border-4 border-white shadow-lg animate-bounce"></div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-3 mt-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                Nexus<span className="text-nexus-600">OS</span>
                <span className="text-xs align-top bg-nexus-100 text-nexus-700 px-2 py-0.5 rounded-full border border-nexus-200 ml-2 font-bold shadow-sm">ENT</span>
            </h1>
            <p className="text-slate-500 text-sm tracking-[0.2em] uppercase font-bold">
                Enterprise Operating System
            </p>
        </div>

        {/* Loader */}
        <div className="flex flex-col items-center gap-3 mt-8">
            <div className="relative">
              <div className="absolute inset-0 bg-nexus-400 blur opacity-40 rounded-full"></div>
              <Loader2 className="w-5 h-5 text-nexus-600 animate-spin relative z-10" />
            </div>
            <span className="text-[10px] text-slate-400 font-mono font-semibold tracking-wider">INITIALIZING MODULES...</span>
        </div>
      </div>
      
      {/* Footer Attribution */}
      <div className="absolute bottom-8 text-center z-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <p className="text-slate-500 text-xs font-medium tracking-wide bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50 shadow-sm">
          Sample by <a href="https://buildmyceo.com" target="_blank" rel="noopener noreferrer" className="text-nexus-600 hover:text-nexus-700 transition-colors font-bold hover:underline decoration-nexus-300 underline-offset-2">buildmyceo.com</a>
        </p>
      </div>
    </div>
  );
};