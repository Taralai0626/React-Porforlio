import React from "react";
import { NavLink } from "react-router-dom";
import { NavList } from "../components/style";
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
  return(
    <nav id="main-navigation" aria-label="Main navigation">
      <ul className="menu">
        <NavList>
          <NavLink to="/">Home</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/skill">Skill</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/education">Education</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/project">Project</NavLink>
        </NavList>
      </ul>
    </nav>
  )
}
export default Nav;



/////////////////// TEST ///////////////////////
// function Navigation() {
//   return(
//     <Navbar id="main-navigation" aria-label="Main navigation">
//       <Container>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse aria-label=" responsive-navbar-nav">
//           <Nav>
//             <Nav.Link to="/">Home</Nav.Link>   
//             <Nav.Link to="/skill">Skill</Nav.Link>      
//             <Nav.Link to="/education">Education</Nav.Link>
//             <Nav.Link to="/project">Project</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }
// export default Navigation;