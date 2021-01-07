import { Router } from "express"
import AuthMiddleware from "./app/middlewares/AuthMiddleware"
import UserController from "./app/controllers/UserController"
import AuthController from "./app/controllers/AuthController"


const routes = Router()

routes.post("/users", UserController.store)
routes.post("/auth", AuthController.authenticate)

routes.get("/users", AuthMiddleware, UserController.index)

export default routes