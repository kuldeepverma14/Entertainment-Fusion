import React from "react";
import "./first.css";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function First() {
  return (
    <div className="bgFirst bg-no-repeat bg-cover h-screen text-white">
      <div className="grid grid-cols-2 ">
        <div className="flex items-center justify-center h-screen flex-col ">
          <div className="">
          <div className="text-[70px] pr-56 ">Welcome to </div>{" "}
          <div className="text-[70px] pb-5  ">Gates</div>
          <div className="text-[20px] text-slate-300 ">Practice makes superfine and perfect , So keep doing your best! </div>
          <div className="text-[20px] text-slate-300 ">See you Again... </div>
          </div>
          <div className="py-8">
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
        <div className="text-right mt-[700px] mr-20 p-3">
          <div className="text-slate-400 pb-3">Action</div>
          <div className="text-slate-400 pb-3">Comedy</div>
          <div className="text-slate-400 pb-3">Drama</div>
          <div className="text-slate-400 pb-3">Military</div>
          <div className="flex ml-[740px]  ">
          <div className="text-slate before:rounded-full  pb-3">Fantasy </div>
          <div className=" w-2 h-2 mt-[11px] ml-2  rounded-full bg-white  "></div>
          </div>
        </div>
      </div>
      <div>
        <div>edfrgh</div>
      </div>
    </div>
  );
}
