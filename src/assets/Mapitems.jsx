import Renderitems from "../Render-items";

const Mapitems=({inputdata})=>{
 return(
 <>
   {inputdata.map ((inputdata,index)=>(
    <Renderitems key={index}  todovalue={inputdata.name}  tododate={inputdata.date} />
    

  ))}


 </>
 )
};
export default Mapitems;