'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PhoneBrands from '@/components/PhoneBrands'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import Testimonials from '@/components/Testimonials'
import RepairTracker from '@/components/RepairTracker'
import ServiceForm from '@/components/ServiceForm'
import FloatingCourier from '@/components/FloatingCourier'
import ScrollToTop from '@/components/ScrollToTop'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Header />
      <Hero />
      
      {/* 1. Quick Validation: Brands supported */}
      <PhoneBrands />
      
      {/* 2. Solutions: What we fix */}
      <Services />
      
      {/* 3. Process: How it works (Courier info) */}
      <HowItWorks />
      
      {/* 4. Visual Proof: Quality of work */}
      <BeforeAfterSlider />
      
      {/* 5. Trust: Customer reviews */}
      <Testimonials />

      {/* 6. Utility: Track your repair */}
      <RepairTracker />

      {/* 7. Conversion: Get a quote/Send request */}
      <ServiceForm />
      
      <Map />
      <FloatingCourier />
      <Footer />
      
      {/* Sticky Components */}
      <ScrollToTop />
      <WhatsAppButton />
    </main>
  )
}