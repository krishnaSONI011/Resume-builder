import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import {Routes,Route, Outlet} from 'react-router-dom'

let Landing = ()=>{
    return(
        <>
        <Navbar/>
        <div className="container">
        <Routes>
            <Route path="/welcome" element={<Welcome/>}/>
            
        </Routes>
            <Outlet/>
        </div>
        </>
    )
}
export default Landing;