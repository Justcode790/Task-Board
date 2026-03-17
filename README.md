


## live link
https://taskboard-ankit.netlify.app/

backend deployement link:- https://task-board-e097.onrender.com/

# 🗂️ Task Board (MERN + TypeScript + Redux Toolkit)

A minimal Trello-like Task Board application where users can create, update, delete, and manage tasks by status.

---

## 🚀 Overview

This project is a full-stack application built to practice:

* React + TypeScript (Frontend)
* Redux Toolkit + RTK Query (State Management & API Calls)
* Node.js + Express + TypeScript (Backend)
* MongoDB (Database)

The application allows users to manage tasks in a board grouped by status: **To Do**, **In Progress**, and **Done**.

---

## ✨ Features

* ✅ Create a task with:

  * Title
  * Description
  * Priority (Low / Medium / High)
  * Due Date
  * status


* 📋 View tasks grouped by status:

  * To Do
  * In Progress
  * Done

* 🔄 Update task details or change status

* ❌ Delete tasks

---

## 🧠 Tech Stack

### Frontend

* React
* TypeScript
* Redux Toolkit
* RTK Query

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB

---

## 📁 Project Structure

```
Task-Board/
│
├── frontend/        # React + TypeScript app
│
├── backend/         # Express + TypeScript API
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/Justcode790/Task-Board
cd Task-Board
```

---

## 🖥️ Backend Setup

```
cd backend
npm install
```

### Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run backend:

```
npm run dev
```

---

## 🌐 Frontend Setup

```
cd frontend
npm install
```

### Run frontend:

```
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create a task |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## 🧩 State Management

* **RTK Query** is used for all API calls
* Redux slices handle UI state like:

  * Modal open/close
  * Filters

---

## 📊 Evaluation Highlights

* ✔ Strong TypeScript usage (no `any`)
* ✔ Clean Redux Toolkit structure
* ✔ RTK Query for API handling
* ✔ RESTful API design
* ✔ Scalable folder structure

---







![alt text](image.png)
![alt text](image-1.png)
