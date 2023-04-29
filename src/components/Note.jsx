import React from "react";

const Note = ({ note }) => {
  return (
    <div className="p-2 rounded-md shadow-sm shadow-gray-300 hover:shadow-lg">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};

export default Note;
