'use client'
import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export default function PhoneBrands() {
  const brands = [
    { name: 'Apple', logo: '/apple.svg' },
    { name: 'Samsung', logo: '/samsung.svg' },
    { name: 'Xiaomi', logo: '/xiamoi.svg' },
    { name: 'Huawei', logo: '/huawei.svg' },
    { name: 'Oppo', logo: '/oppo.svg' },
    { name: 'Vivo', logo: '/vivo.svg' },
    { name: 'Realme', logo: '/realme.svg' },
    { name: 'Redmi', logo: '/redmi.svg' },
    { name: 'OnePlus', logo: '/oneplus.svg' },
    { name: 'Meizu', logo: '/meizu.svg' },
    { name: 'TCL', logo: '/tcl.svg' }
  ]

  const handleBrandClick = (brandName) => {
    // Professional message for screen sales quote
    const message = createQuickMessage(`Merhaba, ${brandName} cihazım için ekran satış fiyat bilgisi verir misiniz?`)
    const whatsappLink = createWhatsAppLink(message)
    window.open(whatsappLink, '_blank')
  }

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bgg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover blur-sm opacity-60"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            Orijinal <span className="text-primary">Ekran Satışı</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Cihazınızın markasını seçin ve güncel ekran satış fiyatı için anında bilgi alın.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {brands.map((brand) => (
            <button
              key={brand.name}
              onClick={() => handleBrandClick(brand.name)}
              className="group bg-white border border-white/5 hover:border-transparent rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:bg-slate-50"
            >
              <div className="h-12 w-full flex items-center justify-center relative">
                 <img 
                   src={brand.logo} 
                   alt={brand.name} 
                   className="h-full w-auto object-contain transition-all duration-300 transform group-hover:scale-110"
                 />
              </div>
              <span className="text-sm font-bold text-slate-900">
                {brand.name}
              </span>
            </button>
          ))}
          <button
            onClick={() => handleBrandClick('Diğer marka')}
            className="group bg-white border border-white/5 border-dashed hover:border-transparent rounded-2xl p-6 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:bg-slate-50"
          >
            <span className="text-2xl text-slate-400 group-hover:text-primary transition-colors">+</span>
            <span className="text-sm font-bold text-slate-900 transition-colors">
              Diğer
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
