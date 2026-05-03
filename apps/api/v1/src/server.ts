import app from "./app.ts"
import type {Request, Response}  from "express";
import config from "./config/config.ts"



app.get("/health", (req: Request, res: Response) => res.json({"message": "good health"}))
app.listen(config.port, () => console.log("Listening  on port " + config.port))