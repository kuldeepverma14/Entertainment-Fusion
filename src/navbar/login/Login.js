import React, { useState } from "react";
import loginImage from "../../assets/login pic.jpeg";
import "./Login.css";
import loginPic from "../../assets/Login 1.png";
import { AiOutlineMail } from "react-icons/ai";
import { Si1Password } from "react-icons/si";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordType, setPasswordType] = useState("password");
  const [value,setValue] = useState("")

  const changeHandler=(e)=>{
    setValue({ [e.target.name]:e.target.value })
  }
  console.log(value)
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  //   const naviagte =useNavigate()
  //  const GoForRegiter=()=>{
  //   naviagte("/signup")
  //  }

  const handleSubmit = (value) => {
    value.preventDefault()
console.log(value.target)
    setFormData({ [value.target.name]: value.target.value });
  };
  console.log(formData);
  return (
    <div className="grid grid-cols-2 mt-5">
      <div className="flex justify-center items-center ">
        <img className="h-[600px] pl-10 " src={loginImage} alt="Error 404" />
      </div>
      <div className="">
        {/* <div className="loginbg h-[900px] bg-cover bg-no-repeat"> */}
        <div className="flex flex-col items-center">
          <div className="font-extrabold text-[50px] text-red-400">
            Welcome Back!
          </div>
          <div className="">
            <img src={loginPic} alt="Error 404" />
          </div>
          <div className="text-[30px] mr-[320px] text-blue-500 mb-4">
            Login Here!{" "}
          </div>
          <form onSubmit={handleSubmit}>
          {/* <form> */}
            <div className=" ">
              <span className="mr-[425px] text-blue-500 font-bold">Email</span>
              <div className="flex  border-b h-12">
                <p className="mt-3 ml-3 text-[25px]">
                  {" "}
                  <AiOutlineMail />
                </p>
                <input
                  type="text"
                  name="email"
                  className="ml-6 outline-none "
                  placeholder="Enter your Email Address"
                  onChange={changeHandler}
                />
              </div>
              <p className="mr-[400px] mt-5 text-blue-500 font-bold">
                Password
              </p>
              <div className="flex border-b h-12 ">
                <p className="mt-3 ml-3 text-[25px]">
                  <Si1Password />
                </p>
                <input
                  type={passwordType}
                  name="password"
                  className="ml-6 outline-none "
                  placeholder="Enter your Password"
                  // value={storeValue}
                  onChange={changeHandler}
                />
                {/*if button's type is not set then button act as form submission type and it refreshes the page, By setting the type attribute to "button," you ensure that these buttons do not trigger the default form submission behavior, */}
                <button
                  type="button"
                  className="text-blue-500 mt-5 ml-36"
                  onClick={togglePassword}
                >
                  {passwordType === "password" ? (
                    <span>
                      <BsFillEyeSlashFill />
                    </span>
                  ) : (
                    <span>
                      <BsEyeFill />
                    </span>
                  )}
                </button>
              </div>
              <div className="flex  place-content-between mt-4">
                <div className="">
                  <button type="button" className="text-blue-500">
                    {" "}
                    Remember me!
                  </button>
                </div>
                <div className="text-blue-500">
                  <button type="button">Forgot Password?</button>
                </div>
              </div>
            </div>
            <div className="flex place-content-between pt-5">
              <button
                type="submit  "
                className="bg-blue-500 w-[100px] h-10 flex justify-center items-center  "
               
              >
                Login
              </button>
              <NavLink to="/signup">
                <button type="button" className="text-blue-500">
                  Not Registered? Register Here!
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
