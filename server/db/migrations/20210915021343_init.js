exports.up = function (knex) {
  return knex.schema.createTable("todo", (table) => {
    table.increments("id")
    table.string("todo")
    table.boolean("completed")
    table.integer("catagorie_id")
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("todo")
}
