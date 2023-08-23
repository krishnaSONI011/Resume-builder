import React,{useState} from "react";
import Education from "./dashboard/Education";
import Employment from "./dashboard/Employment";
import Hobbies from "./dashboard/Hobbies";
import Informaition from "./dashboard/Informaition";
import Language from "./dashboard/Language";
import Skills from "./dashboard/Skills";
import Topbar from "./dashboard/Topbar";
import T1 from "./template/T1";

let DashboadsMain = () => {
 let [firstname,SetfirstName]= useState("")
 let [lastname,SetlastName]=useState("")
 let [headline,Setheadline]=useState("")
 let [email,setEmail]=useState("")
 let[phone,setPhone]=useState('')
 let [address,setAddress]=useState("")
 let [postcode,setPostcode]=useState("")
 let [city,setCity]=useState("")
    return (
        <>
            <Topbar/>
            <div className="flex w-full">
                {/* Right hand side section here  */}
               <div className="w-6/12 overflow-y-scroll p-3 h-[600px]">
                    <Informaition setname={SetfirstName} setlastname={SetlastName} setheadline={Setheadline} setemail={setEmail} setphone={setPhone} setaddress={setAddress} setpostcode={setPostcode} setcity={setCity}/>
                    <Education/>
                    <Employment/>
                    <Skills/>
                    <Language/>
                    <Hobbies/>
               </div>
               {/* Right hand side section here  */}
               <div className="w-6/12">
                <T1 
                firstname={firstname}
                lastname={lastname}
                headline={headline}
                email={email}
                phone={phone}
                address={address}
                postcode={postcode}
                city={city}
                 />
               </div>
            </div>
        </>
    )
}
export default DashboadsMain