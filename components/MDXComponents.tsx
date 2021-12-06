import Link from 'next/link';
import Image from 'next/image';

import ImageWithTheme from 'components/ImageWithTheme';
import FadeInOnScroll from 'components/FadeInOnScroll';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function LoadImage(props) {
  return (
    <FadeInOnScroll>
      <Image alt={props.alt} {...props} />
    </FadeInOnScroll>
  );
}

const MDXComponents = {
  Image: LoadImage,
  ImageWithTheme,
  a: CustomLink,
  Video: (props) => (
    <div>
      <video
        {...props}
        autoPlay
        playsInline
        muted
        controls
        loop
        className="block w-full"
      ></video>
    </div>
  )
};

export default MDXComponents;
