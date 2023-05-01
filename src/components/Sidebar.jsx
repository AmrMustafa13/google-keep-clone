import React from "react";
import { TbNotes, TbArchive, TbBell, TbEdit, TbTrash } from "react-icons/tb";

const Sidebar = ({ openSidebar, setOpenEditLabels }) => {
  if (!openSidebar)
    return (
      <ul className="pt-1 pl-2 text-[16px]">
        <li className="flex items-center gap-2 cursor-pointer bg-yellow-100  rounded-full p-4 transition duration-200">
          <TbNotes />
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-full p-4 transition duration-200">
          <TbBell />
        </li>
        <li
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-full p-4 transition duration-200"
          onClick={() => setOpenEditLabels(true)}
        >
          <TbEdit />
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-full p-4 transition duration-200">
          <TbArchive />
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-full p-4 transition duration-200">
          <TbTrash />
        </li>
      </ul>
    );
  return (
    <ul className="pt-1 text-[16px]">
      <li className="flex items-center gap-2 cursor-pointer bg-yellow-100 rounded-e-3xl pl-4 py-4 pr-10 transition duration-200">
        <TbNotes />
        <span>Notes</span>
      </li>
      <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-e-3xl pl-4 py-4 pr-10 transition duration-200">
        <TbBell />
        <span>Reminders</span>
      </li>
      <li
        className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-e-3xl pl-4 py-4 pr-10 transition duration-200"
        onClick={() => setOpenEditLabels(true)}
      >
        <TbEdit />
        <span>Edit labels</span>
      </li>
      <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-e-3xl pl-4 py-4 pr-10 transition duration-200">
        <TbArchive />
        <span>Archive</span>
      </li>
      <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-e-3xl pl-4 py-4 pr-10 transition duration-200">
        <TbTrash />
        <span>Trash</span>
      </li>
    </ul>
  );
};

export default Sidebar;
