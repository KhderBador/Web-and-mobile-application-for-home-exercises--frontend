import React from "react";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import UserPlanSection from "../components/user_plan_section";
import UserProgramSection from "../components/user_program_section";
import "../css/Profile.css";
import "../css/UserPage.css";
import ProfileCard from "../components/profile_card";
import LogIn from "./Log_in";

const Profile = () => {
  const token=window.localStorage.getItem("token");
  return (
    !token ?
    <div>
    <LogIn/>
    </div>:
    <div>
      <NavBar />
      <Header />
      <div className="profile_Section">
        <ProfileCard />

        <UserPlanSection Tiltle="YOUR PLANS :" />
        <UserProgramSection Tiltle="FREE COURSES YOU STARTED IN :" />
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
