import React from 'react';
import TitleHead from './title_head';

const ContactUs = () => {
  return (
    <div id="section-contact">
    <div class="container">
      <TitleHead Tiltle="CONTACT US"/>
      <div class="row">
        <div class="col-md-5 col-md-push-1 animate-box">
          
          <div class="fh5co-contact-info">
            <h3 >Contact Information</h3>
            <ul>
              <li class="address"  >198 West 21th Street, <br/> Suite 721 New York NY 10016</li>
              <li class="phone" ><a href="tel://1234567920" >+ 1235 2355 98</a></li>
              <li class="email" ><a href="mailto:info@yoursite.com" >info@yoursite.com</a></li>
              <li class="url" ><a href="http://gettemplates.co" >gettemplates.co</a></li>
            </ul>
          </div>

        </div>
        <div class="col-md-6 animate-box">
          <h3 >Get In Touch</h3>
          <form action="#">
            <div class="row form-group">
              <div class="col-md-6">
                 <label for="fname" >First Name</label> 
                <input type="text" id="fname" class="form-control" placeholder="Your firstname"/>
              </div>
              <div class="col-md-6">
                 <label for="lname" >Last Name</label> 
                <input type="text" id="lname" class="form-control" placeholder="Your lastname"/>
              </div>
            </div>

            <div class="row form-group">
              <div class="col-md-12">
            <label for="email" >Email</label> 
                <input type="text" id="email" class="form-control" placeholder="Your email address"/>
              </div>
            </div>

            <div class="row form-group">
              <div class="col-md-12">
                 <label for="subject" >Subject</label> 
                <input type="text" id="subject" class="form-control" placeholder="Your subject of this message"/>
              </div>
            </div>

            <div class="row form-group">
              <div class="col-md-12">
             <label for="message" >Message</label> 
                <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Say something about us"></textarea>
              </div>
            </div>
            <div class="form-group">
              <input type="submit" value="Send Message" class="btn " style={{  backgroundColor: "#F85A16",   color:"white", 
  fontWeight:" bold"}}/>
            </div>

          </form>		
        </div>
      </div>
      
    </div>
  </div>
  
  );
}

export default ContactUs;
