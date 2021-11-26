import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import ProjectLayout from 'layouts/project';
import { allProjects } from '.contentlayer/data';
import type { Project } from '.contentlayer/types';

export default function Post({ post }: { post: Project; tweets: any[] }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <ProjectLayout post={post}>
      <Component
        components={
          {
            ...components
          } as any
        }
      />
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allProjects.find((post) => post.slug === params.slug);

  return { props: { post } };
}
