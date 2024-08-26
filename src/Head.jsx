import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";


function Head({onsubmitData}){

let [textinput,setTextinput]=useState("");
let [dateinput,setDateinput]=useState("");

let handletextchange=(event)=>{
  setTextinput(event.target.value)
}


let handledatechange=(event)=>{
  event.preventDefault();
  setDateinput(event.target.value)

}


let onformsubmit=(event)=>{
  event.preventDefault();
  // console.log("on submit text", textinput)
  // console.log("on submit date", dateinput )
  onsubmitData(textinput,dateinput);

setDateinput("");
setTextinput("")
}

  return(
<form action="" onSubmit={onformsubmit}   >
    <div className="flex justify-around items-center border-b-2 p-1 mt-5 rounded   bg-gray-400">
    {/* input text */}
    {/* <div className="flex justify-around items-center border-b-2 p-1 mt-5 rounded w-full  bg-gray-300"> */}
        <input 
        className="py-1 px-2 bg-gray-200 input placeholder-black border-none w-44  rounded-md outline-none" type="text" 
        placeholder="Enter Text Here..."
        value={textinput}
        required
        onChange={handletextchange}
        />
        {/* input date */}
        <input 
        className="p-1 bg-gray-200  px-3 border border-none rounded-md outline-none w-44 " 
        type="date"
        value={dateinput}
        required
        onChange={handledatechange}

         />
        {/* submit button */}
        <button 
        className="p-1 border-none bg-green-600 text-white rounded w-20 flex justify-center items-center"  
        // type="submit"
         >
        <IoMdAddCircle  className="text-2xl "/>
        </button>
      </div>
      </form>

  )
}

export default Head;



