import React from 'react';

const Footer = () => {
  return (
    <footer id="section-footer" class="section-bg" role="contentinfo">
    <div class="overlay"></div>
    <div class="row row-pb-md">
        <div class="col-md-4 section-widget">
          <h3>A Little About Stamina.</h3>
          <p style={{color:'white'}}>Be sure,Now And For Ever, Sport is Life</p>
          
        </div>
        <div class="col-md-8" style={{padding:"40px"}}>
          
          <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="section-footer-links">
              <li><a href="#">Cardio</a></li>
              <li><a href="#">Body Building</a></li>
              <li><a href="#">Yoga</a></li>
              <li><a href="#">Boxing</a></li>
              <li><a href="#">Running</a></li>
            </ul>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="section-footer-links">
              <li><a href="#">Boxing</a></li>
              <li><a href="#">Martial Arts</a></li>
              <li><a href="#">Karate</a></li>
              <li><a href="#">Kungfu</a></li>
              <li><a href="#">Basketball</a></li>
            </ul>
          </div>

          <div class="col-md-4 col-sm-4 col-xs-6">
            <ul class="section-footer-links">
              <li><a href="#">Badminton</a></li>
              <li><a href="#">Body Building</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row copyright">
        <div class="col-md-12 text-center">
          <p>
            <small class="block" style={{color:' #F85A16 '}}>&copy; Always Here To Server You</small> 
            <small class="block"  style={{color:'white '}}>Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>
          </p>
          <p>
            <ul class="section-social-icons">
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="#"><i class="icon-facebook"></i></a></li>
              <li><a href="#"><i class="icon-linkedin"></i></a></li>
              <li><a href="#"><i class="icon-dribbble"></i></a></li>
            </ul>
          </p>
        </div>
      </div>
    </footer>
  
  );
}

export default Footer;
