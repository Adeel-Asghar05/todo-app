
import { useState } from "react";
import Head from "./Head";
import Mapitems from "./assets/Mapitems";
import Wellcomemesage from "./Wellcomemesage";

function App() {

  let [data , setdata]=useState([
  //   {
  //   name:"buy milk",
  //   date:"2024-05-17"
  // }
])

    let handleformsubmit=(textinput,dateinput)=>{
      // console.log("on submit text in app",textinput )
      // console.log("on submit date in app",dateinput)
      setdata([...data,{
        name : textinput,
        date : dateinput
      }]);
    };

    let handledeletebtn=(textinput)=>{
      let newlist= data.filter(items =>items.name !== textinput);
      setdata(newlist);
      console.log(`item deleted ${textinput}`);
    }

  return (
    <>
     <div className="flex justify-center items-center">
    <div className=" flex justify-around flex-col  w-1/2  ">
        <Head onsubmitData={handleformsubmit} />
        {data.length === 0 && <Wellcomemesage></Wellcomemesage>}
        <Mapitems inputdata={data} ondeleteclick={handledeletebtn} />
        </div>
  </div>
    </>
  )
}

export default App;
