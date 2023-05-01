import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

const EditLabels = ({ setOpenEditLabels }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 "
      onClick={(e) => {
        if (e.target.classList.contains("bg-opacity-50")) {
          setOpenEditLabels(false);
        }
      }}
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-gray-500 bg-white rounded-sm p-4 z-50">
        <div className="flex flex-col">
          <h1 className="text-xl font-medium">Edit labels</h1>
          <div
            className="
            flex items-center gap-2 mt-4
          "
          >
            <div
              className="p-2  hover:bg-gray-200 rounded-full text-2xl  text-gray-700 cursor-pointer transition duration-200"
              onClick={() => setOpenEditLabels(false)}
            >
              <RiCloseFill />
            </div>
            <input
              type="text"
              placeholder="Create a new label"
              className="
            border-b-2 border-gray-300 outline-none w-full 
            "
            />
            <div className="p-2 hover:bg-gray-200 rounded-full text-2xl  text-gray-700  cursor-pointer transition duration-200">
              <BsCheckLg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLabels;
