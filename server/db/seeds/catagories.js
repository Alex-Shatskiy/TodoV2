exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("catagories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("catagories").insert([
        { id: 1, catagorie: "Home" },
        { id: 2, catagorie: "Work" },
        { id: 3, catagorie: "Personal" },
        { id: 4, catagorie: "Shopping" },
      ])
    })
}
