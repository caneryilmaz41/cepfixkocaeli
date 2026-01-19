import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 font-sans border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="inline-block group">
              <img 
                src="/logom.png" 
                alt="Cepfix Kocaeli" 
                className="h-28 w-auto object-contain brightness-110 contrast-125 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              15 yılı aşkın teknik tecrübemizle, Kocaeli'den tüm Türkiye'ye profesyonel akıllı telefon ve tablet onarım hizmeti sunuyoruz.
            </p>
            <div className="flex gap-4">
               {['instagram', 'facebook', 'twitter'].map((social) => (
                 <a 
                   key={social} 
                   href="#" 
                   className="w-10 h-10 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                 >
                   <span className="sr-only">{social}</span>
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"/>
                   </svg>
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg tracking-tight">Hizmetlerimiz</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="hover:text-primary transition-colors">Ekran Değişimi</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Batarya Yenileme</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Anakart Tamiri</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Sıvı Teması Onarımı</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-bold text-lg tracking-tight">Merkez Ofis</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <p className="text-sm leading-loose">
                    Ömerağa Mah. Belsa Plaza Giriş Kat<br/>
                    No: 79 Cep Fix İzmit / Kocaeli
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">0545 882 39 07</p>
                    <p className="text-slate-500 text-xs">Aramak için dokunun</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="text-white font-semibold">Çalışma Saatleri</p>
                    <p>H.İçi: 09:00 - 19:00</p>
                    <p>Cmt: 10:00 - 17:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <p className="text-sm font-medium">cuneytcanaz41@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-medium">© 2026 CepfixKocaeli. Tüm hakları saklıdır.</p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <span className="text-white/10">|</span>
              <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            </div>
          </div>

          {/* Developer Branding */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Web Tasarım & Yazılım</span>
            <a 
              href="https://pixenlydigital.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary/5"
            >
              <img 
                src="/pixenly.png" 
                alt="Pixenly Digital" 
                className="h-10 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}