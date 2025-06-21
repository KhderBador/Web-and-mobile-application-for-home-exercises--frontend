import React from "react";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginForm from "../components/log_in_form";
import TitleHead from "../components/title_head";
import '../css/account.css';

const LogIn = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="log_in_section">
        <div className="container">
        <div className="row">
          <TitleHead Tiltle="SIGN IN TO ACCESS ALL YOU NEED" />
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12"></div>
          <div className="col-md-4 col-sm-12">
            <LoginForm />
          </div>
          <div className="col-md-4 col-sm-12"></div>
        </div>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default LogIn;
