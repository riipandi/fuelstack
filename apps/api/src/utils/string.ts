import { customAlphabet } from 'nanoid';

import type { nanoidOptions } from '@/types/string-utils';

/**
 * Replace value of JSON by key
 * @param key
 * @param value
 * @param data
 * @returns
 */
export function jsonValReplace(key: string, value: string, data: any) {
  const replacer = (jsonKey: string, jsonValue: string) => (jsonKey === key ? value : jsonValue);
  return JSON.parse(JSON.stringify(data, replacer));
}

// Generate custom id
export function nanoid({ useUpperCase = false, length = 14 }: nanoidOptions) {
  let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
  if (useUpperCase) {
    alphabet = alphabet + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  const nanoid = customAlphabet(alphabet, length);
  return nanoid();
}
