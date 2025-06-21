import React from "react";
import { useNavigate } from "react-router-dom";

const DayOfPlanBox = ({ name, id, planid,color }) => {
  const navigate = useNavigate();
  return (
    <div>
      <p
       class="day_button"  onClick={
        color==='#F85A16'?
        ()=>{navigate('/dayofplan', {
          state: {  name,planid, id },
        })}:
        ()=>{alert('SORRY,YOU HAVE to finish the pervious days first !!')}
        
        }
      >
        <a  style={{backgroundColor:color}}  class="btn btn-primary popup-vimeo btn-lg">
          <span>{name}</span>
        </a>
      </p>
    </div>
  );
};

export default DayOfPlanBox;
