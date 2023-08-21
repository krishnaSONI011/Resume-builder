import React,{useState} from "react";
import { LuArrowDown, LuArrowUp, LuPlus } from "react-icons/lu";
import EmploymentDetail from './EmploymentDetail'

let Employment=()=>{
    let [display, setDisplay] = useState("hidden");
  let [arrow, setArrow] = useState(<LuArrowDown />);
  let [education, setEducation] = useState([]);

  let toggle = () => {
    setDisplay(display === "hidden" ? "block" : "hidden");
    setArrow(display === "hidden" ? <LuArrowUp /> : <LuArrowDown />);
  };

  let handleAddEmployment = () => {
    setEducation([...education, {}]);
  };
    return(
<>



    <>
      <div className="border-b py-4">
        <div className="flex justify-between p-3">
          <h3 className="text-2xl">Employment</h3>
          <button className="border p-2 rounded" onClick={toggle}>
            {arrow}
          </button>
        </div>
        {/* Accordion body */}
        <div className={`mt-3 ${display}`}>
          <div className="ml-10">
            {education.map((edu, index) => (
              <EmploymentDetail key={index} />
            ))}
            <button
              className="flex border rounded p-2 items-center"
              onClick={handleAddEmployment}
            >
              <span className="mr-2">
                <LuPlus />
              </span>
              Add employment
            </button>
          </div>
        </div>
        {/* Accordion body */}
      </div>
    </>
</>
    );
}
export default Employment;