import Container from 'components/Container';
import Button from 'components/Button';

export default function Contact() {
  return (
    <Container>
      <div className="flex-col justify-center items-start max-w-3xl mx-auto mb-16 grid grid-cols-6">
        <div className="col-span-6 md:col-span-4">
          <h1 className="font-bold text-2xl md:text-2xl tracking-tight mt-2 mb-3 text-black dark:text-white">
            Get in touch
          </h1>
          <div className="mb-8 leading-7 text-black dark:text-gray-400">
            <p className="text-md">
              Let’s discuss your wildest product design dreams and how we could
              make them a reality.
            </p>
            <div className="text-base leading-standard">
              <p className="mt-4">
                Feel free to get in touch if you’d like to discuss working
                together. This can be for a project, design consulting calls, or
                just an intro.
              </p>
            </div>
            <div className="inline-block">
              <a
                className="mt-10 mb-4 block"
                href="mailto:hello@robmcmackin.com"
              >
                <Button primary>
                  <>Contact me</>
                </Button>
              </a>
              <div className="block rounded-lg font-medium arrow-box cursor-default bg-primary-lighter py-2 px-3 text-primary-dark">
                Limited availability from Feb 2022
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2" />
      </div>
    </Container>
  );
}
