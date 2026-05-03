import express from "express";
import cors from 'cors'
import authRoutes from "./routes/auth.routes.ts";
const app: express.Application = express();

app.use(express.json())
app.use(cors({
    origin : 'http://localhost:3001'
}))


app.use('/api/v1/auth', authRoutes);

export default  app
