exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.text("recipe_name", 255).notNullable();
    })

    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.text("ingredient_name", 255).notNullable();
    })

    .createTable("recipe_info", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("recipes.id")
        .onDelete("RESTRICT") // RESTRICT, CASCADE, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("ingredients.id")
        .onDelete("RESTRICT") // RESTRICT, CASCADE, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
      tbl.integer("quantity").unsigned().notNullable();
    })

    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl.text("recipe_step", 255).notNullable();
      tbl.text("instructions", 255).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("recipes.id")
        .onDelete("RESTRICT") // RESTRICT, CASCADE, SET NULL, DO NOTHING
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_info")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
