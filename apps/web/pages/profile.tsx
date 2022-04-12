import { Authorizer } from '@authorizerdev/authorizer-js';
import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import authorizerConfig, { cookies } from '@/config/authorizer';

import { PageLayout } from '@/layouts/app-layout';

export default function Profile({ user }) {
  return (
    <PageLayout title='User Profile'>
      <div className='flex flex-col content-wrapper lg:mt-10'>
        Hello, {user.given_name} ({user.email})
      </div>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const token = getCookie(cookies.name, { req, res });

  if (!token) {
    return {
      redirect: { destination: '/login', permanent: true },
      props: {},
    };
  }

  const user = await new Authorizer(authorizerConfig).getProfile({
    Authorization: `Bearer ${token}`,
  });

  return !user
    ? {
        redirect: { destination: '/login', permanent: true },
        props: {},
      }
    : { props: { user } };
};
