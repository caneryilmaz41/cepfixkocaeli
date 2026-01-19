'use client'

export default function FloatingCourier() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-[9999] overflow-hidden hidden lg:block">
      {/* Road / Ground Line */}
      <div className="absolute bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="absolute bottom-4 left-[-300px] animate-courier-float flex items-end gap-4">
        {/* Dynamic Courier Van - Dark Premium Realistic SVG */}
        <div className="relative w-48 h-24 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          <svg viewBox="0 0 200 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="van-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <filter id="light-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Van Chassis / Shadow Under */}
            <rect x="20" y="80" width="160" height="10" rx="5" fill="#000" fillOpacity="0.4" />
            
            {/* Main Body */}
            <path d="M20 30 Q20 20 35 20 H160 Q180 20 180 40 V80 H20 V30" fill="url(#van-body-grad)" stroke="#1e293b" strokeWidth="1" />
            
            {/* Front Cabin Section */}
            <path d="M140 20 H160 Q180 20 180 40 V60 H140 V20" fill="#0f172a" />
            <path d="M150 25 Q175 25 175 45 H150 V25" fill="#1e293b" /> {/* Windshield */}
            <path d="M152 27 Q170 27 170 42 H152 V27" fill="#60a5fa" fillOpacity="0.2" /> {/* Window Reflection */}
            
            {/* Side Branding Area - EVEN LARGER FOR VISIBILITY */}
            <rect x="35" y="25" width="100" height="50" rx="8" fill="#0f172a" fillOpacity="0.9" stroke="#3b82f6" strokeOpacity="0.4" strokeWidth="1.5" /> 
            
            {/* Logo Placement Container - Maximum Size */}
            <foreignObject x="37" y="27" width="96" height="46">
              <div className="w-full h-full flex items-center justify-center p-0.5" xmlns="http://www.w3.org/1999/xhtml">
                <img src="/logom.png" alt="Logo" className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] scale-110" />
              </div>
            </foreignObject>

            {/* Lights */}
            <circle cx="178" cy="65" r="3" fill="#ffffff" filter="url(#light-glow)" /> {/* Headlight */}
            <circle cx="178" cy="65" r="6" fill="#60a5fa" fillOpacity="0.3" filter="url(#light-glow)" />
            <rect x="20" y="40" width="3" height="15" fill="#ef4444" filter="url(#light-glow)" /> {/* Tail light */}
            
            {/* Wheels */}
            <circle cx="50" cy="85" r="14" fill="#000000" stroke="#334155" strokeWidth="3" />
            <circle cx="150" cy="85" r="14" fill="#000000" stroke="#334155" strokeWidth="3" />
            
            {/* Wheel Detail - Spinning Spokes */}
            <g className="animate-spin-slow" style={{ transformOrigin: '50px 85px' }}>
              <circle cx="50" cy="85" r="4" fill="#64748b" />
              <rect x="49" y="73" width="2" height="24" fill="#64748b" rx="1" />
              <rect x="38" y="84" width="24" height="2" fill="#64748b" rx="1" />
            </g>
            <g className="animate-spin-slow" style={{ transformOrigin: '150px 85px' }}>
              <circle cx="150" cy="85" r="4" fill="#64748b" />
              <rect x="149" y="73" width="2" height="24" fill="#64748b" rx="1" />
              <rect x="138" y="84" width="24" height="2" fill="#64748b" rx="1" />
            </g>
            
            {/* Side Door Detail */}
            <rect x="135" y="25" width="2" height="50" fill="#1e293b" />
          </svg>
        </div>
      </div>
    </div>
  )
}
