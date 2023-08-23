import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <section className="h-full my-auto">
  <div className="container h-full px-7 py-48">
      <form>
        <div className="text-center">
            <h2 className="text-xl mb-4">Register</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* <!--First name input--> */}
          <TEInput
            type="email"
            label="First name"
            className="mb-6"
          ></TEInput>

          {/* <!--Last name input--> */}
          <TEInput
            type="password"
            label="Last name"
            className="mb-6"
          ></TEInput>
        </div>

        {/* <!--Email input--> */}
        <TEInput
          type="email"
          label="Email address"
          className="mb-6"
        ></TEInput>

        {/* <!--Password input--> */}
        <TEInput
          type="password"
          label="Password"
          className="mb-6"
        ></TEInput>

        
       

        {/* <!--Submit button--> */}
        <TERipple rippleColor="light" className="w-full">
          <button
            type="button"
            className="block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
          >
            Sign up
          </button>
        </TERipple>
        <div className="text-center mt-4">
            Already Have Account ? <span><Link to="../login">Login </Link></span>
        </div>
      </form>
    </div>
    </section>
  
  );
}