import React from "react";
import ProfileLinks from "../components/ProfileLinks";
import { FooterStyle } from "../components/style";


function Footer() {
  return(
    <FooterStyle id="footer">
      <div>&copy; Tara Lai, 2022.</div>
      <ProfileLinks/>
    </FooterStyle>  
  )
}
export default Footer;