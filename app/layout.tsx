import type {Metadata} from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css'; // Global styles

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans-arabic',
});

export const metadata: Metadata = {
  title: 'رفيق اللمعة | SparkMate – رفيقك في النظافة واللمعان',
  description: 'رفيق اللمعة يقدم خدمات تنظيف احترافية تُعيد لمنزلك بريقه وجماله في المدينة المنورة.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable}`}>
      <body suppressHydrationWarning className="font-sans">{children}</body>
    </html>
  );
}
