import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./src/routes";
// import redisClient from "./src/libs/redis";
import db from "./src/db";
// import RedisStore from "connect-redis";
import cors from "cors";
import path from "path";

dotenv.config();
  const app = express();
  const port = process.env.PORT || 3000;
  const corsOption = {
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
    credentials: true, // include credentials in CORS requests (e.g., cookies)
  };

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));
  app.use(router);

  // await initializeRedisClient();

  app.get("/", (req: Request, res: Response) => {
    res.send("express + typescript");
  });

  app.listen(port, async () => {
    await db.$connect();
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });