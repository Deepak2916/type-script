"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    let body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(200).json({ success: true, todos: todos });
});
router.put('/todo/:id', (req, res, next) => {
    let params = req.params;
    let todoIndex = todos.findIndex(index => index.id === params.id);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: req.body.text
        };
        return res.status(200).json({ success: true, todos: todos });
    }
});
router.delete('/todo/:id', (req, res, next) => {
    let params = req.params;
    todos = todos.filter(todo => todo.id !== params.id);
    res.status(200).json({ success: true, todo: todos });
});
exports.default = router;
