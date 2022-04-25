import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import '@/libraries/fontloader';

import { Maintenance } from '@/components/partials';

import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Display this page when maintenance mode is enabled.
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  return (
    <PlausibleProvider
      enabled={process.env.NODE_ENV === 'production'}
      domain='fuelstack.vercel.app'
      trackOutboundLinks
      selfHosted
    >
      {isMaintenance ? <Maintenance /> : <Component {...pageProps} />}
    </PlausibleProvider>
  );
}
