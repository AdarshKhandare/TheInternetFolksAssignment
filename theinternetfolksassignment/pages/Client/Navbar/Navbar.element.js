import styled from "styled-components";
import { layout, color } from "styled-system";
export const NavbarContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 60px;
  margin-left: 100px;
`;
export const NavbarLogo = styled.img``;
export const NavbarMenu = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: "grey";
  &:hover {
    color: "#3b3054";
  }
  &:focus {
    color: "#3b3054";
  }
`;
