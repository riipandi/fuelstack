import { dbClientType } from '../client'
import { NewUser, userTable } from '../schema/user'

import { generateTypeId, hashPassword, typeIdFromString } from '@acme/utils'

export async function userSeeder(db: dbClientType) {
  const passwordHash = await hashPassword('secret')
  const users: NewUser[] = [
    {
      ...generateTypeId(),
      email: 'admin@example.com',
      firstName: 'Admin',
      lastName: 'Sistem',
      role: 'admin',
      passwordHash,
    },
    {
      ...generateTypeId(),
      email: 'user@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: 'user',
      passwordHash,
    },
  ]

  const newUsers = await db
    .insert(userTable)
    .values(users)
    .onConflictDoNothing({ target: userTable.email })
    .returning()

  newUsers.map(({ tid }) => {
    console.info(`🍀 User ${tid} created with id: ${typeIdFromString(tid).toUUID()}`)
  })
}
