// import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from '../NoteDetails.client';

// interface NotePageProps {
//   params: Promise<{ id: string }>;
// }

// const NoteDetails = async ({ params }: NotePageProps) => {
//   const { id } = await params;
//   const note = await fetchNoteById(id);
//   return <NoteDetails noteId={id} />;
// };
// export default NoteDetails;

interface NotePageProps {
  params: { id: string };
}

const NoteDetails = async ({ params }: NotePageProps) => {
  const { id } = params;
  // const note = await fetchNoteById(id);
  return <NoteDetailsClient noteId={`note${id}`} />;
};

export default NoteDetails;
