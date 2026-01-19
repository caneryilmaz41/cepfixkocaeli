import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-slate-950">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
          <img 
            src="/485.jpg" 
            alt="Background" 
            className="w-full h-full object-cover blur-[4px] scale-105"
          />
          {/* Strong Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-950/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Service Area Badge - Redesigned */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-lg font-medium mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Kocaeli ve Tüm Türkiye'de Hizmetinizdeyiz
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
              Telefonunuz <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-glow">
                Yeniden Hayat Bulsun
              </span>
            </h1>
            
            <p className="text-lg sm:text-x text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kapıdan alım, profesyonel laboratuvar ortamında onarım ve güvenli teslimat. 
              Teknolojinin uzman ellerde, garantili ve hızlı çözüme kavuşsun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={createWhatsAppLink(createQuickMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-blue-600 text-slate-900 font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  Hemen Fiyat Al
                </span>
              </a>
              
              <a
                href="#service-form"
                className="inline-flex items-center justify-center px-8 py-4 glass-dark hover:bg-slate-800 text-white font-medium rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                Servis Talebi Oluştur
              </a>
            </div>



          </div>

          {/* Visual/Image Area */}
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 animate-float">
                {/* Real Phone Look Container */}
                <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  {/* Notch / Dynamic Island */}
                  <div className="w-[120px] h-[30px] bg-gray-900 rounded-b-[1rem] absolute left-1/2 -translate-x-1/2 top-0 z-20"></div>
                  
                  {/* Side Buttons */}
                  <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                  {/* Screen Content */}
                  <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-800 relative">
                     <img 
                        src="/hero-character.jpg" 
                        alt="Telefon Tamir Uzmanı" 
                        className="w-full h-full object-cover"
                     />
                     {/* Glossy reflection */}
                     <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-transparent to-white/10 rounded-[2rem]"></div>
                  </div>
                </div>
             </div>
             
             {/* Decorative Elements behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
