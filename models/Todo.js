const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  label: {
    type: String,
    required: [true, "Please enter a valid todo"],
  },
  completed: {
    type: Boolean,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
