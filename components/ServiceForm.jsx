'use client'
import { useState } from 'react'
import { createWhatsAppLink, createServiceRequestMessage } from '@/lib/whatsapp'

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    device: '',
    problem: '',
    note: ''
  })

  const cities = [
    'Adana', 'Ankara', 'Antalya', 'Bursa', 'Diyarbakır', 'Eskişehir', 'Gaziantep', 'İstanbul',
    'İzmir', 'Kayseri', 'Kocaeli', 'Konya', 'Mersin', 'Samsun', 'Diğer'
  ]

  const problems = [
    'Ekran Kırık', 'Batarya', 'Şarj Sorunu', 'Ses/Mikrofon', 'Kamera', 'Su Hasarı', 'Diğer'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.city || !formData.device || !formData.problem) {
      alert('Lütfen tüm alanları doldurun.')
      return
    }

    const message = createServiceRequestMessage(formData)
    const whatsappLink = createWhatsAppLink(message)
    window.open(whatsappLink, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="service-form" className="py-20 relative overflow-hidden bg-slate-800">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Servis <span className="text-primary">Talebi Oluştur</span>
          </h2>
          <p className="text-slate-400">
            Hemen formu doldurun, uzman ekibimiz en kısa sürede size dönüş yapsın.
          </p>
        </div>

        <div className="glass-dark border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-base font-medium text-slate-300 ml-1">
                  Ad Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="İsim Soyisim"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-slate-300 ml-1">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0545 882 39 07"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-slate-300 ml-1">
                  Şehir <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-base"
                  required
                >
                  <option value="" className="bg-slate-900">Şehir Seçiniz</option>
                  {cities.map((city) => (
                    <option key={city} value={city} className="bg-slate-900">
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-base font-medium text-slate-300 ml-1">
                  Cihaz Modeli <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  placeholder="Örn: iPhone 13 Pro"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium text-slate-300 ml-1">
                Yaşadığınız Sorun <span className="text-red-500">*</span>
              </label>
              <select
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-base"
                required
              >
                <option value="" className="bg-slate-900">Sorun Seçiniz</option>
                {problems.map((problem) => (
                  <option key={problem} value={problem} className="bg-slate-900">
                    {problem}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-base font-medium text-slate-300 ml-1">
                Eklemek İstedikleriniz (Not)
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Cihazınızın durumu hakkında ek bilgi verebilirsiniz..."
                rows="4"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full group relative flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 text-lg"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                WhatsApp İle Talep Gönder
              </button>
              <p className="text-center text-slate-500 text-sm mt-4">
                *Bilgileriniz sadece iletişim amaçlı kullanılacaktır.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
