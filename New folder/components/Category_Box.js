/* eslint-disable no-undef */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/CategoryBox.css'

const CategoryBox = ({name,imagebox,description,id}) => {
  


  const navigate=useNavigate()
  console.log(id)
  return (
    <div  className='category_box'  onClick={()=>{navigate('/pps',{state:{id}})}}>
      
      
      <div className="overlay"></div>
      <img src={imagebox} alt="dfweas" height="300px"  />
      <h1>{name}</h1>
      <p style={{color:'white', fontStyle:'italic',}}>{description}</p>
      
      
    </div>
  );
}

export default CategoryBox;
