import React from 'react'
import { Link } from 'react-router-dom'
export default function Welcome() {
  return (
    <div className='flex  border-dashed border-2 mx-10 p-32 mt-11'>
        {/* with welcome message */}
      <div className="w-6/12 text-center border-r-2 border-dashed px-4">
                <div className="font-2 text-4xl mb-4 ">
                    Welcome <span className="text-indigo-600">Krishna soni</span>
                    
                </div>
                <div>
                    <p>At Resume.cst, we understand that a well-crafted resume is not just a document; it's your gateway to opportunities. Our mission is to empower individuals to showcase their unique skills, experiences, and potential through professional, tailored resumes that stand out in today's competitive job market.</p>
                </div>
            </div>



            {/* with button */}

            <div className='flex justify-center items-center w-6/12'>
              <Link to="/choose-template" > <button className='py-2 px-3 bg-indigo-600 text-xl text-white rounded'>Create Resume</button>
              </Link></div>
    </div>
  )
}
