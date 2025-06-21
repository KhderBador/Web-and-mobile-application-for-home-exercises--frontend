import React, { useState } from "react";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/SomePractice.css";
import PractiseImage from "../components/practise_image";
import PractiseDescription from "../components/practise_description";
import PractiseButton from "../components/practise_button";
import TitleHead from '../components/title_head';
import CounterBox from "../components/counter_box";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "./cap";


const SomePractice = () => {
  const location = useLocation()
  const programid=location.state.programid
  const dayid =location.state.Dayid
  const navigate =useNavigate()

  const numeberOfSteps=location.state.numeberOfSteps
  console.log("this is number of steps :"+numeberOfSteps)


  const intialpractice = {

    ExerciseImage: location.state.image,
    ExerciseName: location.state.name,
    ExerciseDescription: location.state.description,
    ExerciseTime: location.state.time,
    id: location.state.id


  }
  // console.log(intialpractice)
  console.log("this is first id "+intialpractice.id);

  const [isStartPractise, setIsStartPractise] = useState(false)

  const [practice, setPractice] = useState(intialpractice)
  const [counterOfIDInc, setcounterOfIDInc] = useState(1)
  console.log(counterOfIDInc)


  const startPractise = (isStart) => {
    setIsStartPractise(isStart)
  }
  const nextPractice = (id) => {
 

   setcounterOfIDInc(counterOfIDInc+1)

  if( counterOfIDInc<=numeberOfSteps){
    
    id = id + 1;
    console.log(id)
    axios
      .get(apiUrl+"/someExercises/" + id)
      .then(
        (res) => {

          console.log(res.data)
          setIsStartPractise(false)
          setPractice(res.data)
         
        })
      .catch((error) => console.log(error));


  }
  else {

    navigate('/finishallpractises',{state:{programid,dayid}})


  }



  }




  return (
    <div>
      <NavBar />

      <Header />
      <div className="section_practice">
      <div className="container">
        <div class="row ">
          <PractiseImage image={practice.ExerciseImage} />

          {}
          <div class="col-sm-6 some_practise_counter ">
            <TitleHead Tiltle={practice.ExerciseName} />
            {
              isStartPractise ?
                <CounterBox time={practice.ExerciseTime} /> :
                <PractiseDescription description={practice.ExerciseDescription} />

            }

            {
              isStartPractise ?
                <PractiseButton ButtonName="next" PracticeHandler={nextPractice} value={practice.id} /> :
                <PractiseButton ButtonName="Start" PracticeHandler={startPractise} value={true} />
            }

          </div>
        </div>
      </div>

      </div>
     
      <Footer />
    </div>
  );
};

export default SomePractice;
