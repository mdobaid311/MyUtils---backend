const express = require("express");
const { getAllNotes, createNote, deleteNote, updateNote, getAllNotesByUser } = require("../controllers/notes");
 
const router = express.Router();

router.route("/").get(getAllNotes).post(createNote);
router.route("/:noteId").patch(updateNote).delete(deleteNote);
router.route("/note/:userId").get(getAllNotesByUser)

module.exports = router;
