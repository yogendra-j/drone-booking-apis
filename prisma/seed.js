const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const customer1 = await prisma.customer.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '+1234567890',
      bookings: {
        create: [
          {
            createdTime: new Date('2022-03-25T09:00:00Z'),
            droneShot: 'beach',
          },
          {
            createdTime: new Date('2022-03-26T10:00:00Z'),
            droneShot: 'mountain',
          },
        ],
      },
    },
  })

  const customer2 = await prisma.customer.create({
    data: {
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phoneNumber: '+0987654321',
      bookings: {
        create: [
          {
            createdTime: new Date('2022-03-27T11:00:00Z'),
            droneShot: 'city',
          },
        ],
      },
    },
  })

  console.log(`Created customers with ids: ${customer1.id} and ${customer2.id}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
