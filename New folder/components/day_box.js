import React from 'react';
import { useNavigate } from 'react-router-dom';

const DayBox = ({name,id,programid,color}) => {
  
  const navigate=useNavigate()
  return (
    <div >
        <p class="day_button"  onClick={
          color==='#F85A16'?
          ()=>{navigate('/dayofprogram', {
            state: {  name,programid, id },
          })}:
          ()=>{alert('sorry,you have to finish the pervious days first !!')}
          
          }>
              <a  style={{backgroundColor:color}} class="btn  popup-vimeo btn-lg"><span>{name}</span></a>
              
            </p>
    </div>
  );
}

export default DayBox;
