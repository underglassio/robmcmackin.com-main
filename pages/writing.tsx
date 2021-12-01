import Container from 'components/Container';

export default function Writing() {
  return (
    <Container>
      <div className="flex-col justify-center items-start max-w-3xl mx-auto mb-16 grid grid-cols-6">
        <div className="col-span-4">
          <h1 className="font-bold text-2xl md:text-2xl tracking-tight mt-2 mb-3 text-black dark:text-white">
            Writing
          </h1>
          <div className="mb-8 leading-7 text-black dark:text-gray-400">
            <p className="text-md">
              I’ve been building digital products and brands for over seven
              years. I also find myself writing, coding, illustrating and
              telling myself that being a generalist is fine.
            </p>
            <div className="text-base leading-standard">
              <p className="mt-4">
                I was most recently at Slite, a writing tool for remote teams.
                We worked remotely before it was “cool” (necessitated by a
                global pandemic).
              </p>
              <p className="mt-4">
                Before that, I worked for 3 years in Seoul, South Korea in a
                couple of startups. I also worked at IBM Design & Watson Health,
                where I facilitated Design Thinking and designed apps for
                elder-care workers.
              </p>
              <p className="mt-3">
                I’m originally from Dublin, Ireland, but holding out in Berlin.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2" />
      </div>
    </Container>
  );
}
