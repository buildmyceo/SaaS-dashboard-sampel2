import React from 'react';
import { Loader2 } from 'lucide-react';

export const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="relative z-10 flex flex-col items-center gap-6 animate-fadeIn">
        {/* Logo Container */}
        <div className="relative w-20 h-20 bg-gradient-to-br from-nexus-500 to-nexus-600 rounded-2xl flex items-center justify-center shadow-lg shadow-nexus-500/20">
             <span className="text-5xl font-bold font-sans tracking-tighter text-white">N</span>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-2 mt-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Nexus<span className="text-nexus-600">OS</span>
            </h1>
            <p className="text-slate-500 text-sm tracking-widest uppercase font-medium">
                ENTERPRISE
            </p>
        </div>

        {/* Loader */}
        <div className="flex items-center gap-3 mt-12 absolute top-full">
            <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
            <span className="text-xs text-slate-400 font-mono tracking-wider">INITIALIZING...</span>
        </div>
      </div>
      
      {/* Footer Attribution */}
      <div className="absolute bottom-8 text-center z-10">
        <p className="text-slate-400 text-xs font-medium tracking-wide">
          Sample by <a href="https://buildmyceo.com" target="_blank" rel="noopener noreferrer" className="text-nexus-600 hover:text-nexus-700 transition-colors font-semibold">buildmyceo.com</a>
        </p>
      </div>
    </div>
  );
};