import React from "react";
import { Link } from "react-router-dom";
import BigImage from "../assets/job-tracker-paper.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="signUp">
      <div
        className="headerContainer"
        style={{ backgroundImage: `url(${BigImage})` }}
      >
        <h1> Get Myself A Job!</h1>
        <p> Let's Get Started</p>
        <Link to="/signUp">
          <button> Start</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
