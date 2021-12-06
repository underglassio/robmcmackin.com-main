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
      <a className="text-gray-700 uppercase tracking-widest hover:text-gray-600 dark:text-gray-400 font-bold inline-block px-3 text-xsm transition-all cursor-pointer">
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
        <div className="flex flex-col justify-center px-4">
          <nav className="flex items-center justify-between w-full sticky md:max-w-3xl border-gray-200 dark:border-gray-700 mx-auto py-6  text-gray-900 bg-cream  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
            <div className="flex items-center">
              <MobileMenu />
              <NextLink href="/">
                <a className="mr-3 flex">
                  <Image
                    alt="rmcm"
                    src="/logo-2.svg"
                    width={36}
                    height={36}
                    quality={100}
                  />
                </a>
              </NextLink>
              <NavItem href="/#projects" text="Projects" />
              <NavItem href="/#writing" text="Writing" />
              <NavItem href="/#about" text="About" />
              <NavItem href="mailto:hello@robmcmackin.com" text="Contact" />
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
