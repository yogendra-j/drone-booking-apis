import { Router } from "express";
import {
  createDroneSite,
  getAllDroneSites,
  getDroneSiteById,
  updateDroneSiteById,
  deleteDroneSiteById,
} from "../services/droneSiteService.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const newDroneSite = await createDroneSite(req.body);
    res.status(201).json(newDroneSite);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allDroneSites = await getAllDroneSites();
    res.status(200).json(allDroneSites);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const droneSite = await getDroneSiteById(req.params.id);
    res.status(200).json(droneSite);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedDroneSite = await updateDroneSiteById(req.params.id, req.body);
    res.status(200).json(updatedDroneSite);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedDroneSite = await deleteDroneSiteById(req.params.id);
    res.status(200).json(deletedDroneSite);
  } catch (error) {
    next(error);
  }
});

export default router;
