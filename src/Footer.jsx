import React from "react";
import  logo  from "./images/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start">
      <div className="footer_style">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 text-left">
              <h4 className="font-weight-bold list_items"><img className="img-fluid" src={logo} alt="..." style={{width: 30, height: 30}}/> scrimba</h4><br />
              <ul className="list_items list-unstyled">
                <li>
                  <a className="links" href="#!">
                    Home
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Discord
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Twitter
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Youtube
                  </a>
                </li>
                <br />
              </ul>
            </div>
            <div className="col-lg-2">
              <h6 className="list_items font-weight-bold">Resources</h6><br />

              <ul className="list_items list-unstyled">
                <li>
                  <a className="links" href="#!">
                    Terms
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    FAQs
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Terms
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Privacy
                  </a>
                </li>
                <br />
              </ul>
            </div>

            <div className="col-lg-2">
              <h6 className="list_items font-weight-bold">Courses</h6><br />

              <ul className="list_items list-unstyled">
                <li>
                  <a className="links" href="#!">
                    All Courses
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Intro Courses
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Learn JavaScript
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Learn React
                  </a>
                </li>
                <br />
              </ul>
            </div>
            <div className="col-lg-2">
              <h6 className="list_items font-weight-bold">Company</h6><br />

              <ul className="list_items list-unstyled">
                <li>
                  <a className="links" href="#!">
                    About us
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Contact us
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Support chat
                  </a>
                </li>
                <br />
                <li>
                  <a className="links" href="#!">
                    Gift Membership
                  </a>
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
