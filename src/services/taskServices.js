const Task = require('../models/taskModel')

const CreateTask = async (taskData) => {
    try{
        const {title, completed, userId} = taskData;
        if (!title || !completed || !userId){
            throw new Error("All information are required!");
        }
        const newTask = new Task({title, completed, userId});
        return await newTask.save();
    }catch(e){
        console.error("Error :", e);
        throw e;
    }
}

const getTasks = async () => {
    try{
        return await Task.find();
    }catch(e){
        console.error("Error :", e);
        throw e;
    }
}

const getFiltredTasks = async (title) => {
    try{
        const filter = {};
        if (title) {
            filter.title = { $regex: title, $options: 'i' };
        }
        const tasks = await Task.find(filter);
        return tasks;
    }catch(e){
        console.error("Error :", e);
        throw e;
    }
}

const updateTask = async (taskId,updateData) => {
    try{
        return await Task.findByIdAndUpdate(taskId,updateData,{new:true});
    }catch(e){
        console.error("Error :", e);
        throw e;
    }
}

const deleteTask = async (taskId) => {
    try {
        return await Task.findByIdAndDelete(taskId);
    }catch(e){
        console.error("Error :", e);
        throw e;
    }
}

module.exports = {CreateTask,getTasks,getFiltredTasks,updateTask,deleteTask}