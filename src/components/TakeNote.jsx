import React from "react";

const TakeNote = () => {
  return (
    <div className="bg-gray-200 py-2 mb-4 px-4 rounded-md w-1/2 mx-auto">
      <input
        type="text"
        placeholder="Take a note..."
        className="bg-transparent outline-none px-2  w-full"
      />
    </div>
  );
};

export default TakeNote;
