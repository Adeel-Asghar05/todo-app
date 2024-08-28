import { createContext } from "react";

export const todostore=createContext(
  {
    data: [],
      addnewitem: ()=>{},
        deleteitem: ()=>{}

  }
);


