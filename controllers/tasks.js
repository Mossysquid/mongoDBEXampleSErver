const Task = require('../models/tasks')

module.exports = {
    createUser: async (req, res) =>{
        console.log(`create task`);
        try{
            const {taskname} = req.body
            const task = new Task({taskname})
            task.save()
            console.log(task);
            res.json(task);
        }catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    },

    listUsers: async (req, res) => {
      try {
        const tasks = await User.find();
        res.json(tasks);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },

    listUser: async (req, res) => {
      try {
        const { id } = req.params;
        const task = await User.findById(id);
        res.json(task);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

}