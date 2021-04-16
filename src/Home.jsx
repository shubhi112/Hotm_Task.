import React from "react";
import web from "../src/images/img2.svg";
import img from "../src/images/chat.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";
import Popular from "./Popular";
import Bootcamps from "./Bootcamps";
import Freebies from "./Freebies";
import Javascript from "./Javascript";
import Reactjs from "./Reactjs";
import Css from "./Css";
import Html from "./Html";
import Vue from "./Vue";
import Title from "./Title";
import About from "./About";
import Sub from "./Sub";

const Home = () => {
  return (
    <>
      <Commom
        name="Don't spend $15,000 on a coding bootcamp"
        imgsrc={web}
        visit="/"
        btname="Try It Out Now"
      />
      <Sub />
      <div style={{ backgroundColor: "#ffe6ff" }}>
        <Title
          head="Most popular courses"
          subhead="Get started with these popular intro courses."
        />
        <Popular />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Title
          head="Bootcamps"
          subhead="Comprehensive courses on various topics"
        />
        <Bootcamps />
      </div>
      <div style={{ backgroundColor: "#e6f2ff" }}>
        <Title
          head="Freebies"
          subhead="High-quality Scrimba courses that don't cost a dime"
        />
        <Freebies />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Title
          head="JavaScript"
          subhead="JavaScript is the worlds most popular programming language"
        />
        <Javascript />
      </div>
      <div style={{ backgroundColor: "lightyellow" }}>
        <Title
          head="React.js"
          subhead="React is the worlds most popular library for building user interfaces"
        />
        <Reactjs />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Title
          head="CSS"
          subhead="CSS is a style sheet language for designing websites"
        />
        <Css />
      </div>
      <div style={{ backgroundColor: "#e6f2ff" }}>
        <Title
          head="HTML"
          subhead="HTML is how you organise content on a website"
        />
        <Html />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Title
          head="Vue"
          subhead="Vue is an approachable, versatile and performant JavaScript framework"
        />
        <Vue />
      </div>

      <div style={{ textAlign: "center", fontWeight: "bold", marginTop: 20 }}>
        <h1>Join our Discord chat</h1>
        <p>1.000+ online • now</p>
        <NavLink to="" className="btn btn-abt">
          Enter Chat
        </NavLink>
        <br />
        <img className="img-fluid" src={img} alt="..." />
      </div>
      <About />
    </>
  );
};
export default Home;
