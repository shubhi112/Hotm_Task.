import React from "react";
import image2 from "../src/images/image2.png"
const Sub = () => {
  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="container flex-direction col-10 mx-auto d-flex abt_div">
            <div className="col-lg-4 col-md-4 col-sm-4 mx-auto">
              <img
                src={image2}
                className="d-block w-100"
                alt="..."
                width="100%"
                height="250px"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 mx-auto m-5">
              <h4 style={{fontWeight: "bold"}}>A coding community like no other</h4>
              <p className="p1">
                Not a boring forum. But live events, stand-ups, competitions,
                and more.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 mx-auto m-5">
              <h4 style={{fontWeight: "bold"}}>A mind-blowing way to learn to code</h4>
              <p className="p1">
                Our interactive code-learning tool has been blowing minds since
                2017.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sub;
