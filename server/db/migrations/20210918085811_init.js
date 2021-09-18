exports.up = function (knex) {
  return knex.schema.createTable("catagories", (table) => {
    table.increments("id")
    table.string("catagorie")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("catagories")
}
