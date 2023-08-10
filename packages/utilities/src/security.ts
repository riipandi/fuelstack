import { hash, verify } from '@node-rs/bcrypt'

export async function hashPassword(input: string): Promise<string> {
  return await hash(input, 12)
}

export async function verifyPassword(
  plain: string | Buffer,
  hash: string | Buffer
): Promise<boolean> {
  return await verify(plain, hash)
}
