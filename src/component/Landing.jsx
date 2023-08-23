import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import {Routes,Route, Outlet} from 'react-router-dom'
import Alltemplete from "./Alltemplete";
let Landing = ()=>{
    return(
        <>
        <Navbar/>
        <div className="container">
        <Routes>
            <Route path="/welcome" element={<Welcome/>}/>
            <Route path="/choose-template" element={<Alltemplete/>}/>
        </Routes>
            <Outlet/>
        </div>
        </>
    )
}
export default Landing;