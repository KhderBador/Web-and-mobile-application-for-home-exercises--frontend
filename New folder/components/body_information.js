import React, { useContext, useState } from "react";
import { genderContext } from "./Body_user_information_form";
import { mainGoalContext } from "./Body_user_information_form";
import { phiscalBodyContext } from "./Body_user_information_form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../pages/cap.js";

const BodyInformation = () => {
  const navigate = useNavigate();
  const minage = 18;
  const maxage = 60;
  const mintall = 150;
  const maxtall = 200;
  const minweight = 50;
  const maxweight = 120;

  const genderOfUser = useContext(genderContext);
  const goalOfUser = useContext(mainGoalContext);
  const levelOfUser = useContext(phiscalBodyContext);

  console.log("this is gender :" + genderOfUser);
  console.log("this is goal :" + goalOfUser);
  console.log("this is level:" + levelOfUser);

  const [userTall, setUserTall] = useState(mintall);
  const [userWeight, setUserWeight] = useState(minweight);
  const [userAge, setUserAge] = useState(minage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userTall);
    console.log(userWeight);
    console.log(userAge);
    console.log(goalOfUser);
    console.log(levelOfUser);
    axios
      .post(apiUrl+
        "/getmyplan",
        JSON.stringify({
          User_Weight: userWeight,
          User_Tall: userTall,
          Age: userAge,
          Physical_Condation: levelOfUser,
          Main_Goal: goalOfUser,
          gender:genderOfUser
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        var planId = res.data["id"];
        console.log("id :" + planId);
        var totalDays = res.data["TotalDays"];
        console.log(" totalDays :" + totalDays);
        var totalExercises = res.data["TotalExercises"];
        console.log(" totalExercises :" + totalExercises);
        navigate("/userplan", {
          state: { planId, totalDays, totalExercises, genderOfUser,goalOfUser },
        });
      })

      .catch((error) => console.log(error));
  };

  return (
    <div className="use_information">
      <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center section-heading">
            <h2>ENTER YOUR BODY INFORMATION:</h2>
          </div>
        </div>
    <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8">
      <form onSubmit={handleSubmit} className="form_user">
        
        <div className="form-group">
          <label className="form-control">enter your tall:</label>
          <input
            type="number"
            min={mintall}
            max={maxtall}
            onChange={(e) => setUserTall(parseInt(e.target.value))}
            value={userTall}
          />
        </div>
        <div className="form-group">
          <label className="form-control">enter your age:</label>
          <input
            type="number"
            min={minage}
            max={maxage}
            onChange={(e) => setUserAge(parseInt(e.target.value))}
            value={userAge}
          />
        </div>
        <div className="form-group">
          <label className="form-control">enter your weight:</label>
          <input
            type="number"
            min={minweight}
            max={maxweight}
            onChange={(e) => setUserWeight(parseInt(e.target.value))}
            value={userWeight}
          />
        </div>
        <button className="send_information_button">DONE</button>
      </form>
    </div>
    <div className="col-md-2"></div>
  </div></div>
   
  );
};

export default BodyInformation;
