
import { useState } from "react";
import Head from "./Head";
import Mapitems from "./assets/Mapitems";
import Wellcomemesage from "./Wellcomemesage";
import { todostore } from "./store/todo-store";

function App() {

  let [data , setdata]=useState([])
  console.log(1+1);


    let addnewitem=(textinput,dateinput)=>{
      // console.log("on submit text in app",textinput )
      // console.log("on submit date in app",dateinput)
      setdata([...data,{
        name : textinput,
        date : dateinput
      }]);
    };

    let deleteitem=(textinput)=>{
      let newlist= data.filter(items =>items.name !== textinput);
      setdata(newlist);
      // console.log(`item deleted ${textinput}`);
    }


  return (
    <todostore.Provider value={{
      data,
      addnewitem,
      deleteitem,
    }}>

    <div className="flex justify-center items-center">
     <div className=" flex justify-around flex-col  w-1/2  ">
        <Head />
        <Wellcomemesage></Wellcomemesage>
        <Mapitems />
      </div>
    </div>
  </todostore.Provider>
  )

}

export default App;
