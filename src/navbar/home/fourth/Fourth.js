import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Rectangle39 from "../../../assets/Rectangle 39.png";
import naruto from "../../../assets/Naruto.png"
import imgae7 from "../../../assets/image 7.png"

const Fourth = () => {
  return (
    <div className="mt-16 ml-16 mr-16 ">
      <div className="grid grid-col-2">
        <div className="flex mb-1">
          <h2 className="text-[25px] font-bold">Short Reads</h2>
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
      <div className="grid grid-col-3 mt-10">
        <div className="flex justify-between">
          <div className="flex">
            <div className="">
              {" "}
              <img className="w-44 h-[120px]" src={Rectangle39} />
            </div>
            <div className="">
              <div className="ml-5 font-normal text-[20px]">
                <div className="">Akame ga kill:</div>
                <div className="">Season finale</div>
              </div>
              <div className=" ml-5 mt-1 font-light text-gray-500 text-[15px]">
                <div className="">I love shweta ,She is loving girl</div>
                <div className="">I love Tanuja ,She is loving girl</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="">
              {" "}
              <img className="w-44" src={naruto} />
            </div>
            <div className="">
              <div className="ml-5 font-normal text-[20px]">
                <div className="">Naruto uzumaki:</div>
                <div className="">Hidden village</div>
              </div>
              <div className=" ml-5 mt-1 font-light text-gray-500 text-[15px]">
                <div className="">I love shweta ,She is loving girl</div>
                <div className="">I love shweta ,She is loving girl</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="">
              {" "}
              <img className="w-44" src={imgae7} />
            </div>
            <div className="">
              <div className="ml-5 font-normal text-[20px]">
                <div className="">Love juice season</div>
                <div className="">Priemere</div>
              </div>
              <div className=" ml-5 mt-1 font-light text-gray-500 text-[15px]">
                <div className="">I love shweta ,She is loving girl</div>
                <div className="">I love shweta ,She is loving girl</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-[25px] font-bold">Blog</div>
      <hr/>
    </div>
  );
};

export default Fourth;
