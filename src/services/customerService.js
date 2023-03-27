import prisma from "../db/prisma.js";

async function getAllCustomers() {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (error) {
    console.error("Error retrieving customers:", error);
    throw error;
  }
}

async function getCustomerById(id) {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    return customer;
  } catch (error) {
    console.error(`Error retrieving customer with ID ${id}:`, error);
    throw error;
  }
}

async function createCustomer({name, email, phoneNumber}) {
  try {
    const newCustomer = await prisma.customer.create({
      data: {
        name: name,
        email: email,
        phoneNumber: phoneNumber
      }
    });
    return newCustomer;
  } catch (error) {
    console.error("Error creating new customer:", error);
    throw error;
  }
}

async function updateCustomer({id, name, email, phoneNumber}) {
  try {
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
  } catch (error) {
    console.error(`Error updating customer with ID ${id}:`, error);
    throw error;
  }
}

async function deleteCustomer(id) {
  try {
    const deletedCustomer = await prisma.customer.delete({
      where: {
        id: parseInt(id)
      }
    });
    return deletedCustomer;
  } catch (error) {
    console.error(`Error deleting customer with ID ${id}:`, error);
    throw error;
  }
}

export {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
