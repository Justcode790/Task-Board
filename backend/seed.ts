import mongoose from "mongoose"
import Task from "./models/task"
import dotenv from "dotenv"
dotenv.config()
const tasks = [
  {
    title: "Diwali sale banner design",
    description: "Create promotional banner for the upcoming Diwali sale on the e-commerce platform.",
    priority: "High",
    dueDate: "2026-03-20",
    status: "to do"
  },
  {
    title: "GST invoice integration",
    description: "Integrate GST-compliant invoice generation in the billing module.",
    priority: "High",
    dueDate: "2026-03-22",
    status: "in progress"
  },
  {
    title: "UPI payment gateway setup",
    description: "Add UPI payment support via Razorpay for faster checkout.",
    priority: "High",
    dueDate: "2026-03-24",
    status: "to do"
  },
  {
    title: "Hindi language support",
    description: "Add Hindi localization to the app for tier-2 and tier-3 city users.",
    priority: "Medium",
    dueDate: "2026-03-26",
    status: "to do"
  },
  {
    title: "Aadhaar KYC verification",
    description: "Implement Aadhaar-based KYC flow for new user onboarding.",
    priority: "High",
    dueDate: "2026-03-28",
    status: "in progress"
  },
  {
    title: "Pincode-based delivery check",
    description: "Allow users to check delivery availability by entering their pincode.",
    priority: "Medium",
    dueDate: "2026-03-30",
    status: "done"
  },
  {
    title: "Festive offer push notifications",
    description: "Send push notifications for Holi and Eid special offers to subscribed users.",
    priority: "Low",
    dueDate: "2026-04-01",
    status: "done"
  },
  {
    title: "COD order management",
    description: "Build admin panel section to manage and track cash-on-delivery orders.",
    priority: "Medium",
    dueDate: "2026-04-03",
    status: "to do"
  },
  {
    title: "Regional product catalog",
    description: "Add region-specific product listings for Maharashtra, Tamil Nadu, and Punjab.",
    priority: "Low",
    dueDate: "2026-04-05",
    status: "in progress"
  },
  {
    title: "Customer support chatbot",
    description: "Integrate a basic chatbot for handling common queries in Hindi and English.",
    priority: "Medium",
    dueDate: "2026-04-07",
    status: "done"
  }
]


async function seed() {
  await mongoose.connect(process.env.MONGO_URI!)
  await Task.deleteMany({})
  await Task.insertMany(tasks)
  console.log("Seeded 10")
  await mongoose.disconnect()
}

seed().catch(console.error)
