import { removeCookies } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from '@/config/authorizer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  removeCookies(cookies.name, { req, res });
  res.status(200).json({ message: 'logged out successfully' });
}
