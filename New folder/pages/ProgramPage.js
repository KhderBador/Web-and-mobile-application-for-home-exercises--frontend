import React,{useEffect,useState} from 'react';
import SectionProgram from '../components/section_program';

import NavBar from '../components/nav-bar';
import Header from '../components/header';
import Footer from '../components/footer';
import '../index.css'
import '../css/ProgramPage.css'
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { apiUrl } from "./cap";
import BackButton from "../components/back_button";


const ProgramPage = () => {
  const token=window.localStorage.getItem("token");
  const location=useLocation()
  const id =location.state.id
  const name=location.state.name
  const description=location.state.description
  const image=location.state.ImageBox
  const totalDays=location.state.totalDays
  const[completedDays,setComoletedDays]=useState(0)
  

  useEffect(() => {
    
    axios
      .get(apiUrl+"/getCompletedDayForProgram/"+id, {
        headers: { 'Authorization': `Bearer ${token}` },
      })
      .then((res) => {
        console.log("number of days is :"+res.data.ComplatedDays);
        setComoletedDays(res.data.ComplatedDays)
      })
      .catch((error) => console.log(error));


    //here i must get number of combleted day for specifec user based on his token
  }, []);

  return (
    
    <div>
        <NavBar/>
        <Header/>
        {/* <div class="row"><BackButton path='/login'/></div> */}
       <SectionProgram ImageBox={image} name={name} description={description} NumberOfCompletedDays={completedDays} totalDays={totalDays} id={id} completedDays={completedDays}/>
       
       <Footer/>

    </div>
  
    

  
  );
}

export default ProgramPage;
