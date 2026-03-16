import express, { Request, Response } from "express"
import Task from "../models/task"

const router = express.Router()

router.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await Task.find()
  console.log(tasks)
  res.json(tasks)
})

router.post("/tasks", async (req: Request, res: Response) => {
  const task = new Task(req.body)
  await task.save()
  res.json(task)
})

router.put("/tasks/:id", async (req: Request, res: Response) => {
  console.log("update route: "+req.params.id)
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
  res.json(task)
})

router.delete("/tasks/:id", async (req: Request, res: Response) => {
  await Task.findByIdAndDelete(req.params.id)
  res.json({ message: "Deleted" })
})

export default router;