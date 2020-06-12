const express = require("express");

const db = require("./recipes_model.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.getRecipes()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't get the recipes." });
    });
});

// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   Schemes.findById(id)
//     .then((scheme) => {
//       if (scheme) {
//         res.json(scheme);
//       } else {
//         res.status(404).json({ message: "Can't get the scheme with this id." });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Can't get the schemes." });
//     });
// });

module.exports = router;
