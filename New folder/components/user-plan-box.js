import React from "react";

import { useNavigate } from "react-router-dom";
import ManImage from "../images/man.jpg";
import WomenImage from "../images/women.jpg";

const UserPlanBox = ({ id,totalDays,totalExercises ,gender,goalOfUser}) => {
  
  const navigate = useNavigate();
  let image=''
  let goal=''
  if (gender==='male'){
    image=ManImage
  }
  else{
    image=WomenImage
  }
 
  return (
    <div
      className="plan_box"
      
      onClick={() => {
        navigate("/daysofplan", {
          state: {  id },
        });
      }}
    >
    
       <div className="overlay"></div>
      <img src={image} alt="dfweas"  height="300px" />
      <h1>{totalDays} x {totalExercises}</h1>
       <p>{goalOfUser}</p>
    </div>
  );
};

export default UserPlanBox;
