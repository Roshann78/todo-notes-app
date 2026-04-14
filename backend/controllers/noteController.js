const Note = require('../models/Note');

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, body } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const note = await Note.create({
      userId: req.userId,
      title,
      body: body || ''
    });
    
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, body } = req.body;
    
    const note = await Note.findOne({ _id: req.params.id, userId: req.userId });
    
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    
    if (title !== undefined) note.title = title;
    if (body !== undefined) note.body = body;
    note.updatedAt = Date.now();
    
    const updatedNote = await note.save();
    
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    
    res.json({ message: 'Note removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote
};
