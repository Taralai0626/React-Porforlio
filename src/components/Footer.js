import React from "react";
import ProfileLinks from "../components/ProfileLinks";
// import styled from "styled-components"
import { FooterStyle } from "../components/style";

// const FooterStyle = styled.footer`
//   display: flex;
//   flex-direction: row;
// `;

// const linkStyle = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

function Footer() {
  return(
    <FooterStyle id="footer">
      <div>&copy; Tara Lai, 2022.</div>
      <ProfileLinks/>
    </FooterStyle>  
  )
}
export default Footer;