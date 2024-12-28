const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true,default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const task = mongoose.model('task',taskSchema);

module.exports = task;