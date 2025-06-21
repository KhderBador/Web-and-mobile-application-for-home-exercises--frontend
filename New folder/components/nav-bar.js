import React from 'react';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate =useNavigate()
  const logout = () => {
    window.localStorage.removeItem('token')
    navigate('/')

  }
  return (
    
      <nav class="section-nav" role="navigation">
      <div class="top">
      <div class="row">
            <div class="col-xs-12 text-right">
              <p class="num">Call: +01 123 456 7890</p>
              <ul class="section-social">
                <li><a href="#"><i class="icon-twitter"></i></a></li>
                <li><a href="#"><i class="icon-dribbble"></i></a></li>
                <li><a href="#"><i class="icon-github"></i></a></li>
              </ul>
            </div>
          </div>
      </div>
      <div class="top-menu" style={{paddingLeft:"30px", paddingRight:"30px"}}>
      <div class="row">
            <div class="col-xs-2">
              <div id="section-logo"><a href="/">Stamina<span>.</span></a></div>
            </div>
            <div class="col-xs-10 text-right menu-1">
              <ul>
                <li class="active"><a href="/" className="weight">Home</a></li>
                <li><a href="/profile" >Profile</a></li>
                <li><a href="/pc">Courses</a></li>
                <li><a href="/bodyuserinformation">Create plan</a></li>
                <li><a href="/articlecategories">Articles</a></li>
                <li><a href="/login" className="weight" style={{color:"#f85a16"}}>Sign In</a></li>
                <li><a href="/createaccount" className="weight" style={{color:"#f85a16"}}>Sign Up</a></li>
                
                
                <li><div class="btn btn-primary " onClick={logout}>Log out </div></li>
              </ul>
            </div>
        </div>
      </div>
    </nav>
    
  );
}

export default NavBar;
