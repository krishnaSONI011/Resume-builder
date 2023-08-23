import React from 'react'
import { LuMailCheck,LuPhoneCall,LuLocateFixed } from "react-icons/lu";
const T1=props=> {
  return (
    <>
    {/* top section */}

      <section className='p-3 bg-[#3e4d6b] w-full'>
        <p className={`font-2 text-white text-3xl font-normal ${props.name ===""? "hidden" : "block"}`}><span>{props.firstname}</span> <span className={`${props.lastname===""?"hidden":""}`}>{props.lastname}</span></p>
        <p className={`text-secondary-500 pt-2 ${props.headline===""?"hidden":"block"}`}>{props.headline}</p>

        {/* Icon section Here  */}

        <div className='flex'>
            <span className={`${props.email===""?"hidden":"flex"} pt-3 mr-4 items-center text-secondary-500`}><LuMailCheck className='mr-2'/>{props.email}</span>
            <span className={`${props.phone===""?"hidden":"flex"} pt-3 mr-4 items-center text-secondary-500`}><LuPhoneCall className='mr-2'/>{props.phone}</span>
            <span className={`${props.address===""?"hidden":"flex"} pt-3 mr-4 items-center text-secondary-500`}><LuLocateFixed className='mr-2'/>{props.address} { props.postcode===""?"":","+props.postcode} {props.city===""?"":props.city}</span>
        </div>
      </section>

      {/* middle section*/}

     <section className='flex'>
        {/* Left Section  */}
        <div className='w-3/4 border-r h-full'>

            sdf
        </div>

        {/* Right Section */}
        <div>

        </div>
     </section>
    </>
  )
}
export default T1;
