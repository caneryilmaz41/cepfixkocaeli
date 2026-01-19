'use client'
import { useState, useEffect } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        const diff = Math.random() * 15
        return Math.min(oldProgress + diff, 100)
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[10000] bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Tech Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-10 md:gap-20 w-full px-4">
        {/* Phone Repair Animation Box - Fully Responsive */}
        <div className="relative w-44 h-72 md:w-72 md:h-[480px] shrink-0">
          {/* Phone Frame */}
          <div className="absolute inset-0 border-4 border-slate-800 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden bg-slate-900/50 backdrop-blur-xl">
             {/* Scanning Beam */}
             <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-y-full animate-preloader-scan"></div>
             
             {/* Repair Sparks/Dots */}
             <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-1 md:w-1.5 h-1 md:h-1.5 bg-primary rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
             </div>

             {/* Center Logo Fading In */}
             <div className="absolute inset-0 flex items-center justify-center p-8 md:p-14 opacity-0 animate-preloader-logo">
                <img src="/logom.png" alt="Logo" className="w-full h-auto object-contain brightness-125 transition-all shadow-2xl" />
             </div>
          </div>
          
          {/* Tool Icons Floating Around - Scaled for Mobile */}
          <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-10 h-10 md:w-16 md:h-16 bg-slate-900 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center animate-bounce-slow">
             <svg className="w-5 h-5 md:w-8 md:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4v14a2 2 0 002 2h12a2 2 0 002-2v-5M9 15l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
          </div>
          <div className="absolute -bottom-4 -right-6 md:-bottom-8 md:-right-12 w-10 h-10 md:w-16 md:h-16 bg-slate-900 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center animate-bounce-slow" style={{animationDelay: '1s'}}>
             <svg className="w-5 h-5 md:w-8 md:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
          </div>
        </div>

        {/* Text & Progress - Responsive scaling */}
        <div className="text-center space-y-4 md:space-y-6 max-w-full">
          <div className="flex flex-col items-center gap-2 md:gap-3">
            <span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase text-[10px] md:text-sm animate-pulse">Sistem Hazırlanıyor</span>
            <h2 className="text-white text-2xl md:text-5xl font-display font-bold tracking-tight">CEP <span className="text-primary">Fix</span> Kocaeli</h2>
          </div>
          
          {/* Progress Bar Container - Responsive widths */}
          <div className="w-[260px] md:w-[450px] h-1.5 md:h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5 p-[1px] mx-auto">
             <div 
               className="h-full bg-gradient-to-r from-blue-600 via-primary to-cyan-400 transition-all duration-300 ease-out rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
               style={{ width: `${progress}%` }}
             ></div>
          </div>
          <div className="text-slate-500 font-mono text-[9px] md:text-sm tracking-[0.1em] md:tracking-[0.2em]">
            {progress >= 100 ? 'BAĞLANTI TAMAMLANDI' : `SİSTEM TARANIYOR... %${Math.round(progress)}`}
          </div>
        </div>
      </div>

      {/* Footer Branding for Preloader - Responsive */}
      <div className="absolute bottom-10 md:bottom-12 text-[8px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.6em] text-slate-600 font-bold px-4 text-center">
        Premium Technology Service
      </div>
    </div>
  )
}
