import React from "react";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuA,
} from "./../../styles/Navbar/Navbar.element";
import Image from "next/image";
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <Image src="/assets/logo.svg" alt="logo" width="130px" height="60" />
      </NavbarLogo>
      <NavbarMenu>
        <NavbarMenuA>Features</NavbarMenuA>
        <NavbarMenuA>Pricing</NavbarMenuA>
        <NavbarMenuA>Resources</NavbarMenuA>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
