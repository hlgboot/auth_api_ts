import "reflect-metadata"
import "./database/conect"

import express from "express"
const app = express()
app.use(express.json())

import routes from "./routes"
app.use(routes)



app.listen(3333, () => console.log("Server is running! You can continue "))