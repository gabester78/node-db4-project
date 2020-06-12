exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Fried Chicken" },
    { recipe_name: "Bacon Omelette" },
  ]);
};
