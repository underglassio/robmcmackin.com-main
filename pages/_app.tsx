import 'styles/global.css';
import { useState, useEffect, useRef } from 'react';

import Image from 'next/image';
import NextLink from 'next/link';
import FadeInOnScroll from 'components/FadeInOnScroll';
import cn from 'classnames';
import NextNProgress from 'nextjs-progressbar';
import MobileMenu from 'components/MobileMenu';
import type { AppProps } from 'next/app';
// import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useAnalytics } from 'lib/analytics';
import Head from 'next/head';

import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

function NavItem({ href, text }) {
  return (
    <NextLink href={href}>
      <a
        className={cn(
          ' text-black hover:text-gray-600 dark:text-gray-400 font-medium hidden md:inline-block p-1.5 sm:px-3 sm:py-1.5 text-base rounded-md  dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();
  const router = useRouter();
  const { ...customMeta } = pageProps;
  const meta = {
    title: 'Rob McMackin – Digital Product Design, branding, writing.',
    description: `Helping Startups with Product Design, Branding, Copywriting, and Illustration.`,
    image: 'https://robmcmackin.com/static/images/banner.png',
    type: 'website',
    ...customMeta
  };
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://robmcmackin.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://robmcmackin.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rob McMackin" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@robbmcm" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <FadeInOnScroll>
        <div className="flex flex-col justify-center px-8">
          <nav className="flex items-center justify-between w-full relative md:max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-4 sm:pb-10  text-gray-900 bg-cream  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
            <div className="pl-2 flex items-center">
              <MobileMenu />
              <NextLink href="/">
                <a className="mr-3 flex">
                  <Image
                    alt="rmcm"
                    src="/logo-2.svg"
                    width={42}
                    height={42}
                    quality={100}
                  />
                </a>
              </NextLink>
              <NavItem href="/" text="Work" />
              <NavItem href="/about" text="About" />
              <NavItem href="/contact" text="Contact" />
            </div>
          </nav>
        </div>
      </FadeInOnScroll>
      <NextNProgress color="#ff8bb0" />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        {' '}
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          key={router.asPath}
          exit="exit"
          className="bg-cream dark:bg-gray-900 h-full"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </SessionProvider>
  );
}
