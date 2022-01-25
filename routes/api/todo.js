const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

// @route   GET api/todo/me
// @desc    Get current users todos
// @access  Private
router.get("/me", auth, async (req, res) => {
  res.json({ msg: "Incomplete Implementation" });
});

// @route   POST api/todo
// @desc    Create or update a todo
// @access  Private
router.post(
  "/",
  auth,
  [
    check("title", "Title is required").not().isEmpty(),
    check("status", "Status is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.send({ msg: "Incomplete Implementation" });
  }
);

// @route   GET api/todo
// @desc    Get all todos
// @access  Public
router.get("/", async (req, res) => {
  return res.send({ msg: "Incomplete Implementation" });
});

// @route   DELETE api/todo
// @desc    Delete todo, user
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  return res.send({ msg: "Incomplete Implementation" });
});

module.exports = router;
