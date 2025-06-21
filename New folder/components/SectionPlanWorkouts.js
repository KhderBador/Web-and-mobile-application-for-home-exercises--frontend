
import React, { useEffect, useState } from "react";
import PracticPlanbox from "./PracticPlanbox";
import image from "../images/t3.jpg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { apiUrl } from "../pages/cap.js";

const SectionPlanWorkouts = ({ Dayid, Dayname,planid }) => {
  const navigate=useNavigate()
  const [practices, setpractices] = useState([]);
  const [numOfPractices,setNumOfPractices]=useState(0);
  const [name,setName]=useState('')
  const [image,setImage]=useState('')
  const [time,setTime]=useState(0)
  const [description,setdescription]=useState('')
  const [id,setId]=useState(0)


  let numeberOfSteps= numOfPractices-1
  


  useEffect(() => {
    axios
      .get(apiUrl+"/exercisesOfSomePlanDay/" + Dayid)
      // id=dayid
      .then(
        (res) => {
          
          setNumOfPractices(res.data.length)
          setpractices(res.data)
          setName(res.data[0].ExerciseName)
          setTime(res.data[0].ExerciseTime)
          setImage(res.data[0].ExerciseImage)
          setdescription(res.data[0].ExerciseDescription)
          setId(res.data[0].id)
          console.log(res.data)
          
        }

      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="section_practices">
    <div class="container">
      <div class="row animate-box">
        <div class="col-md-8 col-md-offset-2 text-center section-heading">
          <h2>{Dayname}</h2>
        </div>
      </div>
      <div class="row">
        {
        practices.map((practice,index) => (
          
          <div class="col-md-4 col-sm-6">
            {/* practices boxes of day id */}
            <PracticPlanbox
              
              name={practice.ExerciseName}
              image={'http://localhost:8000'+practice.ExerciseImage}
              time={practice.ExerciseTime}
              
            />
          </div>
        ))}
      </div>
      <div className='row flex_container'>
        <div class="start_workouts_button btn  " onClick={()=>{navigate('/someplanpractise',{state:{name,image,time,description,planid,Dayid,numeberOfSteps,id}})}}>Start Workouts</div>
        </div>
    </div>
  </div>
  );
}

export default SectionPlanWorkouts;
