import people_working from "../../assets/people_working.png";
import { HeroPageContainer } from "./HeroPage.element";
const HeroPage = () => {
  return (
    <HeroPageContainer>
      <p>MORE THAN JUST SHORTER LINKS</p>
      <img src={people_working} alt="ok" />
    </HeroPageContainer>
  );
};

export default HeroPage;
