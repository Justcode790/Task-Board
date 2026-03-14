import { useState } from 'react'
import './App.css'
import Cards from './components/cards'

type Task = {
  title: string
  description: string
  priority: "Low" | "Medium" | "High"
  dueDate: string
}

const data:Task[]=[
  {
  "title": "Complete project setup",
  "description": "Initialize React + TypeScript frontend and Node.js backend with basic folder structure.",
  "priority": "High",
  "dueDate": "2026-03-20"
  },
  {
  "title": "Design task schema",
  "description": "Create MongoDB schema for task including title, description, priority and due date.",
  "priority": "High",
  "dueDate": "2026-03-21"
  },
  {
  "title": "Implement create task API",
  "description": "Develop backend endpoint to create new tasks in the database.",
  "priority": "High",
  "dueDate": "2026-03-22"
  },
  {
  "title": "Implement fetch tasks API",
  "description": "Create API to retrieve all tasks from the database.",
  "priority": "Medium",
  "dueDate": "2026-03-23"
  },
  {
  "title": "Build task list UI",
  "description": "Create React component to display list of tasks using RTK Query.",
  "priority": "Medium",
  "dueDate": "2026-03-24"
  },
  {
  "title": "Add delete task feature",
  "description": "Allow users to remove tasks from the list using delete API.",
  "priority": "Medium",
  "dueDate": "2026-03-25"
  },
  {
  "title": "Add update task functionality",
  "description": "Enable editing of task details including title and priority.",
  "priority": "Medium",
  "dueDate": "2026-03-26"
  },
  {
  "title": "Implement priority filter",
  "description": "Add UI filter to view tasks by Low, Medium, or High priority.",
  "priority": "Low",
  "dueDate": "2026-03-27"
  },
  {
  "title": "Improve UI styling",
  "description": "Enhance layout and styling for better readability and usability.",
  "priority": "Low",
  "dueDate": "2026-03-28"
  },
  {
  "title": "Testing and bug fixing",
  "description": "Test CRUD operations and fix any issues in frontend or backend.",
  "priority": "High",
  "dueDate": "2026-03-29"
  }
]

function App() {
  const [tasks,setTasks] = useState<Task[]>(data);

  return(
  <>
  <h1>Task Board</h1>
  <div className="flex flex-wrap gap-5 p-6">
    {tasks.map((e: Task, index: number) => (
      <Cards
        key={index}
        title={e.title}
        description={e.description}
        priority={e.priority}
        dueDate={e.dueDate}
      />
    ))}
  </div>
  
  </>
)
  
}

export default App
