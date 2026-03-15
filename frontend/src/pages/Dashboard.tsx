import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import Cards from '../components/cards'
import TaskDetail from './TaskDetail'

type Task = {
  title: string
  description: string
  priority: "Low" | "Medium" | "High"
  dueDate: string
  status:"to do" | "in progress" | "done"
}

const data: Task[] = [
  {
    title: "Complete project setup",
    description: "Initialize React + TypeScript frontend and Node.js backend with basic folder structure.",
    priority: "High",
    dueDate: "2026-03-20",
    status: "to do"
  },
  {
    title: "Design task schema",
    description: "Create MongoDB schema for task including title, description, priority and due date.",
    priority: "High",
    dueDate: "2026-03-21",
    status: "to do"
  },
  {
    title: "Implement create task API",
    description: "Develop backend endpoint to create new tasks in the database.",
    priority: "High",
    dueDate: "2026-03-22",
    status: "in progress"
  },
  {
    title: "Implement fetch tasks API",
    description: "Create API to retrieve all tasks from the database.",
    priority: "Medium",
    dueDate: "2026-03-23",
    status: "in progress"
  },
  {
    title: "Build task list UI",
    description: "Create React component to display list of tasks using RTK Query.",
    priority: "Medium",
    dueDate: "2026-03-24",
    status: "in progress"
  },
  {
    title: "Add delete task feature",
    description: "Allow users to remove tasks from the list using delete API.",
    priority: "Medium",
    dueDate: "2026-03-25",
    status: "to do"
  },
  {
    title: "Add update task functionality",
    description: "Enable editing of task details including title and priority.",
    priority: "Medium",
    dueDate: "2026-03-26",
    status: "to do"
  },
  {
    title: "Implement priority filter",
    description: "Add UI filter to view tasks by Low, Medium, or High priority.",
    priority: "Low",
    dueDate: "2026-03-27",
    status: "done"
  },
  {
    title: "Improve UI styling",
    description: "Enhance layout and styling for better readability and usability.",
    priority: "Low",
    dueDate: "2026-03-28",
    status: "done"
  },
  {
    title: "Testing and bug fixing",
    description: "Test CRUD operations and fix any issues in frontend or backend.",
    priority: "High",
    dueDate: "2026-03-29",
    status: "done"
  }
]



function Dashboard() {
  const [tasks,setTasks] = useState<Task[]>(data);
  const [cardClick,setcardClick] = useState<Task | null>(null);
  const navigate = useNavigate();


  function alltask(){
    // const filtered = data.filter(task => task.status === "to do")
    setTasks(data);
  }
  function todoTask(){
    const filtered = data.filter(task => task.status === "to do")
    setTasks(filtered);
  }
  function inProgress(){
    const filtered = data.filter(task => task.status === "in progress")
    setTasks(filtered);
  }
  function doneTask(){
    const filtered = data.filter(task => task.status === "done")
    setTasks(filtered);
  }


  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className=" mx-auto p-8">
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Task Board
          </h1>

          <div className="flex gap-3">

            <button className="px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition" onClick={()=>{navigate("/newtask")}}>
              Create Task
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition" onClick={()=>{alltask()}}>
              All Task
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition" onClick={()=>{todoTask()}}>
              To Do
            </button>

            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={()=>{inProgress()}}>
              In Progress
            </button>

            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" onClick={()=>{doneTask()}}>
              Done
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {tasks.map((e: Task, index: number) => (
            <div onClick={()=>{setcardClick(e)}}>
              <Cards
              key={index}
              title={e.title}
              description={e.description}
              priority={e.priority}
              dueDate={e.dueDate}
              status={e.status}
            />
            </div>
          ))}

        </div>

        {cardClick && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="relative">
              <TaskDetail
                id="1"
                title={cardClick.title}
                description={cardClick.description}
                priority={cardClick.priority}
                dueDate={cardClick.dueDate}
                status={cardClick.status}
              />
              <button
                className="absolute top-2 right-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                onClick={() => setcardClick(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  )

}

export default Dashboard;