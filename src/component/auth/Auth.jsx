import React from 'react'
import { Route,Routes,Outlet } from 'react-router-dom'
import Login from './Login'
import heroImg from '../../images/login-2.svg'
import Signup from './Signup'

export default function Auth() {
  return (
    <div className='flex'>
        <div className='hidden md:flex h-full  justify-center items-center my-auto w-8/12'>
        <div className="mb-12 md:mb-0 md:w-full lg:w-full  h-full">
            <img
              src={heroImg}
              className="w-full"
              alt="Phone"
            />
          </div>
        </div>
        <div className='w-full md:w-5/12 '>
        <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path="/signup"element={<Signup/>}/>
      </Routes>
      <Outlet/>
        </div>
     
    </div>
  )
}
