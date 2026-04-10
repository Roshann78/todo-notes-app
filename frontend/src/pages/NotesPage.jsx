import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const NotesPage = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Notes Page</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default NotesPage;
