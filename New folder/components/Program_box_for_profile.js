import React from "react";
import "../css/ProgramBox.css";
import { useNavigate } from "react-router-dom";

const ProgramBoxForProfile = ({ ImageBox, name, id, description,totalDays}) => {
  const navigate = useNavigate();
  return (
    <div
      className="program_box"
      
      onClick={() => {
        navigate("/programpageforprofile", {
          state: { ImageBox, name, description, id,totalDays },
        });
      }}
    >
      {/* <div className="overlay"></div> */}
      <div className="overlay"></div>
      <img src={ImageBox} alt="dfweas"  height="300px" width="300px"/>
      <h1>{name}</h1>
    </div>
  );
};

export default ProgramBoxForProfile;
