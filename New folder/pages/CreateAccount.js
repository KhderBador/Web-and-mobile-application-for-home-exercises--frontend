import React from 'react';
import NavBar from '../components/nav-bar';
import Header from '../components/header';
import Footer from '../components/footer';
import Register from '../components/Register';
import TitleHead from "../components/title_head";
import '../css/account.css';

const CreateAccount = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <div className="log_in_section">
        <div className="container">
        <div className="row">
          <TitleHead Tiltle="SIGN UP TO HAVE MORE FEAUTURES" />
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12"></div>
          <div className="col-md-4 col-sm-12">
          <Register/>
          </div>
          <div className="col-md-4 col-sm-12"></div>
        </div>
        </div>
        
      </div>
      
      <Footer/>
    </div>
  );
}

export default CreateAccount;
