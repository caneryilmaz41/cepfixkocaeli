import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export const metadata = {
  title: 'Servis Bölgeleri - CepfixKocaeli | Kapıdan Alım Teslimat',
  description: 'Türkiye genelinde kapıdan alım ve teslimat hizmeti. Tüm illerde güvenli ve hızlı servis imkanı.',
}

export default function KocaeliBolgelerPage() {
  const districts = [
    {
      name: 'İzmit',
      description: 'Kocaeli\'nin merkez ilçesi. Tüm mahallelerimizde hızlı servis.',
      population: '~380.000',
      serviceTime: '2-4 saat'
    },
    {
      name: 'Gebze',
      description: 'Sanayi bölgesi ve yoğun nüfus. Günlük servis imkanı.',
      population: '~400.000',
      serviceTime: '2-4 saat'
    },
    {
      name: 'Derince',
      description: 'Liman kenti. Hızlı ulaşım ve servis imkanı.',
      population: '~150.000',
      serviceTime: '1-3 saat'
    },
    {
      name: 'Körfez',
      description: 'Kocaeli Körfezi kıyısında. Düzenli servis rotası.',
      population: '~160.000',
      serviceTime: '2-4 saat'
    },
    {
      name: 'Başiskele',
      description: 'Hızla gelişen ilçe. Tüm mahallelerde servis.',
      population: '~90.000',
      serviceTime: '2-4 saat'
    },
    {
      name: 'Kartepe',
      description: 'Doğal güzellikleri ile ünlü. Hafta içi günlük servis.',
      population: '~120.000',
      serviceTime: '3-5 saat'
    },
    {
      name: 'Gölcük',
      description: 'Deniz kıyısında sakin ilçe. Düzenli servis imkanı.',
      population: '~160.000',
      serviceTime: '2-4 saat'
    },
    {
      name: 'Darıca',
      description: 'Sanayi ve konut alanları. Hızlı servis rotası.',
      population: '~200.000',
      serviceTime: '2-4 saat'
    },
    {
      name: 'Çayırova',
      description: 'Yeni gelişen bölge. Günlük servis imkanı.',
      population: '~120.000',
      serviceTime: '2-4 saat'
    }
  ]

  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servis Bölgelerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin her yerinde kapıdan alım ve teslimat hizmeti sunuyoruz. 
            Nerede olursanız olun, size ulaşıyoruz.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districts.map((district, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {district.name}
                  </h3>
                  <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                </div>
                <p className="text-gray-600 mb-4">
                  {district.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>Nüfus:</span>
                    <span className="font-medium">{district.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Servis Süresi:</span>
                    <span className="font-medium text-secondary-600">{district.serviceTime}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={createWhatsAppLink(createQuickMessage(`${district.name} bölgesi`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                  >
                    Servis Talep Et
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Servis Koşulları
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ücretsiz Alım-Teslimat
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tüm büyük şehirlerde
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Minimum 200 TL onarım tutarında
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hafta içi 09:00-18:00 saatleri arası
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kargo ile Servis
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Tüm iller için kargo imkanı
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Güvenli paketleme
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Hızlı teslimat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Türkiye'nin Her Yerinden Hizmet
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Hangi şehirde olursanız olun, kargo ile gönderim imkanımız mevcuttur. 
            Güvenli paketleme ile cihazınızı bize ulaştırın.
          </p>
          <div className="bg-white/10 p-6 rounded-xl mb-8">
            <h3 className="text-lg font-semibold mb-4">Kargo Süreci</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium mb-2">1. İletişim</div>
                <div className="opacity-90">WhatsApp'tan yazın, detayları konuşalım</div>
              </div>
              <div>
                <div className="font-medium mb-2">2. Gönderim</div>
                <div className="opacity-90">Cihazınızı güvenli şekilde kargolayın</div>
              </div>
              <div>
                <div className="font-medium mb-2">3. Teslimat</div>
                <div className="opacity-90">Onarım sonrası kargo ile iade</div>
              </div>
            </div>
          </div>
          <a
            href={createWhatsAppLink(createQuickMessage('Kargo ile servis'))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-secondary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Kargo Servisi İçin Yazın
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}