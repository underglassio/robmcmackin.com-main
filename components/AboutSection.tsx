import Image from 'next/image';
import FadeInOnScroll from './FadeInOnScroll';

export default function About() {
  return (
    <>
      <FadeInOnScroll>
        <div className="flex-col leading-standard text-base justify-center items-start max-w-3xl mx-auto mb-16 grid grid-cols-10 gap-4">
          <div className="col-span-10 md:col-span-6">
            <a className="anchor" id="about" />
            <h2>Oh hey</h2>
            <div className="mt-4  body  text-black dark:text-gray-400">
              <p>
                I'm Rob. I’ve been designing digital stuff for most of my life.
                I also find myself writing, coding, illustrating, and reminding
                myself that being a generalist is fine.
              </p>
              <p className="mt-4">
                My most recent role was at <a href="http://slite.com">Slite</a>,
                a writing tool for remote teams. We were remote before it was{' '}
                <s>cool</s> necessitated by a pandemic.
              </p>
              <p className="mt-4">
                Before that, I had a 3-year stint in the startup world of Seoul.
                I also designed apps for elder care workers at IBM Design &
                Watson Health.
              </p>
              <p className="mt-4">Originally from Dublin, now in Berlin.</p>
            </div>
          </div>
          <div className="col-span-10 md:col-span-4 hidden md:flex items-center justify-center md:justify-end relative pt-8">
            <Image
              alt="me"
              src="/me.png"
              quality={100}
              width={315}
              height={316.7}
            />
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}
