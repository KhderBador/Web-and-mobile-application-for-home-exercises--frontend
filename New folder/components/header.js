import React from 'react';
import hero from '../images/hero-bg.jpg';

const Header = () => {
  return (
    <header id="section-header" class="section-cover" role="banner" style={{backgroundImage: `url(${hero})`}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <div class="display-t">
              <div class="display-tc animate-box" data-animate-effect="fadeIn">
                <h1>Make it a lifestyle, not a duty</h1>
                <h2>Are you Ready??</h2>
                <p><a href="https://vimeo.com/channels/staffpicks/93951774" class="btn btn-primary popup-vimeo">Watch Our Video</a></p>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
