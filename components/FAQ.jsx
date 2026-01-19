'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Ücretsiz alım var mı?',
      answer: 'Büyük şehirlerde ücretsiz kapıdan alım ve teslimat. Diğer bölgeler için kargo imkanı.',
    },
    {
      question: 'Onarım süresi?',
      answer: 'Basit onarımlar 1-2 gün, karmaşık onarımlar 3-5 gün.',
    },
    {
      question: 'Garanti var mı?',
      answer: 'Tüm onarımlar için 3 ay garanti veriyoruz.',
    },
    {
      question: 'Verilerim silinir mi?',
      answer: 'Hayır, verilerinize dokunmuyoruz. Yedekleme önerilir.',
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Sık Sorulan Sorular
          </h2>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden border border-slate-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-900 text-sm sm:text-base pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-slate-600 text-xs sm:text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
