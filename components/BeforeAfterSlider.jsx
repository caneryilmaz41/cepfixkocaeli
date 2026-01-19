'use client'
import { useState, useRef, useEffect } from 'react'

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef(null)

  // Track container width for correct image scaling inside clipped div
  useEffect(() => {
    if (!containerRef.current) return

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const handleMove = (event) => {
    if (!containerRef.current) return
    
    const containerRect = containerRef.current.getBoundingClientRect()
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
    
    let position = ((clientX - containerRect.left) / containerRect.width) * 100
    position = Math.max(0, Math.min(100, position))
    
    setSliderPosition(position)
  }

  // Common label style
  const Label = ({ text, className }) => (
    <div className={`absolute top-6 px-4 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-widest shadow-lg pointer-events-none z-10 ${className}`}>
      {text}
    </div>
  )

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Onarım <span className="text-primary">Kalitesi</span>
          </h2>
          <p className="text-slate-400">
            Kırık ekranlardan yeni gibi cihazlara. Farkı görün.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-700 select-none cursor-ew-resize group"
             ref={containerRef}
             onMouseMove={handleMove}
             onTouchMove={handleMove}
        >
          {/* AFTER Image (Background Layer - Full Width) */}
          <div className="absolute inset-0 bg-slate-900">
             <img 
                src="/sağlam.jpg" 
                alt="Onarılmış Ekran" 
                className="w-full h-full object-cover"
             />
             <Label text="SONRASI" className="right-6" />
          </div>
          
          {/* BEFORE Image (Foreground Layer - Clipped) */}
          <div 
             className="absolute inset-0 overflow-hidden border-r border-white/80 shadow-[10px_0_50px_rgba(0,0,0,0.5)]"
             style={{ width: `${sliderPosition}%` }}
          >
             {/* 
                CRITICAL FIX: 
                The inner container must be exactly the width of the parent containerRef
                so the image inside doesn't shrink/squash as we clip the parent `div`.
             */}
             <div 
                className="absolute top-0 left-0 h-full bg-slate-900"
                style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
             >
                <img 
                   src="/kırık.jpg" 
                   alt="Kırık Ekran" 
                   className="w-full h-full object-cover"
                />
                <Label text="ÖNCESİ" className="left-6" />
             </div>
          </div>

          {/* Slider Handle */}
          <div 
             className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20"
             style={{ left: `${sliderPosition}%` }}
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.4)] text-slate-900 transition-transform hover:scale-110">
                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)"/></svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
