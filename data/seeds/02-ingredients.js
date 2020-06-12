exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Chicken" },
    { ingredient_name: "Flour" },
    { ingredient_name: "Eggs" },
    { ingredient_name: "Bacon" },
  ]);
};
