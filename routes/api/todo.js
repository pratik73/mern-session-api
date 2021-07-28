const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route   GET api/todo/me
// @desc    Get current users todos
// @access  Private
router.get("/me", async (req, res) => {
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

// @route   DELETE api/todo
// @desc    Delete todo
// @access  Private
router.delete("/:id", async (req, res) => {
  return res.send({ msg: "Incomplete Implementation" });
});

module.exports = router;
