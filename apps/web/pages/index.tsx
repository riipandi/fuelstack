import { useAuthorizer } from '@authorizerdev/authorizer-react';
import { usePlausible } from 'next-plausible';
import { siteMeta } from '@/config/general';

import { PageLayout } from '@/layouts/site-layout';
import { Anchor } from '@/components/elements';

export default function Home() {
  const plausible = usePlausible();
  const { token } = useAuthorizer();

  return (
    <PageLayout
      title='>Welcome to your Next site!'
      className='flex flex-col items-center justify-center min-h-screen content-wrapper'
    >
      <div className='container relative px-4 mx-auto'>
        <div className='max-w-2xl mx-auto text-center'>
          <p className='my-4 text-xl leading-8 text-gray-900 lg:mb-6'>
            {siteMeta.description}. <br />
            Pre-configured with TailwindUI and some additional components.
          </p>
          <div className='flex justify-center py-8 mx-auto space-x-4'>
            {token ? (
              <Anchor href='/profile' className='btn btn-primary'>
                User Profile
              </Anchor>
            ) : (
              <Anchor href='/login' className='btn btn-primary'>
                Login
              </Anchor>
            )}

            <Anchor
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Friipandi%2Ffuelstack'
              className='btn btn-outline btn-primary'
              onClick={() => plausible('Deploy to Vercel')}
            >
              Deploy your own
            </Anchor>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
