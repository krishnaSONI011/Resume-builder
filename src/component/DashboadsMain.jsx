import React from "react";
import Informaition from "./dashboard/Informaition";
import Topbar from "./dashboard/Topbar";

let DashboadsMain = () => {
    return (
        <>
            <Topbar/>
            <div className="w-full">
                {/* Right hand side section here  */}
               <div className="w-6/12 overflow-y-scroll p-3 h-[600px]">
                    <Informaition/>
               </div>
               {/* Right hand side section here  */}
            </div>
        </>
    )
}
export default DashboadsMain