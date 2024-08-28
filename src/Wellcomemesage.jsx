import { todostore } from "./store/todo-store";
import { useContext } from "react";


let Wellcomemesage=()=>{
  const {data}=useContext(todostore);

  return(
    data.length === 0 &&  
      <p className="font-bold flex justify-around text-2xl items-center mt-5  rounded w-full">
        Wellcome in Todo App 
          </p>

  )
};

export default Wellcomemesage;