import { Anchor } from '@/components/elements';

const Footer = ({ ...props }) => {
  return (
    <footer {...props}>
      <div className='px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8'>
        <div className='mt-8 space-y-3 text-center'>
          <p className='text-base text-gray-500'>
            Brought to you by{' '}
            <Anchor
              href='https://github.com/riipandi'
              className='underline decoration-blue-500 decoration-dashed decoration-1 hover:text-indigo-500'
            >
              Aris Ripandi
            </Anchor>
            &nbsp;&mdash;&nbsp;Hosted at{' '}
            <Anchor
              href='https://vercel.com'
              className='underline decoration-blue-500 decoration-dashed decoration-1 hover:text-indigo-500'
            >
              Vercel
            </Anchor>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
