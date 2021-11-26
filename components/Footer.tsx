import cn from 'classnames';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start w-full bg-black footer">
      <div className="w-full h-[.1rem] flex">
        {[...Array(12)].map((e, i) => (
          <div
            className={cn(
              i % 2 ? 'bg-primary' : 'bg-secondary',
              'h-[.25rem] w-1/12'
            )}
            key={i}
          />
        ))}
      </div>
      <div className="w-full max-w-3xl flex mx-auto pt-16 pb-20 px-2 ">
        <div className="text-2xl font-black w-full md:w-1/2 leading-tight text-cream pr-2">
          Let's save <br /> the internet.
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-base text-left leading-normal font-normal text-cream mb-8 block">
            Don't tell anyone, but I secretly love emails. Why not shoot me one
            about the project we could join forces on?
          </span>
          <div className="bg-gray-700 font p-4 rounded-lg inline text-base font-bold">
            hello@robmcmackin.com
          </div>
        </div>
      </div>
    </footer>
  );
}
