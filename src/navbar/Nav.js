import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import SignUp from "./signup/SignUp";
import Login from "./login/Login";
import "./Nav.css"


  const Head = () => {
    return(
//   <nav className="bg-gray-400 h-10 flex justify-center align-top ">

  <nav className="grid grid-cols-1">
    <div className="link">
    <div className="profilePic">
    </div>
    <Link className="hover:underline" to="/">Home</Link>
    <Link className="hover:underline" to="/contact">Contact</Link>
    <Link className="bg-black text-slate-50 h-3 flex items-center hover:underline " to="/signUp">SignUp</Link>
    <Link className="hover:underline " to="/login">Login</Link>
    </div>
  </nav>
    )
};

const Navbar = () => {
  return (
    <div className="">
      <Router>
      <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export { Navbar};
