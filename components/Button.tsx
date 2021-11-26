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
  rel?: string;
};

const Button = ({
  children,
  className,
  primary,
  ghost,
  href,
  target,
  rel,
  arrow,
  ...props
}: ButtonProps) => {
  let classes =
    'flex flex-grow-0 p-2 group text-base font-medium items-center rounded-lg no-wrap transition ';

  if (primary) {
    classes = [
      className,
      classes,
      ' bg-primary px-4 py-3 text-cream justify-center text-center hover:bg-primary-light hover'
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

  if (target) {
    return (
      <a href={href} rel={rel} target={target} className={classes} {...props}>
        <span>{children}</span>
        {arrow && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1.5 mt-[1px] group-hover:animate-bump transition-all ease-in-out"
          >
            <path
              d="M14.5 1H5.5M14.5 1V10M14.5 1L2.20036 13.2996L1 14.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </a>
    );
  }
  if (!!href) {
    return (
      <Link href={href} {...props}>
        <a className={classes}>
          <span>{children}</span>
          {arrow && (
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              className="ml-1.5 mt-[1px] group-hover:animate-bump transition-all ease-out"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM21.7071 8.7071C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928931C14.9526 0.538407 14.3195 0.538407 13.9289 0.928931C13.5384 1.31946 13.5384 1.95262 13.9289 2.34314L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.7071ZM1 9L21 9L21 7L1 7L1 9Z"
                fill="currentColor"
              />
            </svg>
          )}
        </a>
      </Link>
    );
  }
  return (
    <a {...props} className={classes}>
      {children}
    </a>
  );
};

export default Button;
