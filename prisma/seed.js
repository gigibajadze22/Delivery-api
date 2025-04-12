import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create 3 roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: { name: 'admin' },
  });

  const courierRole = await prisma.role.upsert({
    where: { name: 'courier' },
    update: {},
    create: { name: 'courier' },
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'client' },
    update: {},
    create: { name: 'client' },
  });

  // Create 3 statuses
  await prisma.status.upsert({
    where: { id: 1 },
    update: {},
    create: { name: 'To Deliver' },
  });

  await prisma.status.upsert({
    where: { id: 2 },
    update: {},
    create: { name: 'Denied Once' },
  });

  await prisma.status.upsert({
    where: { id: 3 },
    update: {},
    create: { name: 'Denied Twice' },
  });
  await prisma.status.upsert({
    where: { id: 4 },
    update: {},
    create: { name: 'Delivered' },
  });
  // Create admin user
  await prisma.users.upsert({
    where: { email: 'gigibajadze18@gmail.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'gigibajadze18@gmail.com',
      password: 'admin123', 
      roleId: adminRole.id,
    },
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
