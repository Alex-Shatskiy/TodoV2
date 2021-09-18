exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todo")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todo").insert([
        { todo: "cat food", completed: false, catagorie_id: 4 },
        { todo: "dog food", completed: false, catagorie_id: 4 },
        { todo: "rice", completed: false, catagorie_id: 4 },
        { todo: "bannana", completed: false, catagorie_id: 4 },
        { todo: "Washing", completed: false, catagorie_id: 1 },
        { todo: "Cleaning", completed: false, catagorie_id: 1 },
        { todo: "Dryer", completed: false, catagorie_id: 1 },
        { todo: "Stock", completed: false, catagorie_id: 2 },
        { todo: "sell", completed: false, catagorie_id: 2 },
        { todo: "get to work", completed: false, catagorie_id: 2 },
        { todo: "gym", completed: false, catagorie_id: 3 },
        { todo: "fishing", completed: false, catagorie_id: 3 },
        { todo: "save", completed: false, catagorie_id: 3 },
      ])
    })
}
