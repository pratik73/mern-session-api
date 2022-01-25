const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const auth = require("../../middleware/auth");
const Todo = require("../../models/Todo");

// @route   GET api/todo/me
// @desc    Get current users todos
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const todo = await Todo.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!todo) {
      return res.status(400).json({ msg: "There are no todos for this user" });
    }

    res.json(todo);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
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
      check("category", "Category is required").not().isEmpty(),
      check("title", "Title is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, category, status, priority, labels, date } = req.body;

      const todoFields = { title, category };
      if (status) todoFields.status = status;
      if (priority) todoFields.priority = priority;
      if (date) todoFields.date = date;
      if (labels) {
        todoFields.labels = Array.isArray(labels)
          ? labels
          : labels.split(",").map((label) => " " + label.trim());
      }

      let todo = await Todo.findOne({ user: req.user.id });

      if (todo) {
        // Update
        console.log("Updating records");
        todo = await Todo.findOneAndUpdate(
          { user: req.user.id },
          { $set: todoFields },
          { new: true }
        );

        return res.json(todo);
      }

      // Create
      todo = new Todo(todoFields);

      await todo.save();

      return res.json(todo);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// @route   GET api/todo
// @desc    Get all todos
// @access  Public
router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find().populate("user", ["name", "avatar"]);
    res.json(todo);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
  }
  return res.send({ msg: "Incomplete Implementation" });
});

// @route   DELETE api/todo
// @desc    Delete todo, user
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal Server Error");
  }
  return res.send({ msg: "Incomplete Implementation" });
});

module.exports = router;
