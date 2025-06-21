import React,{useState,useEffect} from "react";
import TitleHead from "../components/title_head";
import DayOfPlanBox from "../components/day_of_plan_box";
import axios from "axios";
import { useLocation } from "react-router-dom";
import NavBar from '../components/nav-bar';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/DaysOfPlan.css'
import { apiUrl } from "./cap.js";
import { useNavigate } from "react-router-dom";

const DaysOfPlan = () => {
  const location = useLocation()
  const navigate =useNavigate()
  const planId=location.state.id
  const[days,setdays]=useState([])
  const[completedDays,setComoletedDays]=useState(0)
  const token=window.localStorage.getItem("token");
  
  useEffect(() => {
    
    axios.get(apiUrl+"/daysOfSomePlan/"+planId)
    //program id
    .then(
       res=>  setdays(res.data)
    //  res=>console.log(res.data[0].id)
      )
    .catch(error=>console.log(error)
  );
    },[planId])  


    
  useEffect(() => {
    
    axios
      .get(apiUrl+"/getCompletedDayForPlan/"+planId, {
        headers: { 'Authorization': `Bearer ${token}` },
      })
      .then((res) => {
        console.log("number of days is :"+res.data.ComplatedDays);
        
        setComoletedDays(res.data.ComplatedDays)
      })
      .catch((error) => console.log(error));


    //here i must get number of combleted day for specifec user based on his token
  }, []);

  const DeletePlan = (Id) => {
    days.map((day,index) => (
      axios.delete(apiUrl+"/deleteDaysOfPlan/"+day.id, {
        headers: { 'Authorization': `Bearer ${token}` },
      }).then((res)=>{
        console.log(res.status);
        
      }).catch((error)=>console.log(error))
    ));
    axios.delete(apiUrl+"/deleteSomePlan/"+Id, {
      headers: { 'Authorization': `Bearer ${token}` },
    }).then((res)=>{
      console.log(res.status);
      navigate('/profile')
    }).catch((error)=>console.log(error));
  }
  return (
    <div>
    <NavBar/>
    <Header/>
    <div class="days_of_plan">
      <div class="container">
        <TitleHead Tiltle="DAYS OF THIS PLAN" />
        <div class="row"> <div class="delete_for_plan btn  " onClick={()=>{DeletePlan(planId)}}>Delete From Profile</div></div>
       
        <div class="row">
        
        {days.map((day,index) => (
            completedDays>=index?
            <div class="col-lg-2">
              <DayOfPlanBox name={day.DayName} id={day.id} planid={planId} color="#F85A16"/>
            </div>:
            <div class="col-lg-2">
              <DayOfPlanBox name={day.DayName} id={day.id} planid={planId} color="#4b1b07"/>
            </div>
            
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default DaysOfPlan;

