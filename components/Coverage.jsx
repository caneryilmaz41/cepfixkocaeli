import Link from 'next/link'

export default function Coverage() {
  const districts = [
    'İzmit', 'Gebze', 'Derince', 'Körfez', 
    'Başiskele', 'Kartepe', 'Gölcük', 'Darıca', 'Çayırova'
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hizmet Bölgelerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Türkiye genelinde ücretsiz kapıdan alım ve teslimat
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {districts.map((district, index) => (
            <div key={index} className="bg-white p-4 rounded-xl text-center font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors shadow-sm">
              📍 {district}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">
            Türkiye'nin Her Yerindeyiz
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Tüm illerde kargo ile güvenli gönderim imkanı
          </p>
          <Link 
            href="/kocaeli-bolgeler"
            className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Detaylı Bilgi
          </Link>
        </div>
      </div>
    </section>
  )
}