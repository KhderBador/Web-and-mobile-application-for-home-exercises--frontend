import React,{useEffect,useState } from 'react';
import TitleHead from './title_head';
import image from '../images/t3.jpg'
import ProgramBox from './Program_box';
import axios from "axios";
import '../css/ProgramBox.css'
import { apiUrl } from "../pages/cap.js";
import ProgramBoxForProfile from './Program_box_for_profile.js';

const UserProgramSection = ({Tiltle}) => {
  const [programs, setprograms] = useState([]);
  const id=1
  useEffect(() => {
    axios
      .get(apiUrl+"/programStartedByUser", {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        // withCredentials: true,
      })
      .then((res) => {
        console.log(res.data)
        setprograms(res.data)
        
      })
      .catch((error) => console.log(error));
  }, []);
  return (
      
    <div className='ProgramSection'>
      
        
       <div class="container"> 
       <TitleHead Tiltle={Tiltle}/> 
				<div class="row">{
          programs.length===0?<>
          <div class="col-md-3 col-sm-12 "></div>
          <div class="col-md-7 col-sm-12 " style={{padding:"35px"}}>
            <h1 className="sorry">Sorry</h1>
            <h2 className="no_plans">
                There are no programs that you have started yet...
            </h2>
            </div>
            <div class="col-md-2 col-sm-12 "></div>
            </>:
        programs.map((program) => (
            <div class="col-md-4 ">
              <ProgramBoxForProfile
                ImageBox={apiUrl+program.ProgramImage}
                name={program.ProgramName}
                id={program.id}
                description={program.ProgramDescription}
                totalDays={program.TotalDays}
                // progress={program.ProgressRate}
                
              />
            </div>
          ))}
        
        </div>
      </div> 
    </div>
  );
}

export default UserProgramSection;
