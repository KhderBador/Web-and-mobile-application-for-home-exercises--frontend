import React from "react";
import TitleHead from "../components/title_head";
import UserPlanBox from "../components/user-plan-box";
import { useLocation } from "react-router-dom";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/UserPage.css";

const UserPlan = () => {
  const location = useLocation();
  console.log("id is :" + location.state.planId);
  const planId = location.state.planId;
  const totalDays = location.state.totalDays;
  const totalExercises = location.state.totalExercises;
  const genderOfUser = location.state.genderOfUser;
  const goalOfUser=location.state.goalOfUser;
  return (
    <div>
      <NavBar />
      <Header />
      <div className="user_plan">
        <div className="container">
          <TitleHead Tiltle="this is the best plan for you" />
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <UserPlanBox
                id={planId}
                totalDays={totalDays}
                totalExercises={totalExercises}
                gender={genderOfUser}
                
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default UserPlan;
