const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    text: String
})

const Todo = mongoose.model('Todolist', todoSchema)

module.exports = Todo