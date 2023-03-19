import DefaultLayout from '@/components/layout/DefaultLayout';
import UseScrollToTop from '@/hooks/useScrollToTop';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  )
}

