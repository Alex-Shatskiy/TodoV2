const express = require("express")
const todoDb = require("../db/todos")

const router = express.Router()

router.post("/addTodo", (req, res) => {
  return todoDb.addTodo(req.body).then((todo) => {
    res.json(todo)
  })
})

router.get("/getAllTodo", (req, res) => {
  return todoDb.getTodo().then((todo) => {
    res.json(todo)
  })
})

router.get("/test", (req, res) => {
  res.send({ name: "alex", message: "work plz" })
})

module.exports = router
