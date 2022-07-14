import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #3b3054;
  padding: 20px 60px 20px 120px;
  display: flex;
  gap: 200px;
  color: #fff;
`;

export const FooterLogoIconDiv = styled.div``;
export const FooterLogo = styled.h1`

`;

export const FooterSocialDiv = styled.div`
  display: flex;
  gap: 10px;
`;
export const FooterSocialIcon = styled.div`
  &:hover {
    background-color: #2acfcf;
  }
`;

export const RightFooterDiv = styled.div`
  display: flex;
  gap: 100px;
`;
export const FeaturesDiv = styled.div`
  text-align: left;
`;
export const FeaturesTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
export const FeaturesList = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #bfbfbf;
  &:hover {
    color: #2acfcf;
  }
`;
