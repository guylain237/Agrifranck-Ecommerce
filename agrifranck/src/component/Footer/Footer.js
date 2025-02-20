// import React from "react";
import "./footer.css"
// import facebook from "../../assets/logo_facebook.svg";
// import instagram from "../../assets/logo_instagram.svg";
// import youtube from "../../assets/logo_youtube.svg";

// import linkeldin from "../../assets/logo_linkedin.svg";
import logo from "../../assest/logo.jpg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="footer-links">
        <NavLink style={{textDecoration:'none'}} to="/">  
          <div className="footer-link-div">
           <h1> </h1>
              <img  src={logo} alt="logo-agrifrank" /> 
            
          </div></NavLink> 
          <div className="footer-link-text">
            
            <div className="first">
            <a href="#">nos culture</a>
            <a href="#">nos espaces</a>
            <a href="#">nous contactez</a>
            </div>
            <div className="second">
            <a href="#">Mention legale</a>
            <a href="#">Politique de Cofidentillalité</a>
            
            </div>
          </div>
          
        {/* <div className="socialmedia">
          <img id="instagram" src={instagram} alt="instagram" />
          <img id="facebook" src={facebook} alt="facebook" />
          <img  id="linkedin" src={linkeldin} alt="linkedin" />
          <img id="youtube" src={youtube} alt="youtube" />
        </div> */}
        

        <div className="footer-below">
          <div className="footer-copyright">
            <p>@{new Date().getFullYear()} Agrifrank. Tous droits réservés.</p>
          </div>
        </div>
      </div>
      </div> </div>
  );
}

export default Footer;