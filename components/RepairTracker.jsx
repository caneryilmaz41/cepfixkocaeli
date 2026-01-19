'use client'
import { useState } from 'react'
import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export default function RepairTracker() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    // Simulate API delay
    setTimeout(() => {
      setLoading(false)
      // Mock result - in real app would check backend
      setResult({
        status: 'Onarımda',
        device: 'iPhone 13 Pro',
        estimatedCompletion: '2 İş Günü',
        details: 'Ekran değişimi işlemi devam ediyor. Test aşamasına geçilecek.',
        progress: 65
      })
    }, 1500)
  }

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Cihaz Durum <span className="text-blue-500">Sorgulama</span>
            </h2>
            <p className="text-slate-400">
              Servis takip numaranız veya telefon numaranız ile cihazınızın son durumunu öğrenin.
            </p>
         </div>

         <div className="glass-dark border border-white/10 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
               <input 
                  type="text" 
                  placeholder="Takip No. veya Tel No. (Örnek: 0555...)" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  required
               />
               <button 
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
               >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sorgulanıyor
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      Sorgula
                    </>
                  )}
               </button>
            </form>

            {/* Mock Result Area */}
            {result && (
              <div className="animate-accordion-down border-t border-white/10 pt-8">
                 <div className="grid sm:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                           </div>
                           <div>
                              <p className="text-slate-400 text-sm">Cihaz</p>
                              <p className="text-white font-bold text-lg">{result.device}</p>
                           </div>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Durum:</span>
                              <span className="text-yellow-400 font-bold">{result.status}</span>
                           </div>
                           <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Tahmini Bitiş:</span>
                              <span className="text-white">{result.estimatedCompletion}</span>
                           </div>
                           <div className="bg-slate-800 rounded-lg p-3 text-xs text-slate-300 border border-slate-700">
                              {result.details}
                           </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                       <p className="text-slate-400 text-sm mb-1 text-center">İşlem İlerlemesi</p>
                       <div className="relative pt-1">
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-800">
                             <div style={{ width: `${result.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-1000 ease-out"></div>
                          </div>
                       </div>
                       
                       <a
                          href={createWhatsAppLink(`Merhaba, ${query} numaralı cihazım hakkında detaylı bilgi almak istiyorum.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                        >
                          WhatsApp'tan Detaylı Bilgi Al
                        </a>
                    </div>
                 </div>
              </div>
            )}
         </div>
      </div>
    </section>
  )
}
