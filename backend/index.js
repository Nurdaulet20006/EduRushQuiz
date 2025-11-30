
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';

const app = express();
const port = 8080;

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB();

// Routes
app.use("/api/auth", userRouter);
app.use("/api/results", resultRouter);

app.get('/', (req, res) => {
    console.log("ROOT ROUTE TRIGGERED");
    res.send('API Working');
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});