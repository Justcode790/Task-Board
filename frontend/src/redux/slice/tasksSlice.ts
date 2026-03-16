import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const API_URL = "http://localhost:8080"

export type Task = {
  _id: string
  title: string
  description: string
  priority: "Low" | "Medium" | "High"
  dueDate: string
  status: "to do" | "in progress" | "done"
}

type TasksState= {
  items: Task[]
  loading: boolean
  error: string | null
}

const initialState: TasksState = {
  items: [],
  loading: false,
  error: null,
}

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const res = await fetch(`${API_URL}/api/tasks`)
  return await res.json()
})

export const addTask = createAsyncThunk('tasks/add', async (taskData: Omit<Task, '_id'>) => {
  const res = await fetch(`${API_URL}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  })
  return await res.json()
})

export const updateTask = createAsyncThunk('tasks/update', async ({ id, data }: { id: string, data: Partial<Task> }) => {
  const res = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  console.log(res)
  return await res.json()
})

export const deleteTask = createAsyncThunk('tasks/delete', async (id: string) => {
  const res = await fetch(`${API_URL}/api/tasks/${id}`, { method: 'DELETE' })
  console.log(res);
  return id
})

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => { state.loading = true })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchTasks.rejected, (state) => { state.loading = false; state.error = 'Failed to fetch' })

      // add
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.items.push(action.payload)
      })

      // update
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.items.findIndex(t => t._id === action.payload._id)
        if (index !== -1) state.items[index] = action.payload
      })

      // delete
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter(t => t._id !== action.payload)
      })
  },
})

export default tasksSlice.reducer
