import { Router } from "express";
import userRouter from "./userRoute";
import journeyRoute from "./journeyRoute";
import bookmarkRouter from "./bookmarkRoute";

const router = Router();

router.use("/", userRouter)
router.use ("/",journeyRoute)
router.use("/",bookmarkRouter)


export default router