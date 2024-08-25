import Renderitems from "../Render-items";

const Mapitems=({inputdata ,ondeleteclick})=>{
 return(
 <>
   {inputdata.map ((inputdata,index)=>(
    <Renderitems key={index}  todovalue={inputdata.name}  tododate={inputdata.date} ondeleteclick={ondeleteclick} />
    

  ))}


 </>
 )
};
export default Mapitems;