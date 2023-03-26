import prisma from '../db/prisma.js';

const createDroneShot = async (name, duration, price) => {
  const droneShot = await prisma.droneShotType.create({
    data: {
      name,
      duration,
      price,
    },
  });
  return droneShot;
};

const getAllDroneShots = async () => {
  const droneShots = await prisma.droneShotType.findMany();
  return droneShots;
};

const getDroneShotById = async (id) => {
  const droneShot = await prisma.droneShotType.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return droneShot;
};

const updateDroneShotById = async (id, data) => {
  const droneShot = await prisma.droneShotType.update({
    where: {
      id: parseInt(id),
    },
    data,
  });
  return droneShot;
};

const deleteDroneShotById = async (id) => {
  const droneShot = await prisma.droneShotType.delete({
    where: {
      id: parseInt(id),
    },
  });
  return droneShot;
};

export {
  createDroneShot,
  getAllDroneShots,
  getDroneShotById,
  updateDroneShotById,
  deleteDroneShotById,
};