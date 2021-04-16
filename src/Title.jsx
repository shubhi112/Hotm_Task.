import React from "react";
const Title = (props) => {
  return (
    <>
    <div className="container col-10 mx-auto my-5 text-center pt-5">
    <h2 ><u><strong>{props.head}</strong></u></h2>
    <h5 className="my-3">{props.subhead}</h5>
    </div>
    </>
  );
};

export default Title;
