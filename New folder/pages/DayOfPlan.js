import React from 'react';

import Header from '../components/header';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import SectionPlanWorkouts from '../components/SectionPlanWorkouts';
import '../css/DayOfProgram.css'
import { useLocation } from 'react-router-dom';

const DayOfPlan = () => {
  const location=useLocation()
  const DayId =location.state.id
  const PlanId =location.state.planid
  const DayName=location.state.name
  return (
    <div>
      <NavBar/>
      <Header/>
      <SectionPlanWorkouts Dayid={DayId} Dayname={DayName} planid={PlanId}/>
      <Footer/>
    </div>
  );
}

export default DayOfPlan;
