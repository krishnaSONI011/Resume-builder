import React,{useState} from 'react'
import { LuPencil,LuTrash2,LuCheck } from "react-icons/lu";

export default function HobbiesDetail() {
    let [show, setShow] = useState("hidden");
   let [hobbies,setHobbies]= useState("[Hobbies]");
   
    function hideandseek(){
     setShow("flex")
    }
   
       
    
  return (
    <div>
       <div className="border rounded p-3 mb-4">
      <div className={`${show} justify-between`}>
        <div>
          {/* section that is goind to hide on click */}
          <p className="text-lg">
            <b>{hobbies}</b>
          </p>
          
          {/* section that is goind to hide on click */}
        </div>
        <button className="border py-2 px-4 rounded hover:border-indigo-500 hover:bg-gray-100" onClick={()=>setShow("hidden")}>
          <LuPencil />
        </button>
      </div>
      {/* first section end */}
      <div className={`from-body ${show==="hidden" ? "block" : "hidden"} `}>
       <form action="">
        <div>
            <label htmlFor="">Hobbie</label><br/>
            <input type="text" className='input w-full' onChange={(e)=>setHobbies(e.target.value)}/>
        </div>
        
       </form>
        {/* div for ending button */}
        <div className="flex justify-end mt-4">
            <button className="border p-2 rounded text-xl hover:border-indigo-500 hover:bg-gray-100"><LuTrash2/></button>
            <button className="p-2 bg-indigo-700 flex justify-center text-white px-3 items-center rounded ml-2" onClick={hideandseek}><span><LuCheck/> </span>Done</button>
        </div>
        {/* div for end btn  */}
      </div>
    </div>
    </div>)
}
