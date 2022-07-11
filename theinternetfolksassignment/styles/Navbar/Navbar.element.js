import styled from "styled-components";
export const NavbarContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 40px;
  /* margin-left: 100px; */
  padding: 40px 200px;
  margin-bottom: -50px;
`;
export const NavbarLogo = styled.div``;

export const NavbarMenu = styled.div`
  display: flex;
  gap: 30px;
`;
export const NavbarMenuA = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: "grey";
  &:hover {
    background-color: "#3b3054";
  }
  &:focus {
    color: "#3b3054";
  }
`;
