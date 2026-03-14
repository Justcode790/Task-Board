import React from 'react'
type Props ={
    title: string
    description: string
    priority: "Low" | "Medium" | "High"
    dueDate: string
}
function Cards(task: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 w-80 hover:shadow-lg transition">
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Title: {task.title}
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Description: {task.description}
        </p>
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-medium">
          {task.priority}
        </span>

        <span className="text-gray-500">
          Due: {task.dueDate}
        </span>
      </div>

    </div>
  )
}
export default Cards