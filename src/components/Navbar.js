import React, { useState } from "react";
import Logo from "../assets/job-tracker-man.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home </Link>
          <Link to="/signIn">Sign in </Link>
          <Link to="/signUp">Sign Up </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home </Link>
        <Link to="/signIn">Sign in </Link>
        <Link to="/signUp">Sign Up </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
