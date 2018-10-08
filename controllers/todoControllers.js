'use strict';
const Todo = require('../models/todo')

module.exports = {
    getAllTodos: (req, res) => {
        Todo
        .find()
        .then((data) => {
            res.send(data)
        })
        .catch((e) => {
            res.send(e)
        })
    },
    getTodosById: (req, res) => {
        Todo
        .findById({ _id: req.params.id })
        .then((data) => {
            res.send(data)
        })
        .catch((e) => {
            res.send({
                errorMsg: e,
                status: "failed"
            })
        })
    },
    createTodos: (req, res) => {
        let newTodos = new Todo(req.body)
        newTodos
        .save()
        .then(() => {
            res.send({
                type: "POST",
                status: "sucess"
            })
        })
        .catch((e) => {
            res.send({
                errorMsg: e,
                status: "failed"
            })
        })
    },
    deleteTodos: (req,res) => {
        Todo
        .deleteOne({ _id: req.params.id })
        .then(() => {
            res.send({
                type: "DELETE",
                status: "success"
            })
        })
        .catch((e) => {
            res.send({
                errorMsg: e,
                status: "failed"
            })
        })
    },
    updateTodos: (req, res) => {
        Todo
        .updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.send({
                type: "PUT",
                status: "success"
            })
        })
        .catch((e) => {
            res.send({
                errorMsg: e,
                status: "failed"
            })
        })
    }
}