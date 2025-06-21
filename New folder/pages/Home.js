import React from 'react';
import '../index.css';
import '../bootstrap.css'
import ServiceBox from '../components/service_box';
import SectionSevice from '../components/section_sevice';
import AboutUsBox from '../components/about_us_box';
import NavBar from '../components/nav-bar';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactUs from '../components/contact_us';

import image1 from '../images/courses1.jpg';
import image2 from '../images/courses2.jpg';
import image3 from '../images/articles.jpg';
import aboutAs1 from '../images/background6.jpg';
import aboutAs2 from '../images/background7.jpg';
import aboutAs3 from '../images/background8jpg.jpg';
import TitleHead from '../components/title_head';
import ResponsiveAppBar from "../components/responsive_appbar";


function home() {
  
  return (
    <div id="page">
    {/* <ResponsiveAppBar /> */}
    <NavBar />
    <Header/>
    
    <div id="section-services" class="section-bg-section">
      
        <div class="row">
          <div class="col-md-4 text-center animate-box">
            <ServiceBox TiltalBox='FREE COURSES' DescreptionBox='Our website offers free ready-made courses in several fields such as fitness, fat burning, and yoga.... Log in and start with the course that you like.' id='1'/>
          </div>
          <div class="col-md-4 text-center animate-box">
            <ServiceBox TiltalBox='CREATE PLAN'  DescreptionBox='Based on the physical information you provide us with, we can create your own plan in areas you choose, such as fat burning and fitness...' id='2'/>
          </div>
          <div class="col-md-4 text-center animate-box">
          <ServiceBox TiltalBox='ARTICLES'  DescreptionBox='Our website offers distinguished articles in the fields of sports and health, presented by professional specialists in these fields.' id='3'/>
          </div>
        
      </div>
    </div>
  
    
    <SectionSevice TiltalService='COURESES'image={image1} DescreptionService='we have many and many home sport courses from multiple categories,each course has multiple days to practice,and each day has multiple workouts.Are you ready to start? Take a step now' id="1" path='/pc'/>
    <SectionSevice TiltalService='CREATE YOUR PLAN' image={image2} DescreptionService='you need to achive a sportical goal in your life?
Here we are ,begain to enter your goal and some information like yourage ,tall,weight, your fitness level, and Congratulations ,you have the best plan for you.'id="2" path='/bodyuserinformation' />
    <SectionSevice TiltalService='ARTICLES' image={image3} DescreptionService='we have so many sportical categories like kids sport and regime programs, presented by professional specialists in these fields ,and each category has alot of articles,lets read a litle bit.'id="3" path='/articlecategories'/>
    
  
    
    <div id="section-aboutAs">
      <div class="container">
        <TitleHead Tiltle="ABOUT US"/>
        <div class="row">

          <div class="col-md-4 ">
          <AboutUsBox ImageBox={aboutAs1} DescriptionBox='we are a company try to gave you the best in sport field and home workouts.'/>
          </div>


          <div class="col-md-4 ">  
          <AboutUsBox ImageBox={aboutAs2} DescriptionBox='All the sports plans and programs that you see on this website were developed under the supervision of experienced sports coaches'/>
          </div>


          <div class="col-md-4 ">
          <AboutUsBox ImageBox={aboutAs3} DescriptionBox='If you are a user who wants to gain some fitness and energy in his life, or an expert trainer who would like to join our humble company...you are always welcome'/>
          </div>
          
        </div>  
    </div>  
  </div>	
    <ContactUs/>
    <Footer/>
    </div>
  
  );
}

export default home;
