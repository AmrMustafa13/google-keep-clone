import React from "react";
import TakeNote from "../components/TakeNote";
import NotesGrid from "../components/NotesGrid";

const Home = () => {
  return (
    <div className="p-4 w-full min-h-screen">
      <TakeNote />
      <NotesGrid />
    </div>
  );
};

export default Home;
