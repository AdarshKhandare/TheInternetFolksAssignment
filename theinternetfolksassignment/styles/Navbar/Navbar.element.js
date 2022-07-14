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
export const NavbarMenuA = styled.p`
  color: #bfbfbf;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: "#2acfcf";
  }
  &:focus {
    color: "#2acfcf";
  }
`;
