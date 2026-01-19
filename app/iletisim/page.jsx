import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export const metadata = {
  title: 'İletişim - CepfixKocaeli | Telefon ve Adres Bilgileri',
  description: 'CepfixKocaeli ile iletişime geçin. Telefon, adres, çalışma saatleri ve WhatsApp iletişim bilgileri. Türkiye geneli hizmet.',
}

export default function IletisimPage() {
  return (
    <main>
      <Header />
      
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            İletişim
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Size nasıl yardımcı olabiliriz? Bizimle iletişime geçin, 
            telefon servis ihtiyaçlarınız için buradayız.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-600">+90 XXX XXX XX XX</p>
                    <p className="text-sm text-gray-500 mt-1">Hafta içi 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-600">+90 XXX XXX XX XX</p>
                    <p className="text-sm text-gray-500 mt-1">7/24 Mesaj Atabilirsiniz</p>
                    <a
                      href={createWhatsAppLink(createQuickMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors text-sm font-medium"
                    >
                      Hemen Yaz
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-600">
                      Türkiye Geneli Hizmet<br />
                      (Kapıdan alım-teslimat hizmeti)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Pazartesi - Cumartesi: 09:00 - 18:00</p>
                      <p>Pazar: Kapalı</p>
                      <p className="text-sm text-secondary-600 font-medium">Acil durumlar için WhatsApp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Konum
              </h2>
              
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg font-medium">Google Maps</p>
                  <p className="text-sm">Harita yakında eklenecek</p>
                </div>
              </div>

              <div className="mt-8 bg-primary-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Kapıdan Alım-Teslimat
                </h3>
                <p className="text-gray-600 mb-4">
                  Fiziksel mağazamıza gelmenize gerek yok! Türkiye'nin her yerinde 
                  kapınızdan alım ve teslimat hizmeti sunuyoruz.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ücretsiz alım (şartlar geçerli)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Güvenli teslimat
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Randevu sistemi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sık Sorulan Sorular
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Randevu almam gerekiyor mu?
              </h3>
              <p className="text-gray-600">
                Kapıdan alım için randevu almanız önerilir. WhatsApp'tan yazarak 
                uygun saati belirleyebiliriz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Acil durumlar için ne yapmalıyım?
              </h3>
              <p className="text-gray-600">
                Acil durumlar için WhatsApp'tan 7/24 mesaj atabilirsiniz. 
                Mümkün olan en kısa sürede dönüş yapıyoruz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ödeme nasıl yapabilirim?
              </h3>
              <p className="text-gray-600">
                Nakit, kredi kartı ve havale ile ödeme kabul ediyoruz. 
                Teslimat sırasında ödeme yapabilirsiniz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Garanti süresi ne kadar?
              </h3>
              <p className="text-gray-600">
                Tüm onarımlarımız için 3 ay garanti veriyoruz. 
                Parçalar için ayrıca üretici garantisi geçerlidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hemen İletişime Geçin
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Telefon servis ihtiyaçlarınız için bize ulaşın. 
            Size en uygun çözümü sunalım.
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
              href="tel:+90XXXXXXXXXX"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}