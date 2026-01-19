export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'İletişime Geçin',
      description: 'WhatsApp veya form üzerinden arıza durumunu bildirin ve anında fiyat teklifi alın.',
      image: '/step_contact.png'
    },
    {
      number: '02', 
      title: 'Ücretsiz Kargo',
      description: 'Size vereceğimiz kod ile cihazınızı Türkiye\'nin her yerinden ücretsiz gönderin.',
      image: '/step_shipping.png'
    },
    {
      number: '03',
      title: 'Profesyonel Onarım',
      description: 'Cihazınız laboratuvar ortamında uzman teknisyenlerimizce titizlikle onarılır.',
      image: '/step_repair.png'
    },
    {
      number: '04',
      title: 'Güvenli Teslimat',
      description: 'Onarım sonrası testleri yapılan cihazınız, adresinize sigortalı olarak kargolanır.',
      image: '/step_delivery.png'
    }
  ]

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Ambient Light Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-300 font-medium text-lg mb-6 shadow-lg backdrop-blur-sm">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Süreç Nasıl İşliyor?
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
            4 Adımda <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Yenilenme</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Karmaşık süreçlerle uğraşmayın. Kapınızdan alıp, kapınıza teslim ediyoruz.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[100px] left-0 w-full h-1 bg-gradient-to-r from-slate-700 via-blue-900 to-slate-700 rounded-full z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group flex flex-col items-center text-center">
                {/* Image Container with Glow */}
                <div className="w-48 h-48 mb-8 relative transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  />
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-900 border border-blue-500/50 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg z-20">
                    {step.number}
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl w-full h-full hover:bg-slate-800 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector */}
                {index !== steps.length - 1 && (
                   <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-blue-900 to-slate-800 my-4 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Advanced Energy Conduit Connection */}


      {/* Advanced Energy Conduit Connection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-full max-w-lg h-32 z-10 hidden lg:block overflow-visible pointer-events-none">
        <svg className="w-full h-full text-blue-500" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient-cable" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
            </linearGradient>
            <filter id="glow-intense" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Main Central Cable - Pulsing */}
          <path d="M200 0 V100" stroke="url(#gradient-cable)" strokeWidth="4" filter="url(#glow-intense)" className="animate-pulse" />
          
          {/* Left Cables - Draping effect */}
          <path d="M180 0 Q180 40 190 100" stroke="url(#gradient-cable)" strokeWidth="2" strokeOpacity="0.6" fill="none" />
          <path d="M160 0 Q160 30 180 100" stroke="url(#gradient-cable)" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          
          {/* Right Cables - Draping effect */}
          <path d="M220 0 Q220 40 210 100" stroke="url(#gradient-cable)" strokeWidth="2" strokeOpacity="0.6" fill="none" />
          <path d="M240 0 Q240 30 220 100" stroke="url(#gradient-cable)" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          
          {/* Data Packets Animation */}
          <circle r="3" fill="#fff" filter="url(#glow-intense)">
            <animateMotion repeatCount="indefinite" dur="2s" path="M200 0 V100" />
          </circle>
          <circle r="2" fill="#60a5fa">
             <animateMotion repeatCount="indefinite" dur="3s" begin="1s" path="M180 0 Q180 40 190 100" />
          </circle>
          <circle r="2" fill="#60a5fa">
             <animateMotion repeatCount="indefinite" dur="2.5s" begin="0.5s" path="M220 0 Q220 40 210 100" />
          </circle>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900/80 pointer-events-none"></div>
    </section>
  )
}

