import React,{useState} from 'react'
import { LuPencil,LuTrash2,LuCheck } from "react-icons/lu";

export default function LanguageDetail() {
    
    let [show, setShow] = useState("hidden");
    let[level,setLevel]=useState("Make a choice");
    let [language,setLanguage]= useState("[Language]");
    let [valS,setValS]= useState("0")
    function hideandseek(){
     setShow("flex")
    }
    function handleRange(e){
        const val = e.target.value;
         setValS(val)
        let newLevel = "Make a choice"; // Default value
        
        switch (val) {
          case "1":
            newLevel = "Beginner";
            break;
          case "2":
            newLevel = "Moderate";
            break;
          case "3":
            newLevel = "Good";
            break;
          case "4":
            newLevel = "Very good";
            break;
          case "5":
            newLevel = "Excellent";
            break;
          default:
            break;
        }
      
        setLevel(newLevel); // Update the state with the new level
    }
  return (
    <div>
       <div className="border rounded p-3 mb-4">
      <div className={`${show} justify-between`}>
        <div>
          {/* section that is goind to hide on click */}
          <p className="text-lg">
            <b>{language}</b>
          </p>
          <p className="text-gray-400">
            <span>{level}</span>
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
            <label htmlFor="">Language</label><br/>
            <input type="text" className='input w-full' onChange={(e)=>setLanguage(e.target.value)}/>
        </div>
        <div className='mt-4'>
        <label
            htmlFor="customRange2"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Level
          </label>
          <div className='flex justify-between items-center'>
          <input
            type="range"
            className="transparent h-1.5  cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200 w-3/6"
            min="0"
            max="5"
            value={level === "Make a choice" ? "0" : valS}
            id="customRange2"
            onChange={handleRange}
          />
          <span className='text-center w-full text-lg '>{level}</span>
          </div>
          
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
    </div>
  )
}
