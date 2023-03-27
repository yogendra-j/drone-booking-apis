import { Router } from "express";
import {
  createDroneShot,
  getAllDroneShots,
  getDroneShotById,
  updateDroneShotById,
  deleteDroneShotById,
} from "../services/droneShotService.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const newDroneShot = await createDroneShot(req.body);
    res.status(201).json(newDroneShot);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allDroneShots = await getAllDroneShots();
    res.status(200).json(allDroneShots);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const droneShot = await getDroneShotById(req.params.id);
    res.status(200).json(droneShot);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedDroneShot = await updateDroneShotById(req.params.id, req.body);
    res.status(200).json(updatedDroneShot);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedDroneShot = await deleteDroneShotById(req.params.id);
    res.status(200).json(deletedDroneShot);
  } catch (error) {
    next(error);
  }
});

export default router;
