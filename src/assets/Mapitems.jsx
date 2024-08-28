import { useContext } from "react";
import Renderitems from "../Render-items";
import { todostore } from "../store/todo-store";

const Mapitems=()=>{
  const {data}=useContext(todostore);

return(
  <>
    {data.map( ( data , index ) => (
      <Renderitems key={index} todovalue={data.name}  tododate={data.date} index={index} />
      )
    )
  };
  </>
)
};
export default Mapitems;