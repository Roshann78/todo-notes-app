import { motion } from 'framer-motion';

const NoteCard = ({ note, onDelete }) => {
  const formattedDate = new Date(note.createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <motion.article 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
    >
      <header className="card-header">
        <h3 className="card-title">{note.title}</h3>
        <button 
          type="button" 
          onClick={onDelete}
          className="btn-delete"
          title="Delete note"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
          </svg>
        </button>
      </header>
      <p className="card-body">{note.body}</p>
      <footer className="card-footer">
        <time dateTime={note.createdAt}>{formattedDate}</time>
      </footer>
    </motion.article>
  );
};

export default NoteCard;
