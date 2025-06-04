import { useState } from "react";

function Nav3() {
  function Textenter(e) {
    const Bookname = e.target.value;
    // console.log("this is book name", Bookname);
  }

  function Clicked() {}

  return (
    <>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder=" Search..."
          className="p-3 pl-5 border border-blue-200 w-full max-w-md  rounded-l-full"
          onChange={Textenter}
        ></input>
        <button className="bg-amber-200 w-15 rounded-r-full pl-3 hover:bg-amber-400 hover:cursor-pointer ">
          <img
            src="Images\magnifying-glass-solid.svg"
            className="h-8 w-8 "
            onClick={Clicked}
          ></img>
        </button>
      </div>
    </>
  );
}

export default Nav3;
