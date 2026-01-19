import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export const metadata = {
  title: 'Hizmetlerimiz - CepfixKocaeli | Telefon Tamiri Hizmetleri',
  description: 'Ekran değişimi, batarya yenileme, sıvı teması onarımı, anakart tamiri ve daha fazlası. Türkiye genelinde profesyonel telefon tamiri hizmetleri.',
}

export default function HizmetlerPage() {
  const services = [
    {
      title: 'Ekran Değişimi',
      description: 'Kırık, çizik veya dokunmatik sorunu olan ekranları orijinal kalitede değiştiriyoruz. Tüm telefon modellerine uygun ekran parçalarımız mevcuttur.',
      features: ['Orijinal kalite parçalar', 'Hızlı değişim', '3 ay garanti', 'Ücretsiz muayene'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Batarya Yenileme',
      description: 'Şarj tutmayan, şişen veya hızla biten bataryaları orijinal kalitede değiştiriyoruz. Performansınızı eski haline getiriyoruz.',
      features: ['Yüksek kapasiteli bataryalar', 'Hızlı şarj desteği', 'Uzun ömür garantisi', 'Güvenli değişim'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    {
      title: 'Sıvı Teması Onarımı',
      description: 'Suya düşen veya sıvı teması yaşayan cihazları özel yöntemler ve ekipmanlarla kurtarıyoruz. Hızlı müdahale kritik önemde.',
      features: ['Özel kurutma teknikleri', 'Anakart temizliği', 'Korozyon giderme', '24 saat hızlı servis'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Anakart Tamiri',
      description: 'Şarj sorunu, ses problemi, wifi bağlantı sorunları gibi anakart arızalarını mikro lehimleme ile gideriyoruz.',
      features: ['Mikro lehimleme', 'IC değişimi', 'Devre onarımı', 'Detaylı test'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'Kamera Onarımı',
      description: 'Ön ve arka kamera sorunları, odaklama problemleri, cam değişimi gibi kamera ile ilgili tüm sorunları çözüyoruz.',
      features: ['Kamera modülü değişimi', 'Lens temizliği', 'Odaklama ayarı', 'Kalite testi'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Ses ve Mikrofon',
      description: 'Hoparlör, kulaklık, mikrofon sorunları için profesyonel onarım hizmeti sunuyoruz.',
      features: ['Hoparlör değişimi', 'Mikrofon onarımı', 'Ses kalitesi testi', 'Su hasarı onarımı'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    }
  ]

  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tüm telefon modellerine profesyonel onarım hizmeti. Kapınızdan alır, onarır, geri getiririz.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-primary-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-secondary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={createWhatsAppLink(createQuickMessage(service.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Fiyat Sor
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hemen Servis Talebi Oluşturun
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Hangi hizmete ihtiyacınız varsa, size en uygun çözümü sunalım
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createWhatsAppLink(createQuickMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-600 transition-colors"
            >
              WhatsApp'tan Yaz
            </a>
            <a
              href="/#service-form"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Form Doldur
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}