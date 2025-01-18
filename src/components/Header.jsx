import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.svg";

const Header = () => {
  return (
    <header className="p-7 sm:px-36 flex justify-between items-center">
      <div className="">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>
      </div>
      <div className="">
        <ul className="flex gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Project</Link>
          </li>
          <li>
            <Link to="/">Help</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-8">
        <Link to="/">Sign In</Link>
        <Link to="/">Sign up</Link>
      </div>
    </header>
  );
};

export default Header;
