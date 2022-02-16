import express from "express"
import cors from "cors"

import { routes } from "./routes"

const app = express()

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(express.json())

app.use(routes)


app.listen("4000", () => console.log("Server Running"))