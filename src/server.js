import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

app.use(errorMiddleware);

export default app;