import React from 'react';
import { apiUrl } from "../pages/cap.js";

const PractiseImage = ({image}) => {
  return (
    
    <div class="col-sm-6 practice_image align-self-center ">
        <img src={apiUrl+image} alt=""/>
    </div>
    
  );
}

export default PractiseImage;
