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
    enum: ["low", "medium", "high"],
    default: "low"
  },

  dueDate: {
    type: Date
  },

  status: {
    type: String,
    enum: ["todo", "inprogress", "done"],
    default: "todo"
  }
})

export default mongoose.model("Task", taskSchema)