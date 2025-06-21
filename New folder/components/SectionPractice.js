import React, { useEffect, useState } from "react";
import Practicebox from "./practicebox";
import image from "../images/t3.jpg";
import axios from "axios";
import { apiUrl } from "../pages/cap.js";

const SectionPractice = ({ id, name,programid }) => {
  
  const [practices, setpractices] = useState([]);
  const [numOfPractices,setNumOfPractices]=useState(0);


  useEffect(() => {
    axios
      .get(apiUrl+"exercisesOfSomeDay/" + id)
      // id=dayid
      .then(
        (res) => {
          
          setNumOfPractices(res.data.length)
          setpractices(res.data)
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
            <h2>{name}</h2>
          </div>
        </div>
        <div class="row">
          {
          practices.map((practice,index) => (
            
            <div class="col-md-4 col-sm-6">
              {/* practices boxes of day id */}
              <Practicebox
                programid={programid}
                numOfPractices={numOfPractices}
                index={index+1}
                name={practice.ExerciseName}
                image={practice.ExerciseImage}
                time={practice.ExerciseTime}
                id={practice.id}
                description={practice.ExerciseDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionPractice;
