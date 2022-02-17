import express from "express"
import cors from "cors"

import { routes } from "./routes"

const app = express()

const port = process.env.PORT || 4000;


app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(express.json())

app.use(routes)


app.listen(port, () => console.log("Server Running"))