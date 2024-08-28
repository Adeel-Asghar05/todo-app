
import { useState ,useReducer} from "react";
import Head from "./Head";
import Mapitems from "./assets/Mapitems";
import Wellcomemesage from "./Wellcomemesage";
import { todostore } from "./store/todo-store";


const reducer = (data ,action)=>{

  if( action.type === "NEW-ITEM" ) {
    return[
      ...data,
      {
        name : action.payload.name,
        date : action.payload.date,
      }
    ];
  } else if (action.type === "DELETE-ITEM") {

      return data.filter(items =>items.name !== action.payload.name);    
    
  }
};

function App() {

const [ data , dispatch ] = useReducer (reducer , [] );


  let addnewitem = ( textinput , dateinput ) => {
    const addnewitem={
      type : "NEW-ITEM",
        payload:{
          name : textinput,
          date : dateinput,
        }
    }
  dispatch(addnewitem);
};

let deleteitem = ( textinput) => {
  const deleteaction = {
    type : "DELETE-ITEM",
      payload : {
        name : textinput,
      },
  };
  dispatch(deleteaction);
};

return (
    <todostore.Provider value = {{
        data,
        addnewitem,
        deleteitem,
      }}>

    <div className = "flex justify-center items-center">
      <div className = " flex justify-around flex-col  w-1/2  ">
        <Head />
        <Wellcomemesage></Wellcomemesage>
        <Mapitems />
      </div>
    </div>
  </todostore.Provider>
);
};

export default App;
