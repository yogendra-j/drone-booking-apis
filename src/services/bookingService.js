import prisma from '../db/prisma.js';

const getAllBookings = async () => {
  const bookings = await prisma.booking.findMany({
    include: { customer: true, droneSite: true, droneShot: true },
  });
  return bookings;
};

const getBookingById = async (id) => {
  const booking = await prisma.booking.findUnique({
    where: { id: parseInt(id) },
    include: { customer: true, droneSite: true, droneShot: true },
  });
  return booking;
};

const createBooking = async (data) => {
  const booking = await prisma.booking.create({
    data: {
      droneSite: { connect: { id: parseInt(data.droneSiteId) } },
      droneShot: { connect: { id: parseInt(data.droneShotId) } },
      customer: { connect: { id: parseInt(data.customerId) } },
    },
    include: { customer: true, droneSite: true, droneShot: true },
  });
  return booking;
};

const updateBooking = async (id, data) => {
  const booking = await prisma.booking.update({
    where: { id: parseInt(id) },
    data: {
      droneSite: { connect: { id: parseInt(data.droneSiteId) } },
      droneShot: { connect: { id: parseInt(data.droneShotId) } },
      customer: { connect: { id: parseInt(data.customerId) } },
    },
    include: { customer: true, droneSite: true, droneShot: true },
  });
  return booking;
};

const deleteBooking = async (id) => {
  const booking = await prisma.booking.delete({
    where: { id: parseInt(id) },
    include: { customer: true, droneSite: true, droneShot: true },
  });
  return booking;
};

export {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
