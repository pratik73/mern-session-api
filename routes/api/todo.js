const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
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
    console.error(err.message);
    res.status(500).send("Server Error");
  }
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

    const { category, title, priority, status, labels, date } = req.body;

    try {
      // build todo instance
      const todoFields = {};
      todoFields.user = req.user.id;
      todoFields.title = title;
      todoFields.status = status;

      if (category) todoFields.category = category;
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
        todo = await Todo.findOneAndUpdate(
          { user: req.user.id },
          { $set: todoFields },
          { new: true }
        );

        return res.json(todo);
      }

      //Create
      todo = new Todo(todoFields);

      await todo.save();

      return res.json(todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
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
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/todo
// @desc    Delete todo, user
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    // Remove todo
    const removedDocument = await Todo.findOneAndRemove({ _id: req.params.id });

    if (!removedDocument) {
      res.json({ msg: "Todo not found" });
    } else {
      res.json({ msg: "Todo deleted", removed: removedDocument });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
