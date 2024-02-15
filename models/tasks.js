const mogoose = require('mongoose');

const userSchema = new mogoose.Schema({
    taskName:String
})

module.exports = mogoose.model('Task', userSchema)