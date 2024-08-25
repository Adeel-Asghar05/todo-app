function Renderitems({todovalue, tododate }){

  return(
    <div className="flex justify-around items-center border-b-2 p-1 mt-5  rounded w-full  bg-gray-300">
    <div className="w-44 flex justify-center items-center" >{todovalue}</div>
    <div className="w-44 flex justify-center items-center" >{tododate}</div>
    <button className="p-1 border-none bg-red-600 text-white rounded w-20 text-md"
     >Delete</button>
  </div>


 
  );
}

export default Renderitems;