import React from "react";
import Javascriptd from "./Javasciptd";
import Card from "./Card";
import { NavLink } from "react-router-dom";
const Javascript = () => {
  return (
    <>
      <div className="container-fluid m-0">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {Javascriptd.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} desc={val.desc} subdesc={val.subdesc} level={val.level}/>;
              })}
            </div>
          </div>
        </div>
        <div className="text-center m-4 p-4">
        <NavLink to="" className="btn btn-see-all">
              See All
            </NavLink>
        </div>
      </div>
    </>
  );
};

export default Javascript;
