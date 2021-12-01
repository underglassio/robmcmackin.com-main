import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col justify-center text-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-3xl tracking-tight mb-2 text-black dark:text-white">
          404
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Oops! There's nothing here.
        </p>
        <Link href="/">
          <a className="p-1 sm:p-3 w-64 font-bold mx-auto bg-primary dark:bg-gray-800 text-center rounded-md text-cream dark:text-white">
            Go back
          </a>
        </Link>
      </div>
    </Container>
  );
}
