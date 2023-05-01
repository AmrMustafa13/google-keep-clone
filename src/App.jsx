import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import EditLabels from "./components/EditLabels";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [openEditLabels, setOpenEditLabels] = useState(true);
  return (
    <>
      {openEditLabels && <EditLabels setOpenEditLabels={setOpenEditLabels} />}
      <Nav setOpenSidebar={setOpenSidebar} />
      <div className="flex justify-start">
        <Sidebar
          openSidebar={openSidebar}
          setOpenEditLabels={setOpenEditLabels}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
