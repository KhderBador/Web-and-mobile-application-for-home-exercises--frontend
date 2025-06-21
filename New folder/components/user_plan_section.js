import React, { useEffect, useState } from "react";
import TitleHead from "./title_head";
import image from "../images/t3.jpg";
import ProgramBox from "./Program_box";
import axios from "axios";
import "../css/ProgramBox.css";
import UserPlanBox from "./user-plan-box";
import { apiUrl } from "../pages/cap.js";

const UserPlanSection = ({ Tiltle }) => {
  const [plans, setplans] = useState([]);
  const id = 1;
  useEffect(() => {
    axios
      .get(apiUrl + "/planStartedByUser", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        // withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setplans(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="ProgramSection">
      <div class="container">
        <TitleHead Tiltle={Tiltle} />
        <div class="row">{
          plans.length===0?<>
             <div class="col-md-3 col-sm-12 " ></div>
             <div class="col-md-7 col-sm-12 " style={{padding:"35px"}}>
               <h1 className="sorry">Sorry</h1>
               <h2 className="no_plans">
                   There are no plans that you have started yet...
               </h2>
             </div>
               <div class="col-md-2 col-sm-12 "></div>
        
        
        </>
            
             :
             
             plans.map((plan) => (
               <div class="col-md-4 col-sm-12 ">
                 <UserPlanBox
                   id={plan.id}
                   totalDays={plan.TotalDays}
                   totalExercises={plan.TotalExercises}
                   gender={plan.gender}
                   goalOfUser={plan.goal}
                 />
               </div>
             ))}
       
        </div>
      </div>
    </div>
  );
};

export default UserPlanSection;
