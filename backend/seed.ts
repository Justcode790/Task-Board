import mongoose from "mongoose"
import Task from "./models/task"

const tasks = [
  {
    title: "Build login page",
    description: "Create UI for login",
    priority: "high",
    status: "todo"
  },
  {
    title: "Setup database",
    description: "Connect MongoDB",
    priority: "medium",
    status: "inprogress"
  },
  {
    title: "Deploy backend",
    description: "Deploy Node server",
    priority: "low",
    status: "done"
  }
]
const seedData = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/taskboard");
    await Task.deleteMany()
    await Task.insertMany(tasks)
    console.log("Data seeded successfully")
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seedData()