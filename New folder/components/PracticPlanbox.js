import React from "react";
import { apiUrl } from "../pages/cap.js";


const PracticePlanbox = ({ image,name,time}) => {
  
  return (
    <div class="practice btn-primary">
      
      <img src={image} alt="" class="practice_image" />
      <h3 className="exersise_name">{name}</h3>
      <h3 className="time">0:{time}s</h3>
    </div>
  );
};

export default PracticePlanbox;
