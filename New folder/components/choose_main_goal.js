import React from "react";
import Image1 from "../images/fullbody.jpg";
import Image2 from "../images/l.jpg";
import Image3 from "../images/t3.jpg";

const physicalLevel = "LEVEL";

const ChooseMainGoal = (props) => {
  return (
    <div>
      <div class="row animate-box">
        <div class="col-md-8 col-md-offset-2 text-center section-heading">
          <h2>CHOOSE YOUR GOAL:</h2>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-4 center_section"
          onClick={() => {
            // 'muscle building'
            props.setInformation(3);
            props.informationHandler(physicalLevel);
          }}
        >
          <div className="image_box">
            <img src={Image1} alt="" />
            <h2>muscle building</h2>
          </div>
        </div>
        <div
          className="col-md-4 center_section"
          onClick={() => {
            
            // 'fitness'
            props.setInformation(2);
            props.informationHandler(physicalLevel);
          }}
        >
          <div className="image_box">
            <img src={Image2} alt="" />
            <h2>fitness</h2>
          </div>
        </div>
        <div
        // 'weight loss'
          className="col-md-4 center_section"
          onClick={() => {
           
            props.setInformation(1);
            props.informationHandler(physicalLevel);
          }}
        >
          <div className="image_box">
            <img src={Image3} alt="" />
            <h2>weight loss</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMainGoal;
