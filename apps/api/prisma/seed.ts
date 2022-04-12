import { hash } from '@node-rs/bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

async function main() {
  console.info(`Start seeding ...`);
  const hashedPassword = await hash('secret', 10);
  const user = await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'Sistem',
      nickname: 'admin',
      email: 'admin@example.com',
      password: hashedPassword,
      emailVerified: new Date(),
    },
  });
  console.info(`Created user with id: ${user.id}`);
  console.info(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
