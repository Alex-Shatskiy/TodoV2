const connection = require("./connection")

function addTodo(todo, db = connection) {
  return db("todo").insert(todo)
}
function getTodo(db = connection) {
  return db("catagories")
    .innerJoin("todo", "todo.catagorie_id", "catagories.id")
    .select()
}

module.exports = {
  addTodo,
  getTodo,
}
