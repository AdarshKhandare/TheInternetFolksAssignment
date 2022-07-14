import {
  FeaturesDiv,
  FeaturesList,
  FeaturesTitle,
  FooterContainer,
  FooterLogo,
  FooterLogoIconDiv,
  FooterSocialDiv,
  FooterSocialIcon,
  RightFooterDiv,
} from "../../styles/Footer/Footer.element";
import Image from "next/image";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoIconDiv>
        <FooterLogo>Shortly</FooterLogo>
        <FooterSocialDiv>
          <FooterSocialIcon>
            <Image
              src="/assets/icon-facebook.svg"
              alt="logo"
              width="30px"
              height="30"
              id="img"
            />
          </FooterSocialIcon>
          <FooterSocialIcon>
            <Image
              src="/assets/icon-twitter.svg"
              alt="logo"
              width="30px"
              height="30"
            />
          </FooterSocialIcon>
          <FooterSocialIcon>
            <Image
              src="/assets/icon-pinterest.svg"
              alt="logo"
              width="30px"
              height="30"
            />
          </FooterSocialIcon>
          <FooterSocialIcon>
            <Image
              src="/assets/icon-instagram.svg"
              alt="logo"
              width="30px"
              height="30"
            />
          </FooterSocialIcon>
        </FooterSocialDiv>
      </FooterLogoIconDiv>
      <RightFooterDiv>
        <FeaturesDiv>
          <FeaturesTitle>Features</FeaturesTitle>
          <FeaturesList>Link Shortening</FeaturesList>
          <FeaturesList>Branded Links</FeaturesList>
          <FeaturesList>Analytics</FeaturesList>
        </FeaturesDiv>
        <FeaturesDiv>
          <FeaturesTitle>Resources</FeaturesTitle>
          <FeaturesList>Blog</FeaturesList>
          <FeaturesList>Developers</FeaturesList>
          <FeaturesList>Support</FeaturesList>
        </FeaturesDiv>
        <FeaturesDiv>
          <FeaturesTitle>Company</FeaturesTitle>
          <FeaturesList>About</FeaturesList>
          <FeaturesList>Our Team</FeaturesList>
          <FeaturesList>Career</FeaturesList>
          <FeaturesList>Contact</FeaturesList>
        </FeaturesDiv>
      </RightFooterDiv>
    </FooterContainer>
  );
};

export default Footer;
