import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Lee Robinson">
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, where are you going?
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          There's nothing in here. Come on, I think you've had too much to
          drink, let's get you back to the others.
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-purple dark:bg-gray-800 text-center rounded-md text-cream dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
