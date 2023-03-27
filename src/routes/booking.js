import { Router } from "express";
const router = Router();
import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../services/bookingService.js";

router.get("/", async (req, res, next) => {
  try {
    const bookings = await getAllBookings();
    res.json(bookings);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const bookingId = parseInt(req.params.id);
    const booking = await getBookingById(bookingId);
    if (booking) {
      res.json(booking);
    } else {
      res.status(404).send("Booking not found");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newBooking = req.body;
    const createdBooking = await createBooking(newBooking);
    res.json(createdBooking);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const bookingId = parseInt(req.params.id);
    const updatedBooking = req.body;
    const result = await updateBooking(bookingId, updatedBooking);
    if (result) {
      res.json(updatedBooking);
    } else {
      res.status(404).send("Booking not found");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const bookingId = parseInt(req.params.id);
    const result = await deleteBooking(bookingId);
    if (result) {
      res.sendStatus(200);
    } else {
      res.status(404).send("Booking not found");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;