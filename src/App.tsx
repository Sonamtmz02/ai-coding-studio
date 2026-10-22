import React, { useState } from 'react';
import { Terminal, Sparkles, FolderCode, KeyRound, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 flex flex-col font-sans">
      {/* Mobile-Friendly Glassmorphic Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-wide">AI Studio</h1>
            <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Single-User Private
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono">
            v0.1.0-alpha
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 p-4 max-w-lg mx-auto w-full flex flex-col justify-center items-center text-center">
        {/* Claymorphic Card */}
        <div className="w-full bg-slate-900/60 backdrop-blur-lg border border-slate-800/60 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center shadow-inner text-indigo-400">
            <Terminal className="w-7 h-7" />
          </div>

          <h2 className="text-lg font-bold text-white mb-2">Foundation Initialized</h2>
          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
            तपाईंको प्राइभेट स्टुडियोको फ्रन्टएन्ड इन्जिन सफलतापूर्वक तयार भयो। अर्को चरणमा हामी यसलाई Cloudflare Pages सँग जोड्नेछौँ।
          </p>

          <div className="space-y-2.5 text-left font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/50 flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-2">
                <FolderCode className="w-4 h-4 text-indigo-400" /> Source
              </span>
              <span className="text-emerald-400 font-medium">GitHub Private</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/50 flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Security
              </span>
              <span className="text-indigo-400 font-medium">Strict Single-User</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="sticky bottom-0 backdrop-blur-lg bg-slate-900/80 border-t border-slate-800/80 px-6 py-2.5 flex justify-around items-center">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`flex flex-col items-center gap-1 text-[11px] font-medium transition-colors ${activeTab === 'chat' ? 'text-indigo-400' : 'text-slate-500'}`}
        >
          <Sparkles className="w-5 h-5" />
          Studio
        </button>
        <button 
          onClick={() => setActiveTab('keys')}
          className={`flex flex-col items-center gap-1 text-[11px] font-medium transition-colors ${activeTab === 'keys' ? 'text-indigo-400' : 'text-slate-500'}`}
        >
          <KeyRound className="w-5 h-5" />
          Settings
        </button>
      </nav>
    </div>
  );
}
