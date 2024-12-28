const Task = require('../models/taskModel')

const CreateTask = async (taskData) => {
    try{
        const newTask = new Task(taskData)
        return await newTask.save();
    }catch(e){
        console.error("Error :", e);
    }
}

const getTasks = async () => {
    try{
        return await Task.find();
    }catch(e){
        console.error("Error :", e);
    }
}

const updateTask = async (taskId,updateData) => {
    try{
        return await Task.findByIdAndUpdate(taskId,updateData,{new:true});
    }catch(e){
        console.error("Error :", e);
    }
}

const deleteTask = async (taskId) => {
    try {
        return await Task.findByIdAndDelete(taskId);
    }catch(e){
        console.error("Error :", e);
    }
}

module.exports = {CreateTask,getTasks,updateTask,deleteTask}