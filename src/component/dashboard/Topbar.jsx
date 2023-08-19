import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
export default function Topbar() {
  return (
    <div className='bg-black w-full py-3 px-4'>
          <div className='flex justify-between'>
        <button className='text-white flex border p-2 rounded hover:bg-white hover:text-black'><span className='text-2xl'><IoIosArrowRoundBack /></span> Resumes</button>
        <div>
          <input type="text" className='bg-transparent text-white font-medium text-xl text-center outline-none focus:border-b-2 focus:border-purple-500 ' placeholder='untitle-resume'/>
        </div>
        <button className='bg-indigo-600 p-2 rounded text-white flex'><span className='text-2xl'><LiaDownloadSolid /></span> download</button>
      </div>
    </div>
  )
}
