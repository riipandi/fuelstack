export const cookies = {
  name: 'authorizer-client-next',
  maxAge: 60 * 6 * 24,
};

export default {
  authorizerURL: process.env.NEXT_PUBLIC_AUTHORIZER_URL,
  clientID: process.env.AUTHORIZER_CLIENT_ID,
  redirectURL: process.env.NEXT_PUBLIC_SITE_URL,
};
