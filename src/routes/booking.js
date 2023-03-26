import { Router } from "express";
const router = Router();
import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../services/bookingService.js";

router.get("/", async (req, res) => {
  const bookings = await getAllBookings();
  res.json(bookings);
});

router.get("/:id", async (req, res) => {
  const bookingId = parseInt(req.params.id);
  const booking = await getBookingById(bookingId);
  if (booking) {
    res.json(booking);
  } else {
    res.status(404).send("Booking not found");
  }
});

router.post("/", async (req, res) => {
  const newBooking = req.body;
  const createdBooking = await createBooking(newBooking);
  res.json(createdBooking);
});

router.put("/:id", async (req, res) => {
  const bookingId = parseInt(req.params.id);
  const updatedBooking = req.body;
  const result = await updateBooking(bookingId, updatedBooking);
  if (result === 1) {
    res.json(updatedBooking);
  } else {
    res.status(404).send("Booking not found");
  }
});

router.delete("/:id", async (req, res) => {
  const bookingId = parseInt(req.params.id);
  const result = await deleteBooking(bookingId);
  if (result === 1) {
    res.sendStatus(200);
  } else {
    res.status(404).send("Booking not found");
  }
});

export default router;
