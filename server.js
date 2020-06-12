const express = require("express");

const recipeRouter = require("./data/schemes/recipes_router.js");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRouter);

module.exports = server;
