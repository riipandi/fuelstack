import {
  hash as bcryptHash,
  hashSync as bcryptHashSync,
  verify as bcryptVerify,
  verifySync as bcryptVerifySync,
} from '@node-rs/bcrypt';

export async function hash(str: string): Promise<string> {
  return await bcryptHash(str, 10);
}

export async function verify(str: string, hash: string): Promise<boolean> {
  return bcryptVerify(str, hash);
}

export function hashSync(str: string): string {
  return bcryptHashSync(str, 10);
}

export function verifySync(str: string, hash: string): boolean {
  return bcryptVerifySync(str, hash);
}
