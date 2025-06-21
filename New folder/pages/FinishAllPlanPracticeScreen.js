import React, { useEffect } from "react";
import image from "../images/t3.jpg";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../css/FinishAllPracticeScreen.css";
import { apiUrl } from "./cap";

const FinishAllPlanPracticeScreen = () => {
  const location = useLocation();
  const plan_id = location.state.planid;
  const dayid=location.state.dayid
  console.log("plan id is :"+plan_id);
  console.log("day id is :"+dayid);
  const data = JSON.stringify({plan_id: plan_id,day_id:dayid  });
//   function getCSRFToken() {
//     return document.querySelector('input[name="csrfmiddlewaretoken"]').value;
// }


  //const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)[2];
  // const csrftoken = getCookie('csrftoken');



  useEffect(() => {
    console.log(localStorage.getItem("token"))
    axios
      .put(apiUrl+"/increasePlan", data, {
        headers: {
          "Content-Type": "application/json",
          // 'X-CSRFToken':getCSRFToken()
          'Authorization':`Bearer ${localStorage.getItem("token")}` ,
          
        },
        // withCredentials: true,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    //here i must get number of combleted day for specifec user based on his token
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <div className="finish_all_practices_section">
        
          <div className="row ">
            <div className="col-md-4"></div>
            <div className="flex_message col-md-4">
              <div className="orange_circle">
                <img src={image} alt="" />
              </div>
              
              <h1>Congratulations</h1>
              <p>you have done all workouts for that day</p>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default FinishAllPlanPracticeScreen;
