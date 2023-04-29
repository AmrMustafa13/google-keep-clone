import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <>
      <Nav setOpenSidebar={setOpenSidebar} />
      <div className="flex justify-start">
        <Sidebar openSidebar={openSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
