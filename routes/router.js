const express = require('express')
const router = express.Router()
const { getAllTodos, getTodosById, createTodos, deleteTodos, updateTodos } = require('../controllers/todoControllers')

router.get('/todos', getAllTodos)
router.get('/todos/:id', getTodosById)
router.post('/todos', createTodos)
router.put('/todos/:id', updateTodos)
router.delete('/todos/:id', deleteTodos)

module.exports = router