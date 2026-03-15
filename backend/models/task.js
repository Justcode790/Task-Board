"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var taskSchema = new mongoose_1.default.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low"
    },
    dueDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ["todo", "inprogress", "done"],
        default: "todo"
    }
});
exports.default = mongoose_1.default.model("Task", taskSchema);
