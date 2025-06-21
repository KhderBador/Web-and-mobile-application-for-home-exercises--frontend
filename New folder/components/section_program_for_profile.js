import React, { useState, useEffect } from "react";
import TitleHead from "./title_head";
import ImageProgram from "../images/t3.jpg";
import DayBox from "./day_box";
import axios from "axios";
import { apiUrl } from "../pages/cap.js";
import { useNavigate } from "react-router-dom";

const SectionProgramForProfile = ({
  ImageBox,
  name,
  description,
  NumberOfCompletedDays,
  totalDays,
  id,
  completedDays,
}) => {
  const [days, setdays] = useState([]);
  const token=window.localStorage.getItem("token");
  const navigate =useNavigate()

  useEffect(() => {
    axios
      .get(apiUrl + "/daysOfSomePrograms/" + id)

      .then((res) => setdays(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const DeleteProgram = (Id) => {
    days.map((day,index) => (
      axios.delete(apiUrl+"/deleteDaysOfProgram/"+day.id, {
        headers: { 'Authorization': `Bearer ${token}` },
      }).then((res)=>{
        console.log(res.status);
        
      }).catch((error)=>console.log(error))
    ));
    axios.delete(apiUrl+"/deleteSomeProgram/"+Id, {
      headers: { 'Authorization': `Bearer ${token}` },
    }).then((res)=>{
      console.log(res.status);
      navigate('/profile')
    }).catch((error)=>console.log(error));
  }

  return (
    <div class="section_program">
      <div class="container ">
        <TitleHead Tiltle={name} />
        <div class="row  justify-content-between program_info">
          <div class="col-md-6 col-sm-12 box_image_progress">
            <div class="program-image">
              <img class="img-responsive" src={ImageBox} alt="service" />
            </div>
            <div class="completed_dey mb-4 ">
              <h3>
                you have done<span> {NumberOfCompletedDays} </span>days of{" "}
                <span>{totalDays}</span> days
              </h3>
            </div>
          </div>

          <div class="col-md-6 col-sm-12 description_of_program">
          <div class="delete btn  " onClick={()=>{DeleteProgram(id)}}>Delete From Profile</div>
            <TitleHead Tiltle="descreption:" />
            
            <p>{description} </p>
          </div>
        </div>
        <TitleHead Tiltle="DAYS OF THIS PROGRAM" />
        <div class="row">
          {days.map((day, index) =>
            completedDays >= index ? (
              <div class="col-lg-2">
                <DayBox
                  name={day.DayName}
                  id={day.id}
                  programid={id}
                  color="#F85A16"
                />
              </div>
            ) : (
              <div class="col-lg-2">
                <DayBox
                  name={day.DayName}
                  id={day.id}
                  programid={id}
                  color="#4b1b07"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionProgramForProfile;
