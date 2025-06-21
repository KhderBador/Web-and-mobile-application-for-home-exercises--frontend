import React from "react";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import PractiseButton from "../components/practise_button";
import PractiseImage from "../components/practise_image";
import image from "../images/t3.jpg";
import TitleHead from "../components/title_head";

const StartPractice = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="container">
        <div class="row ">
          <PractiseImage image={image} />
          <div class="col-sm-6 ">
            <TitleHead Tiltle="name of this practise :" />

            <div className="row">
              <div className="col-sm-6">
                <PractiseButton ButtonName="end" />
              </div>
              <div className="col-sm-6">
                <PractiseButton ButtonName="skip" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartPractice;
