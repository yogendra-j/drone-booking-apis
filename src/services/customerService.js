import prisma  from "../db/prisma.js";

async function getAllCustomers() {
  const customers = await prisma.customer.findMany();
  return customers;
}

async function getCustomerById(id) {
  const customer = await prisma.customer.findUnique({
    where: {
      id: parseInt(id)
    }
  });
  return customer;
}

async function createCustomer(name, email, phoneNumber) {
  const newCustomer = await prisma.customer.create({
    data: {
      name: name,
      email: email,
      phoneNumber: phoneNumber
    }
  });
  return newCustomer;
}

async function updateCustomer(id, name, email, phoneNumber) {
  const updatedCustomer = await prisma.customer.update({
    where: {
      id: parseInt(id)
    },
    data: {
      name: name,
      email: email,
      phoneNumber: phoneNumber
    }
  });
  return updatedCustomer;
}

async function deleteCustomer(id) {
  const deletedCustomer = await prisma.customer.delete({
    where: {
      id: parseInt(id)
    }
  });
  return deletedCustomer;
}

export {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};