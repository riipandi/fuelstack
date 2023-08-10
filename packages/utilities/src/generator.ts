import UUID from 'pure-uuid'
import { TypeID, typeid } from 'typeid-js'

export const generateTypeId = (prefix?: string | undefined) => {
  const id = new UUID(1).toString()
  const generated = prefix ? TypeID.fromUUID(prefix, id) : typeid()
  const tid = generated.toString()
  return { id, tid }
}

export const typeIdFromString = (tid: string) => {
  return TypeID.fromString(tid)
}
