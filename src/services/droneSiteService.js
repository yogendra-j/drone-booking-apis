import prisma from "../db/prisma.js";

const createDroneSite = async (droneSite) => {
  const newDroneSite = await prisma.droneSite.create({
    data: droneSite,
  });
  return newDroneSite;
};

const getAllDroneSites = async () => {
  const allDroneSites = await prisma.droneSite.findMany({
    include: {
      bookings: false,
    },
  });
  return allDroneSites;
};

const getDroneSiteById = async (id) => {
  const droneSite = await prisma.droneSite.findUnique({
    where: { id: parseInt(id) },
    include: {
      bookings: false,
    },
  });
  return droneSite;
};

const updateDroneSiteById = async (id, {discardId, ...droneSite}) => {
  const updatedDroneSite = await prisma.droneSite.update({
    where: { id: parseInt(id) },
    data: droneSite,
  });
  return updatedDroneSite;
};

const deleteDroneSiteById = async (id) => {
  const deletedDroneSite = await prisma.droneSite.delete({
    where: { id: parseInt(id) },
  });
  return deletedDroneSite;
};

export {
  createDroneSite,
  getAllDroneSites,
  getDroneSiteById,
  updateDroneSiteById,
  deleteDroneSiteById,
};