import {Router} from "express"
import * as userController from "../controllers/userController"

const userRouter= Router()

userRouter.post("/login", userController.login)
userRouter.post("/register", userController.register)

export default userRouter