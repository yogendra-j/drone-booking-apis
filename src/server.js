import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorMiddleware from './middlewares/errorMiddleware.js';
import customerRoutes from './routes/customer.js';
import bookingRoutes from './routes/booking.js';
// import droneShotRoutes from './routes/droneShot.js';
// import droneSiteRoutes from './routes/droneSite.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

app.use('/customers', customerRoutes);
app.use('/bookings', bookingRoutes);
// app.use('/drone-shots', droneShotRoutes);
// app.use('/drone-sites', droneSiteRoutes);

app.use(errorMiddleware);

export default app;