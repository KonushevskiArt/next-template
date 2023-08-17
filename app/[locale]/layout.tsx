import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './Providers';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ru'}];
}


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'labor-market',
  description: 'My mini labor market app',
}

type Params = {
  children: React.ReactElement,
  params: {
    locale: string
  }
}

export default async function LocaleLayout({children, params: {locale}}: Params) {
  let messages;

  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const classes = `${inter.className} transition duration-100 flex flex-col dark:bg-slate-700  bg-slate-50 justify-center items-center h-screen dark:text-slate-50 text-slate-700`;

 
  return (
    
    <html lang={locale} suppressHydrationWarning>
      <body className={classes}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            <main className='max-w-7xl w-full flex flex-col grow p-5 h-4/6 overflow-auto'>
              {children}
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}