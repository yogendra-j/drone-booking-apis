import { Router } from "express";
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../services/customerService.js";

const router = Router();

router.get("/", async (req, res) => {
  const customers = await getAllCustomers();
  res.json(customers);
});

router.get("/:id", async (req, res) => {
  const customerId = parseInt(req.params.id);
  const customer = await getCustomerById(customerId);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).send("Customer not found");
  }
});

router.post("/", async (req, res) => {
  const newCustomer = req.body;
  const createdCustomer = await createCustomer(newCustomer);
  res.json(createdCustomer);
});

router.put("/:id", async (req, res) => {
  const customerId = parseInt(req.params.id);
  const updatedCustomer = req.body;
  const result = await updateCustomer(customerId, updatedCustomer);
  if (result === 1) {
    res.json(updatedCustomer);
  } else {
    res.status(404).send("Customer not found");
  }
});

router.delete("/:id", async (req, res) => {
  const customerId = parseInt(req.params.id);
  const result = await deleteCustomer(customerId);
  if (result === 1) {
    res.sendStatus(200);
  } else {
    res.status(404).send("Customer not found");
  }
});

export default router;
