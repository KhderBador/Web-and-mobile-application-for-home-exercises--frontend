import React, { useState } from 'react';
import NavBar from '../components/nav-bar';
import Header from '../components/header';
import Footer from '../components/footer';
import ChooseGender from './choose _gender';
import '../css/BodyUserInformation.css'
import ChooseMainGoal from './choose_main_goal';
import ChooseLevel from './choose_level';
import BodyInformation from './body_information';

const gender='GENDER'
const maingoal='MAIN GOAL'
const physicalLevel='LEVEL'
const bodyInfo='body information'

export const mainGoalContext = React.createContext();
export const phiscalBodyContext = React.createContext();
export const genderContext=React.createContext()


const BodyUserInformationForm = () => {


  const [currentInformation,setCurrentInformation]=useState(gender)
  const [choosenGender,setChoosenGender]=useState(0)
  const [choosenGoal,setChoosenGoal]=useState(0)
  const [choosenLevel,setChoosenLevel]=useState(0)


  const nextInformation=(newInformation)=>{

    setCurrentInformation(newInformation)

  }
  const setGender=(GENDER)=>{

    setChoosenGender(GENDER)

  }
  const setGoal=(GOAL)=>{

    setChoosenGoal(GOAL)

  }
  const setLevel=(LEVEL)=>{

    setChoosenLevel(LEVEL)

  }
  return (
    <div id ="form_section">
    <div class="container">
      
      {
         currentInformation ===gender ?
         <ChooseGender informationHandler={nextInformation} setInformation={setGender} /> :
         currentInformation===maingoal?
         <ChooseMainGoal informationHandler={nextInformation} setInformation={setGoal}/>:
         currentInformation===physicalLevel?
         <ChooseLevel informationHandler={nextInformation} setInformation={setLevel}/>:
         <genderContext.Provider value={choosenGender}>
          <mainGoalContext.Provider value={choosenGoal}>
            <phiscalBodyContext.Provider value={choosenLevel}>
             <BodyInformation/>
            </phiscalBodyContext.Provider >
          </mainGoalContext.Provider>
         </genderContext.Provider>
         

      }
      
      


      
      
      
        
      </div>
    </div>
  );
}

export default BodyUserInformationForm;



