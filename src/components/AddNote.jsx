import React, { useState } from "react";
import notes from "../API/notes";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const add = (event) => {
    let obj = {};
    obj.id=10;
    obj.title = title;
    obj.info = info;
   
    notes.push(obj);
    console.log("Adde",notes)
  };
  return (
    <>
      <div className="w-1/2  shadow-lg shadow-slate-400 bg-yellow-300  p-4 rounded-lg flex-col flex">
        <input
          type="text"
          placeholder="Enter title"
          className="w-100 p-2 my-4 rounded-lg"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          id="note"
          rows="3"
          className="resize-none w-100 p-2 rounded-lg"
          placeholder="Enter Note"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <div className="flex justify-center my-4 mb-0">
          <button
            className=" rounded-full px-7 py-2 bg-green-800 hover:bg-green-950 text-white"
            onClick={add}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
