import React from "react";
import { NavbarContainer, NavbarLogo, NavbarMenu } from "./Navbar.element";
import { logo } from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <NavbarLogo src={logo} alt="logo" />
      </div>
      <NavbarMenu>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
