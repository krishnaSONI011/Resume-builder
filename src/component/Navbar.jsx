import React from "react";
import { LuLogOut } from "react-icons/lu";
let Navbar = () => {
    return (
        <>
            <div className="flex justify-between border-b py-5 px-3">
                <p className="font-1 text-4xl font-semibold">
                   <span className="text-indigo-700">R</span>esume.cst
                </p>
                <button className="bg-danger-600 p-2 text-xl text-white rounded-md"><LuLogOut/></button>
            </div>
        </>
    )
}
export default Navbar;