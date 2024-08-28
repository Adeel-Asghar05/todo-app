import { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

import { todostore } from "./store/todo-store";
import { useContext } from "react";

function Head(){

  const {addnewitem}=useContext(todostore);


const todoname=useRef();
const tododate=useRef();


let onformsubmit=(event)=>{
  event.preventDefault();

  const textinput=todoname.current.value;
  const dateinput=tododate.current.value;

  todoname.current.value="";
  tododate.current.value="";

  addnewitem(textinput,dateinput);
}

  return(
<form action="" onSubmit={onformsubmit}  >
    <div className="flex justify-around items-center border-b-2 p-1 mt-5 rounded   bg-gray-400">
    {/* input text */}
        <input 
        className="py-1 px-2 bg-gray-200 input placeholder-black border-none w-44  rounded-md outline-none" type="text" 
        placeholder="Enter Text Here..."
        ref={todoname}
        required
        />
        {/* input date */}
        <input 
        className="p-1 bg-gray-200  px-3 border border-none rounded-md outline-none w-44 " 
        type="date"
        ref={tododate}
        required

        />
        {/* submit button */}
        <button 
        className="p-1 border-none bg-green-600 text-white rounded w-20 flex justify-center items-center"  
        >
        <IoMdAddCircle  className="text-2xl "/>
        </button>
      </div>
      </form>

  )
}

export default Head;



