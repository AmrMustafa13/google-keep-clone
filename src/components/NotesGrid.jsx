import React from "react";
import Note from "./Note";

const notes = [
  {
    id: 1,
    title: "Note 1",
    content: "Content 1",
  },
  {
    id: 2,
    title: "Note 2",
    content: "Content 2",
  },
  {
    id: 3,
    title: "Note 3",
    content: "Content 3",
  },
  {
    id: 4,
    title: "Note 4",
    content: "Content 4",
  },
  {
    id: 5,
    title: "Note 5",
    content: "Content 5",
  },
];

const NotesGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesGrid;
