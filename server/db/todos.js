const connection = require("./connection")

function addTodo(todo, db = connection) {
  return db("todo").insert(todo)
}
function getTodo(db = connection) {
  return db("todo").select()
}

module.exports = {
  addTodo,
  getTodo,
}
