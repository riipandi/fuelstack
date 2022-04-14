import { useAuthorizer } from '@authorizerdev/authorizer-react';
import { FC } from 'react';

import { Footer, Header } from '@/layouts/site-layout';
import { MetaHead, ScrollUp } from '@/components/elements';

import PageTransition from '../PageTransition';

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  ogImage?: string;
  animate?: boolean;
  noindex?: boolean;
}

const PageLayout: FC<Props> = ({ children, ...props }) => {
  const { title, description, ogImage, animate, noindex } = props;
  const animatePage = animate || true;

  const { loading } = useAuthorizer();

  if (loading) {
    return <h1 className='text-2xl'>Loading...</h1>;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <MetaHead title={title} description={description} ogImage={ogImage} noindex={noindex} />
      <Header className='absolute top-0 w-full' />
      <main className='flex-grow'>
        {animatePage ? (
          <PageTransition {...props}>{children}</PageTransition>
        ) : (
          <div {...props}>{children}</div>
        )}
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default PageLayout;
