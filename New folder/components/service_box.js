import React from "react";
import { useRef } from "react";

const ServiceBox = ({ TiltalBox, DescreptionBox, id }) => {
 const courseService = useRef();
 const usercourseService = useRef();
 const articleService = useRef();
  const moveToSection = () => {
    switch (id){
      case 1:
        courseService.current.ScrollIntoView({ behavior: "smooth" });
        break
      case 2:
        usercourseService.current.ScrollIntoView({ behavior: "smooth" });
        break
      case 3:
        articleService.current.ScrollIntoView({ behavior: "smooth" });
        break
      default: 

    }
  

  

  };
  return (
    <div class="service-box">
      
      <h2>{TiltalBox}</h2>
      <p className="description">{DescreptionBox}</p>
      {/* <p>
        <a href="pc" class="btn  btn-outline btn-sm" onClick={moveToSection}>
          More <i class="icon-arrow-right"></i>
        </a>
      </p> */}
    </div>
  );
};

export default ServiceBox;
