

type props={
    updateStatus :(status: "to do" | "in progress" | "done") => void
}

function ShowMenus({updateStatus}:props) {
  return (
    <div className="absolute right-0 mt-12 bg-white border rounded-lg shadow-md w-40">

        <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => updateStatus("to do")}
        >
        To Do
        </button>
        <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => updateStatus("in progress")}
        >
        In Progress
        </button>
        <button
        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => updateStatus("done")}
        >
        Done
        </button>
    </div>
  )
}

export default ShowMenus