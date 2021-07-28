const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

// @route   GET api/todo/me
// @desc    Get current users todos
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = undefined;
    if (!profile) {
      return res.status(400).json({ msg: "There are no todos for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }

  res.json({ msg: "Incomplete Implementation" });
});

// @route   POST api/todo
// @desc    Create or update a todo
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("status", "Status is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // find profile
      // update if exists
      // create if it does not
      res.send("todo created/updated");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }

    return res.send({ msg: "Incomplete Implementation" });
  }
);

// @route   GET api/todo
// @desc    Get all todos
// @access  Public
router.get("/", async (req, res) => {
  try {
    // get all todos
    res.send("All todos");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
  return res.send({ msg: "Incomplete Implementation" });
});

// @route   DELETE api/todo
// @desc    Delete todo
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    // Remove todo

    res.json({ msg: "Todo deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
  return res.send({ msg: "Incomplete Implementation" });
});

module.exports = router;
