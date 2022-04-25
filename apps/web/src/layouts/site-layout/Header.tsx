import { usePlausible } from 'next-plausible';

import { Anchor } from '@/components/elements';

const Header = ({ ...props }) => {
  const plausible = usePlausible();

  return (
    <header {...props}>
      <div className='absolute z-30 flex items-center justify-center w-full py-4 mx-auto space-x-6 lg:space-x-8 lg:justify-end lg:py-8 lg:px-10'>
        <Anchor href='/' className='text-blue-500 hover:text-blue-400'>
          Home
        </Anchor>
        <Anchor href='https://github.com/riipandi/fuelstack' className='text-blue-500 hover:text-blue-400'>
          Github
        </Anchor>
        <Anchor
          href='https://vercel.com/new/clone?repository-url=https://github.com/riipandi/fuelstack&project-name=fuelstack&repo-name=fuelstack&env=NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_MAINTENANCE_MODE'
          className='inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => plausible('Deploy to Vercel')}
        >
          Deploy your own
        </Anchor>
      </div>
    </header>
  );
};

export default Header;
