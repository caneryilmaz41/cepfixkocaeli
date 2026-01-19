'use client'
import { useState } from 'react'
import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export default function PriceEstimator() {
  const [step, setStep] = useState(1)
  const [selection, setSelection] = useState({ brand: '', model: '', issue: '' })

  const brands = ['Apple', 'Samsung', 'Xiaomi', 'Huawei']
  const models = {
    'Apple': ['iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 11'],
    'Samsung': ['Galaxy S24', 'Galaxy S23', 'Galaxy A54', 'Galaxy A34'],
    'Xiaomi': ['Redmi Note 13', 'Redmi Note 12', '13 Pro', '13T'],
    'Huawei': ['P60 Pro', 'Nova 11', 'P50 Pocket', 'Mate 50']
  }
  const issues = [
    { id: 'screen', name: 'Ekran Kırık / Çatlak', price: '₺500 - ₺1500' },
    { id: 'battery', name: 'Batarya Değişimi', price: '₺300 - ₺800' },
    { id: 'charging', name: 'Şarj Sorunu', price: '₺200 - ₺600' },
    { id: 'camera', name: 'Kamera Arızası', price: '₺400 - ₺1200' },
    { id: 'water', name: 'Sıvı Teması', price: 'İnceleme Gerekli' }
  ]

  const handleSelect = (key, value) => {
    setSelection(prev => ({ ...prev, [key]: value }))
    setStep(prev => prev + 1)
  }

  const reset = () => {
    setStep(1)
    setSelection({ brand: '', model: '', issue: '' })
  }

  return (
    <section className="py-20 bg-slate-800 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Anlık Fiyat <span className="text-primary">Hesaplayıcı</span>
          </h2>
          <p className="text-slate-400">
            Cihazınızın Marka, Model ve Sorununu seçin, tahmini fiyat aralığını hemen öğrenin.
          </p>
        </div>

        <div className="glass-dark border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }}></div>

          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold text-white mb-6">Cihazınızın Markası</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleSelect('brand', brand)}
                    className="p-4 rounded-xl bg-slate-800 hover:bg-primary/20 border border-white/5 hover:border-primary/50 transition-all text-white font-medium text-lg hover:scale-105"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-white mb-4 flex items-center gap-1">← Geri</button>
              <h3 className="text-xl font-bold text-white mb-6">{selection.brand} Modeli</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {models[selection.brand]?.map((model) => (
                  <button
                    key={model}
                    onClick={() => handleSelect('model', model)}
                    className="p-4 rounded-xl bg-slate-800 hover:bg-primary/20 border border-white/5 hover:border-primary/50 transition-all text-white font-medium hover:scale-105"
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <button onClick={() => setStep(2)} className="text-sm text-slate-500 hover:text-white mb-4 flex items-center gap-1">← Geri</button>
              <h3 className="text-xl font-bold text-white mb-6">Yaşadığınız Sorun</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {issues.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => handleSelect('issue', issue)}
                    className="p-4 rounded-xl bg-slate-800 hover:bg-primary/20 border border-white/5 hover:border-primary/50 transition-all text-white font-medium text-left flex justify-between items-center group"
                  >
                    <span>{issue.name}</span>
                    <span className="text-slate-500 group-hover:text-primary transition-colors">Seç &rarr;</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center animate-fade-in py-8">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Tahmini Onarım Ücreti</h3>
              <p className="text-slate-400 mb-6">{selection.brand} {selection.model} - {selection.issue.name}</p>
              
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-8">
                {selection.issue.price}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a
                  href={createWhatsAppLink(`Merhaba, ${selection.brand} ${selection.model} cihazım için ${selection.issue.name} fiyatı aldım (${selection.issue.price}). Randevu oluşturmak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  WhatsApp'tan Randevu Al
                </a>
                <button onClick={reset} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all">
                  Yeni Hesaplama
                </button>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                *Fiyatlar tahmini olup, cihazın detaylı incelenmesi sonrası netleşecektir. Döviz kuruna bağli değişiklik gösterebilir.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
