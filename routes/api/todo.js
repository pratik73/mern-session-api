const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route   GET api/todo/me
// @desc    Get current users todos
// @access  Private
router.get("/me", auth, async (req, res) => {
  res.json({ msg: "Incomplete Implementation" });
});

// @route   POST api/todo
// @desc    Create or update a todo
// @access  Private
router.post("/", async (req, res) => {
  return res.send({ msg: "Incomplete Implementation" });
});

// @route   GET api/todo
// @desc    Get all todos
// @access  Public
router.get("/", async (req, res) => {
  return res.send({ msg: "Incomplete Implementation" });
});

// @route   GET api/todo/user/:user_id
// @desc    Get todo by user id
// @access  Public
router.get("/user/:user_id", async (req, res) => {
  return res.send({ msg: "Incomplete Implementation" });
});

// @route   DELETE api/todo
// @desc    Delete todo, user
// @access  Private
router.delete("/", auth, async (req, res) => {
  return res.send({ msg: "Incomplete Implementation" });
});

module.exports = router;
