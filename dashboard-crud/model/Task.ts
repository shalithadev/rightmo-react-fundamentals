import mongoose, { models } from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    desc: String,
    priority: {
        enum:['High', 'Low', 'Medium'],
        type: String
    }
});

const Task = models.tasks || mongoose.model("tasks",taskSchema);

export default Task;