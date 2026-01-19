'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createWhatsAppLink, createQuickMessage } from '@/lib/whatsapp'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logom.png" 
              alt="Cepfix Kocaeli" 
              className="h-20 sm:h-28 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          
            {/* Actions Area */}
          <div className="flex items-center gap-4 sm:gap-6">

            <a
              href={createWhatsAppLink(createQuickMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-blue-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300 flex items-center gap-2 group transform hover:scale-105 border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Hemen Fiyat Al</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}