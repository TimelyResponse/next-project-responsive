import { MDXLayoutRenderer } from '@/components/MDXComponents';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';
import UsesLayout from '../../layouts/MDX/UsesLayout';

export const metadata = {
  title: 'Uses - Dale Larroder',
  description: 'What I Use - Dale Larroder',
};

export default function Uses() {
  const author = allAuthors.find((p) => p.slug === 'uses');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <UsesLayout>
        <MDXLayoutRenderer content={author} />
      </UsesLayout>
    </MainLayout>
  );
}
