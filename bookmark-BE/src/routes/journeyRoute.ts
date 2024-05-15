import { Router } from "express";
import { journeyGet, journeyGetAll, journeyPost } from "../controllers/journeyController";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";

const journeyRoute= Router()

journeyRoute.post("/journey", authentication,uploadMiddleware("image"),journeyPost)
journeyRoute.get("/journey", authentication,journeyGet)
journeyRoute.get("/journeys",journeyGetAll)

export default journeyRoute