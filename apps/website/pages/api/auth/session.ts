import { setCookies } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from '@/config/authorizer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = JSON.parse(req.body);
  const accessToken = data?.access_token;
  const expiresAt = data?.expires_in;

  if (!accessToken || !expiresAt) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  setCookies(cookies.name, accessToken, {
    req,
    res,
    maxAge: cookies.maxAge,
  });
  res.status(200).json({ message: 'session created successfully' });
}
