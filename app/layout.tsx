import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans-arabic',
});

export const metadata: Metadata = {
  title: 'رفيق اللمعة | SparkMate – أفضل شركة تنظيف منازل بالمدينة المنورة',
  description: 'رفيق اللمعة (SparkMate) يقدم أفضل خدمات تنظيف شقق وفلل وعمائر ومساجد بالمدينة المنورة. تنظيف شامل وتأهيلي للمنازل الجديدة والمأهولة، غسيل سجاد وكنب بالبخار تحت إشراف طاقم سعودي مؤهل وبأفضل الأسعار.',
  keywords: [
    'شركة تنظيف بالمدينة المنورة',
    'تنظيف منازل بالمدينة المنورة',
    'شركة تنظيف شقق بالمدينة المنورة',
    'شركة تنظيف فلل بالمدينة المنورة',
    'تنظيف منازل المدينة المنورة',
    'رفيق اللمعة',
    'شركة رفيق اللمعة',
    'SparkMate',
    'تطهير وتعقيم بالمدينة المنورة',
    'شركة تنظيف كنب بالمدينة المنورة',
    'شركة غسيل سجاد بالمدينة المنورة',
    'أفضل شركة تنظيف في المدينة المنورة',
    'تنظيف بيوت بالمدينة المنورة'
  ],
  alternates: {
    canonical: 'https://sparkmate.sa',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'رفيق اللمعة | SparkMate – شركة تنظيف منازل بالمدينة المنورة',
    description: 'رفيق اللمعة يوفر خدمات تنظيف احترافية متكاملة (تأهيلية وشاملة) للمنازل والفلل والبيوت الجديدة بمواد آمنة وبأيدي فريق مختص تحت إشراف سعودي.',
    url: 'https://sparkmate.sa',
    siteName: 'رفيق اللمعة | SparkMate',
    images: [
      {
        url: 'https://sparkmate.sa/images/reliable_cleaning_company.png',
        width: 1200,
        height: 900,
        alt: 'طاقم رفيق اللمعة للتنظيف الاحترافي بالمدينة المنورة',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رفيق اللمعة | SparkMate – شركة تنظيف منازل بالمدينة المنورة',
    description: 'رفيق اللمعة يوفر خدمات تنظيف احترافية متكاملة (تأهيلية وشاملة) للمنازل والفلل والبيوت الجديدة بمواد آمنة وبأيدي فريق مختص تحت إشراف سعودي.',
    images: ['https://sparkmate.sa/images/reliable_cleaning_company.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'رفيق اللمعة | SparkMate',
    'image': 'https://sparkmate.sa/images/reliable_cleaning_company.png',
    '@id': 'https://sparkmate.sa/#localbusiness',
    'url': 'https://sparkmate.sa',
    'telephone': '+966559205714',
    'priceRange': 'SAR 229 - SAR 1449',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'المدينة المنورة',
      'addressLocality': 'المدينة المنورة',
      'addressRegion': 'منطقة المدينة المنورة',
      'addressCountry': 'SA'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.4672',
      'longitude': '39.6112'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      'https://www.tiktok.com/@sparkmate.sa',
      'https://www.instagram.com/sparkmate.sa'
    ]
  };

  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable}`}>
      <head>
        {/* Dynamic Schema.org structured data for LocalBusiness SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TNYL60VVEK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TNYL60VVEK');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="font-sans">
        {children}
      </body>
    </html>
  );
}
