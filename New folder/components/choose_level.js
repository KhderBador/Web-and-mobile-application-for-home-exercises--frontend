import React from "react";
import Image1 from "../images/fullbody.jpg";
import Image2 from "../images/l.jpg";
import Image3 from "../images/t3.jpg";
const bodyInfo = "body information";
const ChooseLevel = (props) => {
  return (
    <div>
      <div className="row">
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center section-heading">
            <h2>CHOOSE YOUR LEVEL:</h2>
          </div>
        </div>
        <div
          className="col-md-4 center_section"
          onClick={() => {
            // '3-5 pushs'
            props.setInformation(1);
            props.informationHandler(bodyInfo);
          }}
        >
          <div className="image_box">
            <img src={Image1} alt="" />
            <h2>3-10 pushs</h2>
          </div>
        </div>
        <div
          className="col-md-4 center_section"
          onClick={() => {
            // '5-7 pushs'
            props.setInformation(2);
            props.informationHandler(bodyInfo);
          }}
        >
          <div className="image_box">
            <img src={Image2} alt="" />
            <h2>10-20 pushs</h2>
          </div>
        </div>
        <div
          className="col-md-4 center_section"
          onClick={() => {
            // '7-10 pushs'
            props.setInformation(3);
            props.informationHandler(bodyInfo);
          }}
        >
          <div className="image_box">
            <img src={Image3} alt="" />
            <h2>over 20 pushs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLevel;
