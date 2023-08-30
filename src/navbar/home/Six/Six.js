import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsFillHouseLockFill } from "react-icons/bs";

export default function Six() {
  return (
    <div className="bg-black  ">
      <div className="text-gray-200 m-16 grid grid-col-2">
        <div className="flex ">
          <div className="py-8 text-6xl"><BsFillHouseLockFill/></div>
          <div className="py-8 pl-[900px]">
            <div className="bg-slate-300 w-[600px] h-[60px]  flex ">
              <div className="pr-16 pt-3 pl-3">
                {" "}
                <button className="bg-black p-1 px-4">Subscribe</button>{" "}
              </div>
              <div className="pt-4 ">
                {" "}
                <input
                  className=" text-slate-950  bg-transparent outline-none"
                  type="text"
                  placeholder="Enter your mail"
                />
              </div>
              <div className="pt-4 ml-28 font-extrabold text-[30px] text-slate-950">
                <IoIosArrowRoundForward />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-50 pl-16 pr-16 -mt-10 pb-20">
    <div className="">Your profile contributions graph is a record of contributions </div>
    <div className="">Your profile contributions graph is a record of contributions </div>
    <div className="">Your profile contributions graph is a record of contributions </div>
    <div className="">Your profile contributions graph is a record of contributions </div>
    <div className="">Your profile contributions graph is a record of contributions </div>
    <div className="">Your profile contributions graph is a record of contributions </div>
      </div>
      <hr/>
      <div className="h-20 ml-16 flex items-center  text-gray-200">@Copyright 2023 Gates</div>
      <hr/>
    </div>
  );
}
