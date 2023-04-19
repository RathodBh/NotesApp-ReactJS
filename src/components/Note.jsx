import React from "react";

const Note = (props) => {
  let {id,title,info} = props;
  return (
    <>
      <div id={id} className="shadow-slate-400 rounded-lg shadow bg-white p-3 py-5 w-80 ">
        <h5 className="text-black">
          {title}
        </h5>
        <p className="text-slate-600">{info}</p>
      </div>
    </>
  );
};

export default Note;
