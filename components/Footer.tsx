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
      <div className="px-4 md:px-0 w-full max-w-3xl md:flex mx-auto pt-16 pb-20">
        <div className="text-2xl md:text-3xl font-black w-full md:w-1/2 leading-tight text-cream pr-2">
          Let's save <br /> the internet.
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-left body font-mono select-none text-cream mb-6 block mt-4 md:mt-0">
            I secretly love emails. Why not send me one about the project I can
            help you with?
          </span>
          <div className="flex flex-col md:flex-row md:items-center">
            <a
              href="mailto:hello@robmcmackin.com"
              className="bg-gray-700 hover:bg-gray-600 transition-colors text-center font px-4 py-3 rounded-lg inline text-base font-bold mr-4 mb-4 md:mb-0"
            >
              hello@robmcmackin.com
            </a>
            <div className="flex items-center">
              <a
                className="text-gray-600 hover:text-gray-500 transition-colors mr-4 block"
                href="http://twitter.com/robbmcm"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.0298 6.57082C29.889 7.07761 28.6614 7.41891 27.3737 7.57301C28.6883 6.78491 29.6977 5.53759 30.1724 4.05135C28.9437 4.78154 27.5795 5.31005 26.1305 5.59654C24.9691 4.35957 23.3132 3.58594 21.4836 3.58594C17.9682 3.58594 15.1178 6.43636 15.1178 9.95182C15.1178 10.4503 15.1746 10.9364 15.2832 11.4029C9.99197 11.1381 5.30161 8.60314 2.1616 4.75155C1.61344 5.69169 1.30006 6.78492 1.30006 7.95157C1.30006 10.1597 2.42223 12.1083 4.13186 13.2501C3.08726 13.217 2.10678 12.9305 1.24731 12.4537V12.5333C1.24731 15.6185 3.44304 18.1908 6.35345 18.7772C5.81977 18.922 5.25713 19.0006 4.67692 19.0006C4.26631 19.0006 3.86709 18.9602 3.47821 18.8858C4.28803 21.4146 6.63994 23.2555 9.4252 23.3073C7.24705 25.0138 4.50212 26.0325 1.51932 26.0325C1.00426 26.0325 0.497478 26.0025 0 25.9425C2.81732 27.7484 6.16314 28.8033 9.75823 28.8033C21.4671 28.8033 27.8702 19.103 27.8702 10.6913C27.8702 10.4152 27.865 10.1401 27.8515 9.86805C29.0968 8.96824 30.1766 7.8471 31.0298 6.57082Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="text-gray-600 hover:text-gray-500 transition-colors"
                href="https://www.linkedin.com/in/rob-mcmackin-57642288/"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.72016 5.95285C7.72016 7.56264 6.49444 8.86541 4.57764 8.86541C2.73551 8.86541 1.5098 7.56264 1.54773 5.95285C1.5098 4.26483 2.73548 3 4.61435 3C6.49441 3 7.68341 4.26483 7.72016 5.95285ZM1.70184 29.9171V11.1663H7.52929V29.9159H1.70184V29.9171Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.201 17.1495C12.201 14.8107 12.1239 12.8168 12.0469 11.1679H17.1086L17.3777 13.7367H17.4927C18.2596 12.5477 20.1764 10.7471 23.2822 10.7471C27.1158 10.7471 29.9917 13.2779 29.9917 18.7972V29.9188H24.1641V19.5274C24.1641 17.1104 23.3213 15.4626 21.2125 15.4626C19.6015 15.4626 18.6437 16.5746 18.2608 17.6474C18.1067 18.0314 18.0308 18.5672 18.0308 19.1054V29.9188H12.2033V17.1495H12.201Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
