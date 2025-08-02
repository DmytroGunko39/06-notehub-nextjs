import NoteList from '@/compontnts/NoteList/NoteList';
// import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

const Notes = async () => {
  const response = await fetchNotes();
  return (
    <main>
      {/* <NotesClient /> */}
      <NoteList notes={response.notes} />
    </main>
  );
};

export default Notes;
