import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  primary?: Boolean;
  className?: string;
  children?: object;
  ghost?: Boolean;
  href?: string;
  arrow?: Boolean;
  target?: string;
  reverse?: Boolean;
  rel?: string;
};
function Arrow(reverse) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1.5 mr-1.5 mt-[1px] group-hover:animate-bump transition-all ease-out"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 0H5.5C4.94772 0 4.5 0.447715 4.5 1C4.5 1.55228 4.94772 2 5.5 2H10.0858L0.292893 11.7929C-0.0976315 12.1834 -0.0976315 12.8166 0.292893 13.2071C0.683417 13.5976 1.31658 13.5976 1.70711 13.2071L11.5 3.41421V8C11.5 8.55228 11.9477 9 12.5 9C13.0523 9 13.5 8.55228 13.5 8V0Z"
        fill="currentColor"
      />
    </svg>
  );
}
const Button = ({
  children,
  className,
  primary,
  ghost,
  href,
  target,
  rel,
  arrow,
  reverse,
  ...props
}: ButtonProps) => {
  let classes =
    'flex flex-grow-0 p-2 group text-base font-bold items-center rounded-lg no-wrap transition ';

  if (primary) {
    classes = [
      className,
      classes,
      ' bg-primary px-3 py-[.4rem] text-cream justify-center text-center cursor-pointer hover:bg-primary-light hover'
    ].join(' ');
  } else if (ghost) {
    classes = [
      className,
      classes,
      'bg-none p-0 border-none hover:bg-none text-primary hover:text-primary-light'
    ].join(' ');
  } else {
    classes = [className, classes, 'bg-none'].join(' ');
  }

  return (
    <a href={href} rel={rel} target={target} className={classes} {...props}>
      {arrow && reverse && (
        <div className="-rotate-90">
          <Arrow />
        </div>
      )}
      <span>{children}</span>
      {arrow && !reverse && <Arrow />}
    </a>
  );

  return (
    <a {...props} className={classes}>
      {children}
    </a>
  );
};

export default Button;
