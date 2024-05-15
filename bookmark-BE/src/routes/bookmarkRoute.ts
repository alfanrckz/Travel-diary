import { Router } from "express";
import authentication from "../middleware/authentication";
import { createBookmark } from "../controllers/bookmarkController";

const bookmarkRouter = Router();

bookmarkRouter.post("/bookmark",authentication,createBookmark)

export default bookmarkRouter