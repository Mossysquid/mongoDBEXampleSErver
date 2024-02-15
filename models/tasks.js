const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskname:String
})

module.exports = mongoose.model('Task', taskSchema)