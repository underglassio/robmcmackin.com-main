import Image from 'next/image';
import FadeInOnScroll from './FadeInOnScroll';

export default function About() {
  return (
    <>
      <FadeInOnScroll className="w-full">
        <div
          id="about"
          className="flex-col leading-standard text-base justify-center items-center max-w-3xl mx-auto mb-16 grid grid-cols-10 gap-4"
        >
          <div className="col-span-10 md:col-span-6">
            <h2>Oh hey</h2>
            <div className="mt-2  body prose text-black dark:text-gray-400">
              <p>
                I'm Rob. I’ve been designing things on the internet for most of
                my life, and now do it for clients. I like to build my ideas and
                so have a broad skillset, but naturally fit best with product
                strategy, usability and branding.
              </p>
              <p className="mt-4">
                My most recent role was at{' '}
                <a
                  className="underline"
                  target="_blank"
                  href="http://slite.com"
                  rel="noreferrer"
                >
                  Slite
                </a>
                , a writing tool for remote teams. Before that, I had a 3-year
                stint in the startup world of Seoul. I also designed apps for
                elder care workers at IBM Design & Watson Health.
              </p>
              <p className="mt-4">I'm from Ireland, and now based in Berlin.</p>
            </div>
          </div>
          <div className="col-span-10 md:col-span-4 hidden md:flex items-center justify-end md:justify-end relative pt-3">
            {/* <Image
              alt="me"
              src="/me.png"
              quality={100}
              width={630}
              height={633.4}
            /> */}
            <Image
              alt="Rob McMackin Portrait"
              src="/rob.jpg"
              className="rounded-xl"
              quality={100}
              width={857}
              height={1200}
            />
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}
