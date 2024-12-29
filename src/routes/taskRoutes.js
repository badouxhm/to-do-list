const express = require('express')
const controllers = require('../controllers/TaskControllers')

const router = express.Router();

router.post('/task',controllers.Createtask)
router.get('/task',controllers.getfiltredtasks)
router.put('/task/:id',controllers.updatetask)
router.delete('/task/:id',controllers.deletetask)

module.exports = router;