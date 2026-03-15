import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateTask() {

  const navigate = useNavigate()
  function handleSubmit(){
    navigate("/");
  }

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Task Board
        </h1>

        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition"
            onClick={() => navigate("/")}
          >
            Back to All task
          </button>
        </div>
      </div>

      <div className="max-w-md bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl font-semibold mb-4">
          Create Task
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="title" className="block mb-1 font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border rounded p-2"
            ></textarea>
          </div>

          <div>
            <label htmlFor="priority" className="block mb-1 font-medium">
              Priority
            </label>
            <select
              name="priority"
              id="priority"
              className="w-full border rounded p-2"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label htmlFor="dueDate" className="block mb-1 font-medium">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
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