import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import SignUp from "./signup/SignUp";
import Login from "./login/Login";
import "./Nav.css"


  const Head = () => {
    return(
  <nav className="link">
    <div className="profilePic mr-[1420px]">
    </div>
    <Link className="hover:underline" to="/home">Home</Link>
    <Link className="bg-black text-slate-50 h-3 flex items-center hover:underline " to="/signUp">SignUp</Link>
    <Link className="hover:underline " to="/">Login</Link>
    <Link className="hover:underline" to="/contact">Contact</Link>
  </nav>
    )
};

const Navbar = () => {
  return (
    <div className="">
      <Router>
      <Head />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export { Navbar};
