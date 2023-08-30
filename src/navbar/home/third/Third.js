import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Rectangle1 from "../../../assets/Rectangle1.png";
import Rectangle331 from "../../../assets/Rectangle331.png";
import Rectangle332 from "../../../assets/Rectangle332.png";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Third() {
  return (
    <div className="m-16">
      <div className="grid grid-col-2">
        <div className="flex mb-1">
          <h2 className="text-[25px] font-bold">Now Trending</h2>
          <div className="flex">
            <div className="flex items-center pr-6  ml-[1400px]  text-[30px] ">
              <BsArrowLeftCircle />
            </div>
            <div className="flex items-center mr-[20px] text-[30px] ">
              <BsArrowRightCircle />
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-3 gap-56 mt-10">
        <div className="">
          <div>
            {" "}
            <img className="w-[500px]" src={Rectangle1} />
            <div className="bg-gray-50 flex justify-center ">
              <div className="mt-[15px] mr-[50px]">
                <div className="flex text-[15px] text-stone-700">
                  Fantasy{" "}
                  <div className="h-1 w-1 rounded-full bg-stone-500 mt-3 ml-10 mr-3 "></div>{" "}
                  <div className="text-stone-500">1 Month Ago </div>
                </div>
                <div className=" mt-3 mb-2 font-semibold text-[20px]">
                  Attack On Titans
                </div>
                <div className="text-[15px] text-stone-500">
                  <div className="">The CSS Grid Layout Module offers a </div>
                  <div className="">
                    grid-based layout system, with rows and{" "}
                  </div>
                  <div className="">
                    columns, making it easier to design web pages
                  </div>
                  <div className="">
                    without having to use floats and positioning.
                  </div>
                </div>
                <div className="flex mt-8">
                  {" "}
                  <div className="text-[15px] text-stone-500">12 Min Read</div>
                  <div className="flex ml-[170px] text-[15px] font-bold">
                    {" "}
                    <button>Read Full </button>{" "}
                    <div className="text-[30px]">
                  <IoIosArrowRoundForward />
                </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            {" "}
            <img className="w-[500px]" src={Rectangle331} />{" "}
            <div className="bg-gray-50 flex justify-center ">
              <div className="mt-[15px] mr-[50px]">
                <div className="flex text-[15px] text-stone-700">
                  Fantasy{" "}
                  <div className="h-1 w-1 rounded-full bg-stone-500 mt-3 ml-10 mr-3 "></div>{" "}
                  <div className="text-stone-500">1 Month Ago </div>
                </div>
                <div className=" mt-3 mb-2 font-semibold text-[20px]">
                  Attack On Titans
                </div>
                <div className="text-[15px] text-stone-500">
                  <div className="">The CSS Grid Layout Module offers a </div>
                  <div className="">
                    grid-based layout system, with rows and{" "}
                  </div>
                  <div className="">
                    columns, making it easier to design web pages
                  </div>
                  <div className="">
                    without having to use floats and positioning.
                  </div>
                </div>
                <div className="flex mt-8">
                  {" "}
                  <div className="text-[15px] text-stone-500">12 Min Read</div>
                  <div className="flex ml-[170px] text-[15px] font-bold">
                    {" "}
                    <button>Read Full </button>{" "}
                    <div className="text-[30px]">
                  <IoIosArrowRoundForward />
                </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            {" "}
            <img className="w-[500px]" src={Rectangle332} />{" "}
            <div className="bg-gray-50 flex justify-center ">
              <div className="mt-[15px] mr-[50px]">
                <div className="flex text-[15px] text-stone-700">
                  Fantasy{" "}
                  <div className="h-1 w-1 rounded-full bg-stone-500 mt-3 ml-10 mr-3 "></div>{" "}
                  <div className="text-stone-500">1 Month Ago </div>
                </div>
                <div className=" mt-3 mb-2 font-semibold text-[20px]">
                  Attack On Titans
                </div>
                <div className="text-[15px] text-stone-500">
                  <div className="">The CSS Grid Layout Module offers a </div>
                  <div className="">
                    grid-based layout system, with rows and{" "}
                  </div>
                  <div className="">
                    columns, making it easier to design web pages
                  </div>
                  <div className="">
                    without having to use floats and positioning.
                  </div>
                </div>
                <div className="flex mt-8">
                  {" "}
                  <div className="text-[15px] text-stone-500">12 Min Read</div>
                  <div className="flex ml-[170px] text-[15px] font-bold">
                    {" "}
                    <button>Read Full </button>{" "}
                    <div className="text-[30px]">
                  <IoIosArrowRoundForward />
                </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
