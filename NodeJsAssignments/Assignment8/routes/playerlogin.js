const express = require("express");
const Bcrypt = require("bcrypt");
const Bodyparser = require("body-parser");
const Player = require("../model/player");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get(
  "/register",
  body("player_id").isEmail(),
  body("password").isLength({ min: 6, max: 16 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      Bcrypt.hash(req.body.password, 10, async function (err, hash) {
        if (err) {
          return res
            .status(500)
            .json({ status: "Failed", message: err.message });
        } else {
          const player = await Player.create({
            player_id: req.body.player_id,
            password: req.body.password,
            age: req.body.age,
            country: req.body.country,
            installed_days: req.body.installed_days,
            coins: req.body.coins,
            gems: req.body.gems,
            game_level: req.body.game_level,
            purchaser: req.body.purchaser,
          });
          res.status(201).json({
            status: "Success",
            message: "Registration successful",
          });
        }
      });
    } catch (e) {
      res.status(500).json({
        status: "Failed",
        message: e.message,
      });
    }
  }
);

module.exports = router;
