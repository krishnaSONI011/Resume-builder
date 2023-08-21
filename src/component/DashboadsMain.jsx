import React from "react";
import Education from "./dashboard/Education";
import Employment from "./dashboard/Employment";
import Informaition from "./dashboard/Informaition";
import Skills from "./dashboard/Skills";
import Topbar from "./dashboard/Topbar";

let DashboadsMain = () => {
    return (
        <>
            <Topbar/>
            <div className="w-full">
                {/* Right hand side section here  */}
               <div className="w-6/12 overflow-y-scroll p-3 h-[600px]">
                    <Informaition/>
                    <Education/>
                    <Employment/>
                    <Skills/>
               </div>
               {/* Right hand side section here  */}
            </div>
        </>
    )
}
export default DashboadsMain