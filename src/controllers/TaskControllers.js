const {CreateTask,getTasks,getFiltredTasks,updateTask,deleteTask} = require('../services/taskServices')

const Createtask = async (req,res)=>{
    try{
        const newTask = await CreateTask(req.body);
        console.log(req.body)
        res.status(201).json(newTask);
    }catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create task' });
    }
}

const gettasks = async(req,res)=>{
    try{
        const tasks = await getTasks();
        res.status(200).json(tasks);
    }catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
}

const getfiltredtasks = async(req,res)=>{
    try{
        const {title} = req.query
        const tasks = await getFiltredTasks(title)
        res.status(200).json(tasks) 
    }catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
}

const updatetask = async (req,res)=>{
    try{
        const updatedTask = await updateTask(req.params.id, req.body)
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
}

const deletetask = async (req,res)=>{
    try{
        const deletedTask = await deleteTask(req.params.id)
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
}

module.exports = {Createtask,gettasks,getfiltredtasks,updatetask,deletetask}