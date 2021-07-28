const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  category: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  labels: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
