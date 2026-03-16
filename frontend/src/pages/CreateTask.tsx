import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { addTask } from '../redux/slice/tasksSlice'

type Task = {
  title: string
  description: string
  priority: "Low" | "Medium" | "High"
  dueDate: string
  status: "to do" | "in progress" | "done"
}

function CreateTask() {

  const [data, setData] = useState<Task>({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    status: "to do"
  })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    dispatch(addTask(data))
    navigate('/')
  }

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Task Board
        </h1>
        <button
          className="px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition"
          onClick={() => navigate("/")}
        >
          Back to All task
        </button>
      </div>
      <div className="max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4">
          Create Task
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 font-medium">Priority</label>
            <select
              name="priority"
              value={data.priority}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={data.dueDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask