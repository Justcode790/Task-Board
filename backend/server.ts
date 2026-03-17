import express from "express"
import type { Request, Response } from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import taskRoutes from "./routes/taskRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!)
    console.log("MongoDB connected")
  } catch (err: any) {
    console.error(err.message)
    process.exit(1)
  }
}

connectDB()

app.use("/api", taskRoutes)

// app.get("/task", async (req: Request, res: Response) => {
//   const tasks:object = await Task.find();
//   console.log(tasks);
//   res.json(tasks)
// })

app.get("/", (req: Request, res: Response) => {
  res.send("working")
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`server is listening on port ${process.env.PORT || 8080}`)
})