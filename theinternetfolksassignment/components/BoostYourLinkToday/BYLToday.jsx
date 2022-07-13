import React from "react";
import styled from "styled-components";

const BYLToday = () => {
  return (
    <BYLTodayContainer>
          <BYLTodayHeading>Boost your links today</BYLTodayHeading>
          <button>Get Started</button>
    </BYLTodayContainer>
  );
};

export default BYLToday;

const BYLTodayContainer = styled.div`
  background-image: url("/assets/Meteor.svg");
  height: 200px;
  object-fit: fill;
  text-align: center;
  align-items: center;
  padding: 20px;
  color: #fff;
`;
const BYLTodayHeading = styled.p`
    font-size: 30px;
    font-weight: 700;

`
const BYLTodaybutton = styled.button`
    padding: 10px;
    border-radius: 10px;
    border: none;
`
