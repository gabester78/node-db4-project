const db = require("../dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  findSteps,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  return db("steps");
}
