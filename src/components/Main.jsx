import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import notes from "../API/notes";

const Main = () => {
  return (
    <>
     <div className="items-start flex flex-wrap py-4 px-2 justify-center bg-slate-200 ">
        <AddNote />
     </div>
      <div className="content-start items-start flex flex-wrap gap-y-4 gap-x-2 py-4 px-2 justify-start bg-slate-200 min-h-[50vh]">

        {
            notes.map((note) => <Note id={note.id} title={note.title} info={note.note}/>)
        }
        
      </div>
    </>
  );
};

export default Main;
