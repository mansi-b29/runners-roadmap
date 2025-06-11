/* Title Page - first thing that displays on the app */

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/StandardButtons";
import StandardButtons from "../components/StandardButtons";

export function Home() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <h1 className="Title"> Runner's Roadmap </h1> 
      <h2 className="secondHeader"> Train Smarter. Finish Stronger. </h2>
      <div className="container">
        <img src="/Adobe Express - file.png" className="logo"/>
      </div>
      <p className="blurb"> 
        Welcome to <span className="bold"> Runner's Roadmap</span>! With this web app, you can generate a personalized running workout that's tailored 
        for your needs. Just enter your training goal, how often you are available to run, how long you want a scheduler for, 
        and your current fitness level, and a customized workout schedule will be available for you to use starting as soon
        as today! 
      </p>
      <div className="StandardButtons"> 
        <StandardButtons to="/page1">
          Get Started
        </StandardButtons> 
      </div>
      <br/>

      <p className="bottom_blurb">
        I hope you enjoy this web app! <br></br>
        Copyright 2025 Mansi Bhardwaj
      </p>
      <div className="footer" />
    </div>
  );
}