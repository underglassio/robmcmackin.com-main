import Image from 'next/image';
import Link from 'next/link';

import Logo from '../public/logo.svg';
import Container from '../components/Container';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start w-full max-w-4xl  mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-center w-full relative py-11">
          <div className="flex flex-col pr-8">
            <div className="flex items-center mb-4">
              <Image
                alt="Rob McMackin"
                width={84}
                height={84}
                src="/logo.svg"
              />
              <h1 className="font-black text-3xl md:text-5xl tracking-tight mt-1 ml-3 text-black dark:text-white">
                Rob
                <br /> M<span style={{ letterSpacing: '-2px' }}>c</span>Mackin
              </h1>
            </div>
            <h2 className="text-black text-base dark:text-gray-200 m">
              Helping startups design next generation <br /> digital products
              and brands.
            </h2>
          </div>
          <div className="absolute -right-12">
            <Image
              alt="Product Design and Branding"
              width={481}
              height={350}
              src="/hero.png"
              quality={100}
            />
          </div>
        </div>
        {/* Project Section */}
        <div className="py-11 w-full flex-wrap">
          <h3 className="font-bold text-md md:text-2xl tracking-tight mb-6 text-black dark:text-white">
            Featured Projects
          </h3>
          <div className="flex w-full flex-wrap">
            <FeaturedProjectCard title="Slite" description="" slug="slite" />
            <FeaturedProjectCard
              title="Beyond Translation"
              description=""
              image=""
              slug="beyond-translation"
            />
            <FeaturedProjectCard title="Slite" description="" slug="slite" />
            <FeaturedProjectCard
              title="Beyond Translation"
              description=""
              image=""
              slug="beyond-translation"
            />
          </div>
        </div>
        {/* Project Section */}
        <h3 className="font-bold text-md md:text-2xl tracking-tight mb-6 text-black dark:text-white">
          Product Analysis
        </h3>
        <div className="flex gap-6 flex-col md:flex-row"></div>
        <span className="h-16" />
        <Subscribe />
      </div>
    </Container>
  );
}
