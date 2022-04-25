import { PageLayout } from '@/layouts/site-layout';

export default function Home() {
  return (
    <PageLayout title='>Welcome to your Next site!'>
      <section className='pt-24 lg:pt-28'>
        <div className='container px-4 mx-auto'>
          <div className='max-w-4xl mx-auto text-center'>
            <h3 className='mb-4 text-4xl font-bold leading-tight tracking-normal text-gray-900 md:text-5xl'>
              FuelStack
            </h3>
            <p className='mt-6 text-lg font-medium text-gray-500 md:text-xl'>
              A full-stack monorepo starter kit powered by Turborepo.
            </p>
            <p className='mt-6 text-base text-justify text-gray-500 md:text-lg md:mt-14'>
              This starter kit originally based on Turborepo example with Changeset. Already pre-configured
              with essential components. Versioning and package publishing are handled by Changesets and can
              be automated with GitHub Actions.
            </p>
          </div>
          <div className='max-w-4xl mx-auto mt-12 lg:mt-14'>
            <h2 className='mb-4 text-2xl font-semibold leading-tight tracking-normal text-gray-900 md:text-3xl'>
              Authentication
            </h2>
            <p className='mt-4 text-base text-justify text-gray-500 md:text-lg'>
              Instead of writing your own authentication mechanism, this project offer Authorizer for handling
              the authentication and authorization. Please refer to the official project documentation for
              more information.
            </p>
          </div>
          <div className='max-w-4xl mx-auto mt-12 lg:mt-14'>
            <h2 className='mb-4 text-2xl font-semibold leading-tight tracking-normal text-gray-900 md:text-3xl'>
              License
            </h2>
            <p className='mt-4 text-base text-justify text-gray-500 md:text-lg'>
              This project is open-sourced software licensed under the MIT license. Copyrights in this project
              are retained by their contributors. See the license file for more information.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
