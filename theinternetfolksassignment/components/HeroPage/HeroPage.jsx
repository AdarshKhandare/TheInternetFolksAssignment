import Image from "next/image";
import {
  HeroPageContainer,
  HeroPageTitle,
} from "../../styles/HeroPage/HeroPage.element";

const HeroPage = () => {
  return (
    <HeroPageContainer>
      <HeroPageTitle>MORE THAN JUST SHORTER LINKS</HeroPageTitle>
      <Image
        src="/assets/people-working.svg"
        alt="svg"
        width="300px"
        height="300px"
        objectFit="cover"
      />
    </HeroPageContainer>
  );
};

export default HeroPage;
