import 'styles/global.css';

import Image from 'next/image';
import NextLink from 'next/link';
import FadeInOnScroll from 'components/FadeInOnScroll';
import cn from 'classnames';
import NextNProgress from 'nextjs-progressbar';
import MobileMenu from 'components/MobileMenu';
import type { AppProps } from 'next/app';

import Button from 'components/Button';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
// import { useAnalytics } from 'lib/analytics';
import Head from 'next/head';

import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

const handExitComplete = (): void => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url
    const hashId = window.location.hash;
    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);
      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }
};

function NavItem({ href, text }) {
  return (
    <NextLink passHref href={href}>
      <a className="text-gray-700 uppercase tracking-widest hover:text-gray-600 dark:text-gray-400 font-bold hidden md:inline-block px-3 text-xsm transition-all cursor-pointer">
        {text}
      </a>
    </NextLink>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  // useAnalytics();
  const router = useRouter();
  const { ...customMeta } = pageProps;
  const meta = {
    title: 'Rob McMackin – Digital Product Design and Branding',
    description: `Helping to make digital stuff that people love.`,
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
        <div className="flex flex-col justify-center px-4">
          <nav className="flex items-center justify-between w-full z-50 sticky md:max-w-3xl border-gray-200 dark:border-gray-700 mx-auto py-6  text-gray-900 bg-cream  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
            <div className="flex items-center justify-between md:justify-start w-full">
              <NextLink href="/">
                <a className="mr-3 flex">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41 0H8C3.58172 0 0 3.58172 0 8V41C0 45.4183 3.58172 49 8 49H41C45.4183 49 49 45.4183 49 41V8C49 3.58172 45.4183 0 41 0Z"
                      fill="#FF8BB0"
                    />
                    <path
                      d="M38.9819 36.5245C38.7667 34.0097 38.9819 31.1806 38.6608 28.6658C38.6608 25.6198 34.7408 26.706 32.4699 26.5818C32.3279 26.574 32.1847 26.5645 32.0491 26.5213C31.7251 26.418 31.1363 26.081 31.1363 24.9942C31.1197 24.6212 31.2418 24.2549 31.48 23.9632C31.9649 23.4351 32.8095 23.5105 33.5321 23.5514C34.6547 23.6151 36.3779 23.6788 37.489 23.3182C38.2154 23.0825 38.7752 22.4292 38.9361 21.6827C39.1069 20.8899 38.8976 20.013 38.7475 19.2134C38.4739 17.8953 38.3917 16.546 38.5034 15.2054C38.6029 14.1052 39.0558 12.7755 38.3396 11.7853C37.7648 10.9869 36.6825 10.7354 35.7383 10.7323C34.5437 10.7323 33.3779 11.0906 32.1768 10.9743C31.056 10.8706 30.022 10.3991 28.9333 10.1539C26.5665 9.61634 24.3859 10.6411 22.0608 10.8769C18.6438 11.2227 11.2254 8.34323 10.4996 13.5394C10.2138 15.6267 11.1258 17.6605 11.1419 19.7383C11.1419 21.9671 9.91193 23.9255 10.005 26.195C10.0982 28.3955 10.8047 30.5645 10.824 32.7963C10.824 34.3304 9.61327 37.8636 11.9287 38.4546C13.9936 39.2625 15.4998 37.3607 17.4235 38.0114C19.2315 38.6401 21.2611 39.2153 22.9568 37.9516C24.6524 36.688 23.5605 34.4938 23.9973 32.5229C24.4084 30.6745 26.8234 30.8757 27.2087 32.6266C27.44 33.6325 27.2087 34.7736 27.1252 35.7858C27.0891 36.2379 26.9881 36.8647 27.0252 37.4456C27.0914 38.4809 28.1871 39.0492 29.2231 38.994C29.5223 38.978 29.8203 38.9303 30.1119 38.8507C30.8473 38.6275 31.5795 38.3383 32.3599 38.3351C33.5089 38.3305 35.7137 39.036 36.852 38.8792C37.9974 38.7215 39.1197 38.1588 38.9819 36.5245Z"
                      fill="#FBFAFC"
                    />
                  </svg>
                </a>
              </NextLink>
              <MobileMenu />

              <NavItem href="/#projects" text="Projects" />
              <NavItem href="/#writing" text="Writing" />
              <NavItem href="/#about" text="About" />
              <NavItem href="mailto:rob.h.mcmackin@gmail.com" text="Contact" />
            </div>
          </nav>
        </div>
      </FadeInOnScroll>
      <NextNProgress color="#ff8bb0" />
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          key={router.route}
          className="bg-cream dark:bg-gray-900 h-full"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </SessionProvider>
  );
}
