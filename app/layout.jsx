import './globals.css'
import { Outfit } from 'next/font/google'
import Preloader from '@/components/Preloader'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Cepfix Kocaeli | İzmit Telefon Tamiri & Ekran Değişimi | Kapıdan Alım',
  description: 'Kocaeli İzmit\'te profesyonel telefon tamiri. Ekran değişimi, batarya yenileme ve anakart onarımı. Cepfix Kurye ile kapınızdan alıyor, onarıp teslim ediyoruz.',
  keywords: 'Kocaeli telefon tamiri, İzmit telefon tamiri, iPhone ekran değişimi Kocaeli, Samsung tamir İzmit, telefon teknik servis, cep telefonu tamiri, ekran değişimi fiyatları',
  metadataBase: new URL('https://cepfixkocaeli.com'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cepfix Kocaeli | Profesyonel Telefon Teknik Servisi',
    description: 'Kapınızdan kurye ile alıyoruz, garantili onarıyoruz. Kocaeli\'nin en güvenilir telefon tamir servisi.',
    url: 'https://cepfixkocaeli.com',
    siteName: 'Cepfix Kocaeli',
    images: [
      {
        url: '/og-image.jpg', // Ensure this image exists eventually
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cepfix Kocaeli | İzmit Telefon Tamiri',
    description: 'Hızlı, güvenilir ve garantili telefon onarımı. Kapınızdan alıyoruz!',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cepfix Kocaeli",
    "image": "https://cepfixkocaeli.com/logom.png",
    "@id": "https://cepfixkocaeli.com",
    "url": "https://cepfixkocaeli.com",
    "telephone": "05458823907",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ömerağa Mah. Belsa Plaza Giriş Kat No: 79",
      "addressLocality": "İzmit",
      "addressRegion": "Kocaeli",
      "postalCode": "41040",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.763116,
      "longitude": 29.932847
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/cepfixkocaeli" // Corrected if needed
    ]
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  )
}