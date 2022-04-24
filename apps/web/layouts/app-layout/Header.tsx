import { useAuthorizer } from '@authorizerdev/authorizer-react';
import { useRouter } from 'next/router';

import { Anchor } from '@/components/elements';

const Header = ({ ...props }) => {
  const { user, setUser, setToken, authorizerRef } = useAuthorizer();
  const router = useRouter();

  const onLogout = async () => {
    setUser(null);
    setToken(null);
    await authorizerRef.logout();
    await fetch('/api/auth/logout');
    router.push('/login');
  };

  return (
    <header {...props}>
      <div className='absolute z-30 flex items-center justify-center w-full py-4 mx-auto space-x-6 lg:justify-end lg:py-8 lg:px-10 '>
        <Anchor href='/' className='text-blue-500 hover:text-blue-400'>
          Home
        </Anchor>
        <div>
          {user ? (
            <>
              <Anchor href='/profile' className='mr-10 text-blue-500 hover:text-blue-400'>
                Profile
              </Anchor>
              <button className='text-blue-500 hover:text-blue-400' onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <Anchor href='/login' className='text-blue-500 hover:text-blue-400'>
              Login
            </Anchor>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
