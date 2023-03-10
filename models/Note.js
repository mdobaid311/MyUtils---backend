const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a valid title"],
  },
  note: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Note", NoteSchema);
