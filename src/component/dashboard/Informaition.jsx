import React,{useState} from "react";
import { LuArrowDown,LuArrowUp } from "react-icons/lu";

export default function Informaition() {
    let [display,setDisply] = useState("hidden")
    let [arro,setArro] = useState(<LuArrowDown/>)

    let toggle=()=>{
        display === "hidden" ? setDisply("block")  :setDisply("hidden");
        display ==="hidden" ? setArro(<LuArrowUp/>) : setArro(<LuArrowDown/>)
        
    }
  return (
    <>
      <div className="border-b py-4">
        <div className="flex justify-between p-3 ">
          <h3 className="text-2xl">Personal Detail</h3>
          <button className="border p-2 rounded  " onClick={toggle}>
            {arro}
          </button>
        </div>
        {/* accodian title  */}
        {/* accodian body */}
        <div className={`mt-3 ${display}`}>
          <form>
            {/* first section */}
            <div className="flex justify-evenly">
              {/* photo section */}
              <div>
                <label htmlFor="photo">Photo</label>
                <span
                  className="flex justify-center items-center h-36 w-36 border-dashed border-2 p-4 hover:border-indigo-500 cursor-pointer"
                  id="photo"
                >
                  +
                </span>
              </div>
              {/* photo section */}
              <div className="flex flex-col justify-between">
                {/* first name information  */}
                <div className="form-item flex justify-evenly ms-4 flex-wrap">
                  <div className="w-6/12">
                    <label htmlFor="name">Given name</label><br/>
                    <input
                      type="text"
                      name="first-name"
                      className="input"
                      placeholder="e.g krishna"
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="name">Family name</label>
                    <input
                      type="text"
                      name="last-name"
                      className="input"
                      placeholder="e.g Soni"
                    />
                  </div>
                </div>
                {/* first name information  */}
                <div className=" block mt-3 p-4">
                  <div>
                    <label htmlFor="">Email</label>
                  
                  </div>
                  <input type="text" name="" id="" className="input w-full mr-4" placeholder="e.g krishna@gmail.com " />
                </div>
              </div>
              {/* email section */}
            </div>
             {/* first section */}
             {/* second section */}
             <div className=" p-2 pr-10 pl-5">
                <label htmlFor="">Headline</label><br/>
                <input type="text" className="input w-full mb-4" placeholder="e.g Frontend Developer"/>
                <label htmlFor="">Phone Number</label><br/>
                <input type="number" className="input w-full mb-4" placeholder="e.g +91-9876543210"/>

             </div>
             {/* second section */}
             {/* third section */}
             <div className="p-2 pr-10 pl-5">
             <label htmlFor="">Address</label><br/>
                <input type="text" className="input w-full mb-4" placeholder="e.g New Delhi"/>
                <div className="flex">
                    <div className="w-6/12 mr-3">
                    <label htmlFor="">Post Code</label><br/>
                    <input type="text" className="input w-full mb-4" placeholder="e.g New Delhi"/>
                    </div>
                    <div className="w-6/12">
                    <label htmlFor="">City</label><br/>
                    <input type="text" className="input w-full mb-4" placeholder="e.g New Delhi"/>
                    </div>
                </div>
             </div>
             {/* third section */}
          </form>
        </div>
      </div>
    </>
  );
}
