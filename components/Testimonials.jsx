'use client'

export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmet Yılmaz",
      rating: 5,
      date: "1 hafta önce",
      text: "iPhone 11 ekran değişimi için gittim. Yarım saatte tertemiz teslim ettiler. WhatsApp üzerinden fiyat sormuştum, söyledikleri fiyatı aldılar. Tavsiye ederim.",
      avatar: "AY"
    },
    {
      name: "Selin Kaya",
      rating: 5,
      date: "2 hafta önce",
      text: "Kurye hizmeti harika! Evimden aldılar, tamir edip akşamına geri getirdiler. Bu devirde böyle kaliteli hizmet bulmak çok zor. Çok profesyoneller.",
      avatar: "SK"
    },
    {
      name: "Murat Can",
      rating: 5,
      date: "1 ay önce",
      text: "Anakart tamiri yapılamaz dedikleri cihazı kurtardılar. Gerçekten uzman oldukları belli. Kocaeli'de telefon tamiri denince tek geçerim.",
      avatar: "MC"
    },
    {
      name: "Zeynep Demir",
      rating: 5,
      date: "2 ay önce",
      text: "Batarya değişimi yaptırdım, telefon sıfır gibi oldu. Güleryüzlü ve dürüst esnaf arıyorsanız doğru yerdesiniz.",
      avatar: "ZD"
    }
  ]

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Gerçek Müşteri Deneyimleri
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
            Mutlu <span className="text-primary">Müşterilerimiz</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-yellow-500">
               {[...Array(5)].map((_, i) => (
                 <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               ))}
            </div>
            <span className="text-xl font-bold text-white">5.0</span>
            <span className="text-slate-400">/ 500+ Google Yorumu</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-white/5 p-6 rounded-3xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-primary transition-colors">{review.name}</h4>
                  <span className="text-slate-500 text-xs">{review.date}</span>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                 {[...Array(review.rating)].map((_, i) => (
                   <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 ))}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "{review.text}"
              </p>
              
              {/* Google Badge/Icon */}
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1 opacity-40">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.12 5.36-7.84 5.36-4.96 0-9-4.12-9-9.2s4.04-9.2 9-9.2c2.84 0 4.76 1.2 5.8 2.2l2.56-2.48C19.2 1.48 16.12 0 12.48 0 5.56 0 0 5.56 0 12.48s5.56 12.48 12.48 12.48c7.2 0 12-5.08 12-12.24 0-.84-.08-1.48-.2-2.12h-11.8z" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-wider font-bold">Google Review</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/place/CEP+Fix/@40.763116,29.932847,15z" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all underline underline-offset-8"
          >
            Tüm Google Yorumlarını Gör
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
