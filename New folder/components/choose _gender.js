import React from "react";
import ManImage from "../images/fullbody.jpg";
import WomenImage from "../images/l.jpg";
// import '../css/ChooseGender.css'


const maingoal = "MAIN GOAL";



const ChooseGender = (props) => {
  
  return (
    
    <div>
      <div className="row">
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center section-heading">
            <h2>CHOOSE YOUR GENDER :</h2>
          </div>
        </div>
        <div
          className="col-md-6 center_section"
          onClick={() => {
            props.setInformation("male");
            props.informationHandler(maingoal)
          }}
        >
          
          <div className="image_box">
            <img src={ManImage} alt="" />
            <h2>MALE</h2>
            
          </div>
        </div>
        <div
          className="col-md-6 center_section"
          onClick={() => {
            props.setInformation("female");
            props.informationHandler(maingoal)
          }}
        >
          <div className="image_box">
            <img src={WomenImage} alt="" />
            <h2>FEMALE</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseGender;

//onClick={props.informationHandler(maingoal)
