const router = require('express').Router();
const todos = require('./todo.routes');

router.use('/api/todos', todos)

module.exports = router; 