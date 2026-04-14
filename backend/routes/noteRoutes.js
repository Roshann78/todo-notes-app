const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/noteController');

router.use(protect);

router.route('/')
  .get(getAllNotes)
  .post(createNote);

router.route('/:id')
  .put(updateNote)
  .delete(deleteNote);

module.exports = router;
