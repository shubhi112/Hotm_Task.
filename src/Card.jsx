import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 co col-12 mx-auto">
        <div className="card gy-4">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-img-overlay">
            <h3 className="card-title font-weight-bold mt-lg-auto mt-lg-5 text-lg-right align-content-center">{props.title}</h3>
          </div>
          <div className="card-body">
            <p className="card-text">{props.desc}<br />{props.subdesc}</p>
            <p style={{fontSize: 12, textAlign: "left", marginBottom: 0, paddingTop: 20}}>
              {props.level}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
