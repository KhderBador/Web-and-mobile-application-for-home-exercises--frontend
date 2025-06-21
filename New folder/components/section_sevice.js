import React from "react";
import TitleHead from "./title_head";
import { useNavigate } from "react-router-dom";

const SectionSevice = ({
  TiltalService,
  image,
  DescreptionService,
  id,
  path,
}) => {
  const navigate = useNavigate();
  return (
    <div id="section_service">
      <div class="container">
        <TitleHead Tiltle={TiltalService} />
        <div class="row">
          <div class="col-md-4 col-sm-4 animate-box">
            <div class="service-image">
              <img class="img-responsive" src={image} alt="service"></img>
              <div class="title">
                <h3>
                  <a href="#">we have</a>
                </h3>
                <span>too many courses</span>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-sm-8 description_of_servise">
            <p>{DescreptionService}</p>
            <p class="move_button" onClick={() => navigate(path)}>
              <a class="btn  btn-primary btn-lg">
                lets do it <i class="icon-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSevice;
