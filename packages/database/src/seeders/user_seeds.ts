import { hashPassword } from '@acme/utils'
import { TypeID } from 'typeid-js'

import { dbClientType } from '../client'
import { insertId } from '../extend'
import { NewUser, userTable } from '../schema/user'

export async function userSeeder(db: dbClientType) {
  const passwordHash = await hashPassword('secret')
  const users: NewUser[] = [
    {
      ...insertId('user'),
      email: 'admin@example.com',
      firstName: 'Admin',
      lastName: 'Sistem',
      role: 'admin',
      passwordHash,
    },
    {
      ...insertId('user'),
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
    console.info(`🍀 User ${tid} created with id: ${TypeID.fromString(tid).toUUID()}`)
  })
}
