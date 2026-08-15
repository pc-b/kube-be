import { PrismaService } from '../prisma/prisma';

async function main() {
  const prisma = new PrismaService();

  try {
    const user = await prisma.user.create({
      data: {
        username: 'Alice2',
        email: 'alice2@prisma.io',
        password: 'Password123',
      },
    });

    console.log('Created user:', user);

    const allUsers = await prisma.user.findMany();
    console.log('All users:', JSON.stringify(allUsers, null, 2));
  } finally {
    await prisma.$disconnect();
  }
}

void main().catch((error) => {
  console.error(error);
  process.exit(1);
});
