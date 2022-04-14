import { AuthorizerProvider } from '@authorizerdev/authorizer-react';
import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import '@/libraries/fontloader';
import authorizerConfig from '@/config/authorizer';

import { onStateChangeCallback } from '@/libraries/authorizer';
import { Maintenance } from '@/components/partials';

import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Display this page when maintenance mode is enabled.
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
    <Maintenance />
  ) : (
    <PlausibleProvider
      enabled={process.env.NODE_ENV === 'production'}
      customDomain='https://stats.web.id'
      domain='fuelstack.vercel.app'
      trackOutboundLinks
      selfHosted
    >
      <AuthorizerProvider config={authorizerConfig} onStateChangeCallback={onStateChangeCallback}>
        <Component {...pageProps} />
      </AuthorizerProvider>
    </PlausibleProvider>
  );
}
