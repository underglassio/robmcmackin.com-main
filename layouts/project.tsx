import Image from 'next/image';
import Button from 'components/Button';
import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Project } from '.contentlayer/types';

export default function ProjectLayout({
  children,
  post
}: PropsWithChildren<{ post: Project }>) {
  return (
    <Container
    // title={`Work — Rob McMackin — ${post.title}`}
    // image={`https://robmcmackin.com${post.cover}`}
    // date={post.date}
    // type="article"
    >
      <div
        className="w-full mt-[-2] md:h-[70vw] lg:h-[50vw] xl:h-[50vw] 2xl:h-[34vw] pt-8"
        style={{ backgroundColor: post.color }}
      >
        <div
          className=" h-full bg-contain bg-no-repeat bg-bottom mx-auto"
          style={{ backgroundImage: `url(${post.cover})` }}
        />
      </div>
      <article className="flex flex-col items-start justify-center w-full max-w-3xl  mx-auto mt-4 mb-16 px-4 md:px-0">
        <h1 className="font-bold text-2xl md:text-2xl tracking-tight mt-4 text-black dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
          <div className="flex items-center text-sm font-mono font-medium text-gray-700">
            {post.role}
            {` · `}
            {post.date}
          </div>
        </div>

        {post.url && (
          <Button className="mt-3" primary target="_blank" href={post.url}>
            <>Try it</>
          </Button>
        )}
        <hr />
        <div className="md:max-w-3xl prose leading-standard text-base mt-4 text-black ">
          {children}
        </div>
        <div className="h-4" />
        <Button href="/#projects" className="mt-3" ghost arrow reverse>
          <>Back to projects</>
        </Button>
      </article>
    </Container>
  );
}
