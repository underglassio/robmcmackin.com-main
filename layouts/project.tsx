import Image from 'next/image';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Project } from '.contentlayer/types';

export default function ProjectLayout({
  children,
  post
}: PropsWithChildren<{ post: Project }>) {
  return (
    <Container
      title={`Work — Rob McMackin — ${post.title}`}
      image={`https://robmcmackin.com${post.image}`}
      date={post.date}
      type="article"
    >
      <div
        className="w-full mt-[-2] md:h-[70vw] lg:h-[50vw] xl:h-[50vw] 2xl:h-[34vw] pt-8 px-2 "
        style={{ backgroundColor: post.color }}
      >
        <div
          className="max-w-3xl h-full bg-contain bg-no-repeat bg-bottom mx-auto px-2"
          style={{ backgroundImage: `url(${post.cover})` }}
        />
      </div>
      <article className="flex flex-col items-start justify-center w-full max-w-3xl  mx-auto mt-4 mb-16 px-2">
        <h1 className="font-bold text-2xl md:text-2xl tracking-tight mt-4 text-black dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center text-sm font-mono font-medium text-gray-700">
            {post.role}
            {` • `}
            {post.date}
          </div>
        </div>
        <div className="md:max-w-3xl prose leading-standard text-base mt-4 text-black">
          {children}
        </div>
      </article>
    </Container>
  );
}
