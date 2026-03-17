import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  title: {
    type: String
  },

  description: {
    type: String
  },

  priority: {
    type: String,
    default: "low"
  },

  dueDate: {
    type: Date
  },

  status: {
    type: String,
    default: "todo"
  }
})

export default mongoose.model("Task", taskSchema)