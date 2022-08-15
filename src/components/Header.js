import React from "react";
import Nav from "./Nav";
import { NavHeaderStyle } from "../components/style";

class Header extends React.Component {
  render() {
    return(
      <div>
        <NavHeaderStyle id="header">
          <h2 id="site-name"><a href="/">Tara Lai</a></h2>
          <Nav />
        </NavHeaderStyle>
      </div>
    );
  }
}
export default Header;y