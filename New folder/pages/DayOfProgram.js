import React,{ useEffect, useState } from 'react';
import Header from '../components/header';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import SectionPractice from '../components/SectionPractice';
import Practicebox from "../components/practicebox";
import '../css/DayOfProgram.css'
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { apiUrl } from "./cap";




const DayOfProgram = () => {
  try {
    
  } catch (error) {
    
  }
  const location=useLocation()
  const navigate=useNavigate()
  
  const programid =location.state.programid
  const ids=[]
  // day id to get list of practices
  
  const Dayname=location.state.name
  const Dayid =location.state.id
  console.log("id is:"+Dayid)

  const [practices, setpractices] = useState([]);
  const [numOfPractices,setNumOfPractices]=useState(0);
  const [name,setName]=useState('')
  const [image,setImage]=useState('')
  const [time,setTime]=useState(0)
  const [description,setdescription]=useState('')
  const [id,setId]=useState([])

  
  let numeberOfSteps= numOfPractices-1
  


  useEffect(() => {
    axios
      .get(apiUrl+"/exercisesOfSomeDay/" + Dayid)
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
          practices.map((practice,index) => (ids.push(practice.id)))
          console.log("this is ids :"+ids[2]);
          
          //  setId(res.data.id)
          //  console.log("ids"+id);
          
        }

      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <NavBar/>
      <Header/>
      {/* <SectionPractice id={id} name={name} programid={programid}/> */}
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
              <Practicebox
                
                name={practice.ExerciseName}
                image={practice.ExerciseImage}
                time={practice.ExerciseTime}
                
                description={practice.ExerciseDescription}
              />
            </div>
          ))}
        </div>
        <div className='row flex_container'>
        <div class="start_workouts_button btn  " onClick={()=>{navigate('/somepractise',{state:{name,image,time,description,programid,Dayid,numeberOfSteps,id}})}}>Start Workouts</div>
        </div>
      </div>
    </div>
      <Footer/>
      
    </div>
  );
}

export default DayOfProgram;
