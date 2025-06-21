import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import TitleHead from "../components/title_head";
import ProgramBox from "../components/Program_box";
import image from "../images/t3.jpg";
import axios from "axios";
import '../css/ProgramsOfSomeCategory.css'
import '../index.css'
import { apiUrl } from "./cap";

const ProgramsOfSomeCategory = () => {
  const location = useLocation();
  //  console.log(location)
  const id = location.state.id;
  console.log(id);

  const [programs, setprograms] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl+"/programmsOfSomeType/"+id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((res) => {setprograms(res.data);
        console.log(programs);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      
      <div className="section_programs">
      <div className="container ">
      <TitleHead Tiltle="START A Program  OF MUILTIPLE PROGRAMS" />
        <div class="row">
          {programs.map((program) => (
            <div class="col-md-4 ">
              <ProgramBox
                ImageBox={apiUrl+program.ProgramImage}
                name={program.ProgramName}
                id={program.id}
                description={program.ProgramDescription}
                totalDays={program.TotalDays}
                // progress={program.ProgressRate}
                
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default ProgramsOfSomeCategory;
