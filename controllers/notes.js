const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateNote = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.noteId,
      req.body
    );
    console.log(updatedNote);
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.noteId);
  res.status(200).json("Note Deleted");
};

const getAllNotesByUser = async (req, res) => {
  try {
    const notes = await Note.find({ _id: req.body.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  getAllNotesByUser,
  deleteNote,
};
