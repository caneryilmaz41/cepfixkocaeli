'use client'

export default function Map() {
  // Direct link for the "Yol Tarifi Al" button
  const directionsUrl = "https://www.google.com/maps/dir//CEP+Fix,+%C3%96mera%C4%9Fa,+Belsa+Plaza+Giri%C5%9F+Kat+No:+79,+41040+%C4%B0zmit%2FKocaeli/@40.764921,29.9273288,17z"
  
  // Embed URL for the map display
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.91684346761!2d29.9273288!3d40.764921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb45cd8a38c823%3A0x1d4a0f44357599c2!2sCEP%20Fix!5e0!3m2!1str!2str!4v1737319200000!5m2!1str!2str"

  return (
    <section className="w-full h-[500px] relative mt-12 overflow-hidden group">
      {/* Map Iframe */}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cepfix Kocaeli Ofis Konumu"
        className="w-full h-full grayscale-0 contrast-[1.1] brightness-90 transition-all duration-700"
      ></iframe>
      
      {/* Decorative Overlays */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
      
      {/* Directions Button Overlay - Always Visible */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300">
        <a 
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-blue-600 text-slate-900 font-black px-8 py-4 rounded-2xl shadow-[0_0_35px_rgba(59,130,246,0.6)] flex items-center gap-3 transition-all transform hover:scale-110 active:scale-95 whitespace-nowrap"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          OFİSE YOL TARİFİ AL
        </a>
      </div>

      {/* Floating Info Badge */}
      <div className="absolute bottom-16 left-6 z-20 pointer-events-none">
        <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-white font-bold text-sm">CEP Fix Ofis</p>
          </div>
          <p className="text-slate-400 text-xs">Belsa Plaza Giriş Kat No: 79</p>
        </div>
      </div>
    </section>
  )
}
