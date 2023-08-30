import React from "react";
import Rectangle1 from "../../../assets/Rectangle1.png";
import Rectangle39 from "../../../assets/Rectangle 39.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./Second.css"

export default function Second() {
  return (
    <div className="m-16">
      <h2 className="text-[25px] font-bold">New & Trendy</h2>
      <div className="">
        <hr />
      </div>
      <div className="grid grid-cols-2  mt-5">
        <div className="">
          <img className="w-[852px]" src={Rectangle39} />
        </div>
        <div className="Transparent1">
          <div className="mx-32 my-24">
            <div className="flex text-[21px] text-stone-700">
              Fantasy{" "}
              <div className="h-1 w-1 rounded-full bg-stone-500 mt-3 ml-10 mr-3 "></div>{" "}
              <div className="text-stone-500">1 Month Ago </div>
            </div>
            <div className=" mt-3 mb-2 font-semibold text-[30px]">
              Attack On Titans
            </div>
            <div className="text-[25px] text-stone-500">
              <div className="">The CSS Grid Layout Module offers a </div>
              <div className="">grid-based layout system, with rows and </div>
              <div className="">
                columns, making it easier to design web pages
              </div>
              <div className="">
                without having to use floats and positioning.
              </div>
            </div>
            <div className="flex mt-8">
              {" "}
              <div className="text-[20px] text-stone-500">12 Min Read</div>
              <div className="flex ml-[290px] text-[20px] font-bold">
                {" "}
                <button>Read Full </button>{" "}
                <div className="text-[30px]">
                  <IoIosArrowRoundForward />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-gray-50 flex justify-center"> */}
        <div className="Transparent2">
          {" "}
          {/* <img className="w-[852px]" src={Transparent} /> */}
          <div className="mx-32 my-24 ">
            <div className="flex text-[21px] text-stone-700">
              Fantasy{" "}
              <div className="h-1 w-1 rounded-full bg-stone-500 mt-3 ml-10 mr-3 "></div>{" "}
              <div className="text-stone-500">1 Month Ago </div>
            </div>
            <div className=" mt-3 mb-2 font-semibold text-[30px]">
              Attack On Titans
            </div>
            <div className="text-[25px] text-stone-500">
              <div className="">The CSS Grid Layout Module offers a </div>
              <div className="">grid-based layout system, with rows and </div>
              <div className="">
                columns, making it easier to design web pages
              </div>
              <div className="">
                without having to use floats and positioning.
              </div>
            </div>
            <div className="flex mt-8">
              {" "}
              <div className="text-[20px] text-stone-500">12 Min Read</div>
              <div className="flex ml-[290px] text-[20px] font-bold">
                {" "}
                <button>Read Full </button>{" "}
                <div className="text-[30px]">
                  <IoIosArrowRoundForward />
                </div>{" "}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="w-">
          {" "}
          <img className="w-[852px] h-[510px]" src={Rectangle1} />{" "}
        </div>
      </div>
    </div>
  );
}
