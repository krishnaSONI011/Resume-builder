import React, { useState } from "react";
import { LuPencil,LuTrash2,LuCheck } from "react-icons/lu";
export default function EduacationDetail() {
  let [heading, setHeading] = useState("untitle");
  let [school, setSchool] = useState("untitle");
  let [address, setAddress] = useState("untitle");
  let [show, setShow] = useState("hidden");

  function hideandseek(){
   setShow("flex")
  }
  return (
    <div className="border rounded p-3 mb-4">
      <div className={`${show} justify-between`}>
        <div>
          {/* section that is goind to hide on click */}
          <p className="text-lg">
            <b>{heading}</b>
          </p>
          <p className="text-gray-400">
            <span>{school}</span>,<span>{address}</span>
          </p>
          {/* section that is goind to hide on click */}
        </div>
        <button className="border py-2 px-4 rounded hover:border-indigo-500 hover:bg-gray-100" onClick={()=>setShow("hidden")}>
          <LuPencil />
        </button>
      </div>
      {/* first section end */}
      <div className={`from-body ${show==="hidden" ? "block" : "hidden"} `}>
        <form>
          <label htmlFor="">Education</label>
          <br />
          <input type="text" className="input w-full" onChange={(e)=>setHeading(e.target.value)}/>
          <div className="flex mb-3 mt-3">
            <div className="form-feild w-6/12 mr-2">
              <label htmlFor="">School</label>
              <br />
              <input type="text" className="input w-full" onChange={(e)=>setSchool(e.target.value)}/>
            </div>
            <div className="form-feild w-6/12 ">
              <label htmlFor="">City</label>
              <br />
              <input type="text" className="input w-full" onChange={(e)=>setAddress(e.target.value)}/>
            </div>
          </div>
          {/* start and end detail forms */}
          <div className="flex w-full mb-3">
            <div className="flex w-6/12 items-center mr-2 mb-3">
              {/* first box */}
              <div className="forstart-date w-3/6 mr-2 ">
                <label htmlFor="">Start Date</label>
                <br />
                <select class="input w-full " id="month" name="month">
                  <option value="">month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              {/* form start date  */}

              <select class="input w-3/6 mt-6" id="year" name="year">
                <option value="">year</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
            {/* start date end */}
            <div className="flex w-6/12 ">
              <div className="forstart-date w-3/6 mr-2">
                <label htmlFor="">End Date </label>
                <br />
                <select class="input w-full " id="month" name="month">
                  <option value="">month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              {/* form start date  */}
              <div className="forstart-date w-3/6 text-left">
                <div className="flex flex-row-reverse align-middle justify-start">
                  <label htmlFor="" className="ml-2">
                    Present
                  </label>
                  <input type="checkbox" />
                </div>
                <select class="input w-full " id="year" name="year">
                  <option value="">year</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>
            {/* first box */}
          </div>
          {/* start and end detail forms edn*/}
            {/* description */}
            <label htmlFor="" className="mt-3">Description</label><br/>
            <textarea className="input w-full " rows={"10"}/>
        </form>
        {/* div for ending button */}
        <div className="flex justify-end mt-4">
            <button className="border p-2 rounded text-xl hover:border-indigo-500 hover:bg-gray-100"><LuTrash2/></button>
            <button className="p-2 bg-indigo-700 flex justify-center text-white px-3 items-center rounded ml-2" onClick={hideandseek}><span><LuCheck/> </span>Done</button>
        </div>
        {/* div for end btn  */}
      </div>
    </div>
  );
}
