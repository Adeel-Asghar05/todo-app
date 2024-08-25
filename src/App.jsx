
import { useState } from "react";
import Head from "./Head";
import Mapitems from "./assets/Mapitems";



function App() {



  let [data , setdata]=useState([{
    name:"buy milk",
    date:"2024-05-17"
  }])


    let handleformsubmit=(textinput,dateinput)=>{
      console.log("on submit text in app",textinput )
      console.log("on submit date in app",dateinput)
      setdata([...data,{
        name : textinput,
        date : dateinput
      }]);
    };


  return (
    <>
     <div className="flex justify-center items-center">
    <div className=" flex justify-around flex-col items-cente w-1/2  ">
        <Head onsubmitData={handleformsubmit} />
        <Mapitems inputdata={data}  />
        </div>
  </div>
    </>
  )
}

export default App;
