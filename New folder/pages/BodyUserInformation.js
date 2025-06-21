import React from 'react';
import NavBar from '../components/nav-bar';
import Header from '../components/header';
import Footer from '../components/footer';
import BodyUserInformationForm from '../components/Body_user_information_form';
import '../css/BodyUserInformation.css';
import MustLoginMessage from '../components/must_login_message'

import LogIn from "./Log_in";

const BodyUserInformation = () => {
  const token=window.localStorage.getItem("token");
  return (
    !token ?
    <div>
    <LogIn/>
    </div>:
    <div>
      <NavBar/>
      <Header/>
      <BodyUserInformationForm/>
      <Footer/>
    </div>
  );
}

export default BodyUserInformation;
