import React from "react";
import { NavLink } from "react-router-dom";
import me from "../src/images/me.jpeg";
import founders from "../src/images/founders.png";
const About = () => {
  return (
    <>
      <div className="container-fluid about_div p-5">
        <div className="row">
          <div className="container flex-direction col-10 mx-auto d-flex abt_div">
            <div className="container col-6 mx-auto one">
              <img
                src={me}
                className="d-block w-100"
                alt="..."
                width="100px"
                height="250px"
              />
            </div>
            <div className="container col-6 mx-auto two">
              <h1 className="abt_head">About the platform</h1>
              <p className="p1">
                Scrimba is the next-generation platform for learning how to
                code. Our screencasts enable you to interact with the code
                directly in the player. This way, you'll have more fun and learn
                faster. Our courses cover subjects like HTML, CSS, JavaScript,
                React, Vue, and more. They're all made with the goal of
                advancing your career. So pick a course and give your career a
                boost!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about_div p-5">
        <div className="row">
          <div className="container flex-direction col-10 mx-auto d-flex abt_div">
            <div className="container col-7 mx-auto two">
              <h1 className="abt_head">Hi! from the founders </h1>
              <p className="p1">
                Our goal is to create the best possible coding school at the
                lowest possible cost for students. If we succeed with this,
                it’ll give anyone who wants to become a software developer a
                realistic shot at succeeding. Regardless of where they live and
                the size of their wallets.
                <br /><br />
                <strong style={{fontWeight: "bold", fontSize: 23}}><i>“To achieve this, we’ve created a new video format for code screencasts. We call it “scrims”.<br /><br /></i></strong>
                
                This format is the backbone of our school. Not only because it
                results in a superior learning experience. But also because it
                enables us to iterate more quickly, to attract better teachers,
                to facilitate better peer-learning, to keep server costs low,
                and much more.
              </p>
            </div>
            <div className="container col-4 mx-auto one">
              <img
                src={founders}
                className="d-block w-100"
                alt="..."
                width="100px"
                height="250px"
              />
              <br />
              <div style={{ display: "flex",flexDirection: "column"}}>
                <NavLink to="" className="btn btn-abt">
                  Say Hi @Sindreaars
                </NavLink>
                <NavLink to="" className="btn btn-abt mt-2">
                  Say Hi @Perborgen
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
