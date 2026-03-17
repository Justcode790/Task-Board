import { useState } from "react"
import ShowMenus from "../components/ShowMenus"
// import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../redux/hooks"
import { deleteTask, updateTask } from '../redux/slice/tasksSlice'


type Props = {
  id: string
  title: string
  description: string
  priority: "Low" | "Medium" | "High"
  dueDate: string
  status: "to do" | "in progress" | "done"
  onClose?: () => void
}

function TaskDetail(e: Props) {

  const [showMenu, setShowMenu] = useState(false);
  const [status, setStatus] = useState(e.status);
  const dispatch = useAppDispatch()
  // const navigate = useNavigate();
  function updateStatus(newStatus: "to do" | "in progress" | "done") {
    dispatch(updateTask({ id: e.id, data: { status: newStatus } }))
    setStatus(newStatus)
    setShowMenu(false)
    e.onClose?.()
  }

  function handleDelete(id: string) {
    dispatch(deleteTask(id))
    e.onClose?.()
  }



  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 w-[500px] hover:shadow-lg transition">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Title: {e.title}
        </h2>
        <p className="text-gray-600 mt-2">
          Description: {e.description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4 items-center">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
            {e.priority}
          </span>
          <span className="text-gray-500 text-sm">
            Due: {new Date(e.dueDate).toLocaleDateString()}
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
            {status}
          </span>
        </div>

        <div className="relative flex gap-3">
            <button
                className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 transition text-sm"
                onClick={()=>{handleDelete(e.id)}}
            >
                Delete
            </button>
            <button
                className="px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition text-sm"
                onClick={() => setShowMenu(!showMenu)}
            >
                Update Status
            </button>
            {showMenu && (
                <ShowMenus updateStatus={updateStatus} />
            )}
            </div>
      </div>

    </div>
  )
}

export default TaskDetail