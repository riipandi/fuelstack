import { Authorizer, useAuthorizer } from '@authorizerdev/authorizer-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { PageLayout } from '@/layouts/site-layout';

export default function Login() {
  const { token } = useAuthorizer();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/profile');
    }
  }, [token, router]);

  return (
    <PageLayout title='Login'>
      <div className="className='flex flex-col content-wrapper lg:mt-10'"></div>
      <div className='w-full max-w-sm mx-auto'>
        <Authorizer onLogin={() => router.push('/profile')} />
      </div>
    </PageLayout>
  );
}
