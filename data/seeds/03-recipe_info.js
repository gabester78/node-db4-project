exports.seed = function (knex, Promise) {
  return knex("recipe_info").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1 },
    { recipe_id: 1, ingredient_id: 2, quantity: 1 },
    { recipe_id: 1, ingredient_id: 3, quantity: 2 },
    { recipe_id: 2, ingredient_id: 3, quantity: 3 },
    { recipe_id: 2, ingredient_id: 4, quantity: 2 },
  ]);
};
