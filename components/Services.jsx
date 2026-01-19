import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export default function Services() {
  const services = [
    {
      title: 'Ekran Değişimi',
      description: 'Orijinal kalitede ekran değişimi ile görüntü kalitesinden ödün vermeyin.',
      image: '/ekrandegisimi.jpg',
      linkText: 'Ekran Fiyatı Al'
    },
    {
      title: 'Batarya Yenileme',
      description: 'Güçlendirilmiş bataryalar ile şarj sürenizi ilk günkü performansına getirin.',
      image: '/batarya.png',
      linkText: 'Batarya Fiyatı Al'
    },
    {
      title: 'Su Hasarı Onarımı',
      description: 'Özel solüsyonlar ve ultrasonik temizleme ile korozyon önleyici işlem.',
      image: '/su.png',
      linkText: 'Onarım Bilgisi Al'
    },
    {
      title: 'Anakart Tamiri',
      description: 'Mikroskobik onarım işlemleri ile kurtarılamaz denilen cihazlara hayat veriyoruz.',
      image: '/anakart.png',
      linkText: 'Tamir Fiyatı Al'
    }
  ]

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Complex Circuit Board Background - High Performance SVG */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
            <filter id="circuit-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <path id="trace-path-1" d="M600 0 V100 Q600 150 450 200 T300 350 V450" /> {/* Screen */}
            <path id="trace-path-2" d="M600 0 V100 Q600 150 750 200 T900 350 V450" /> {/* Battery */}
            <path id="trace-path-3" d="M600 0 V120 Q600 300 450 450 T300 650" /> {/* Water */}
            <path id="trace-path-4" d="M600 0 V120 Q600 300 750 450 T900 650" /> {/* Motherboard */}
          </defs>

          {/* Static Circuit Traces */}
          <g stroke="#1e293b" strokeWidth="2" fill="none">
            <use href="#trace-path-1" />
            <use href="#trace-path-2" />
            <use href="#trace-path-3" />
            <use href="#trace-path-4" />
          </g>

          {/* Energetic Flow Animations (Data Packets) */}
          <circle r="4" fill="#60a5fa" filter="url(#circuit-glow)">
             <animateMotion repeatCount="indefinite" dur="4s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
               <mpath href="#trace-path-1"/>
             </animateMotion>
          </circle>
          <circle r="4" fill="#a78bfa" filter="url(#circuit-glow)">
             <animateMotion repeatCount="indefinite" dur="4.2s" begin="0.5s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
               <mpath href="#trace-path-2"/>
             </animateMotion>
          </circle>
          
           {/* Animated Particles flowing to bottom cards */}
           <circle r="3" fill="#3b82f6" opacity="0.8">
             <animateMotion repeatCount="indefinite" dur="5s" begin="1s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
               <mpath href="#trace-path-3"/>
             </animateMotion>
          </circle>
           <circle r="3" fill="#8b5cf6" opacity="0.8">
             <animateMotion repeatCount="indefinite" dur="5.5s" begin="1.5s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
               <mpath href="#trace-path-4"/>
             </animateMotion>
          </circle>

          {/* Connection Hub Graphics */}
          <circle cx="600" cy="0" r="40" fill="url(#circuit-flow)" filter="url(#circuit-glow)" opacity="0.5" />
          <circle cx="600" cy="0" r="20" stroke="#60a5fa" strokeWidth="2" fill="none" className="animate-ping" style={{animationDuration: '3s'}} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 pt-12 relative">
          {/* Central Connection Processor */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 h-24 bg-slate-900 border border-slate-700/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] z-0">
             <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="w-12 h-12 border-2 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full"></div>
             </div>
             <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 relative z-10">
            Profesyonel <span className="text-primary">Çözümler</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg relative z-10">
            Her marka ve model için garantili parça, uzman işçilik ve hızlı teslimat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-6 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="w-40 h-40 mb-6 relative transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-contain relative z-10 drop-shadow-xl"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300">
                {service.description}
              </p>
              
              <a
                href={createWhatsAppLink(createQuickMessage(service.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
              >
                {service.linkText}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
