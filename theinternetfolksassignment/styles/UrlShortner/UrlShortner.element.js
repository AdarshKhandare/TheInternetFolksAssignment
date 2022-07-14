import styled from "styled-components";
// Shorten the url Input and Button
export const UrlShortnerContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: -60px;
  padding: 40px 80px;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 40px;
  background-color: #ece9f2;
  background-image: url(/assets/Meteor.svg);
`;

export const UrlShortnerInput = styled.input`
  width: 75%;
  height: 50px;
  border-radius: 8px;
  padding: 10px 30px;
  font-size: 18px;
  outline: none;
  &::placeholder {
    color: #f46262;
  }
`;

export const UrlShortnerButton = styled.button`
  padding: 10px 20px;
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  color: #fff;
  background-color: #6effff;
  &:hover {
    background-color: #2acfcf;
    color: #f0f0f0;
  }
`;

// Shorten the url Output and copy to clipboard

export const UrlShortnerOutputContainer = styled.div`
  width: 70%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const UrlShortnerInputUrl = styled.div``;
export const UrlShortnerIUrl = styled.p`
  font-size: 18px;
`;
export const UrlShortnerOutputUrl = styled.div`
  display: flex;
  gap: 30px;
`;

export const UrlShortnerOUrl = styled.p`
  color: #2acfcf;
  font-size: 18px;
`;

export const UrlShortnerOutputUrlCopy = styled.button`
  color: #fff;
  border: none;
  width: 100px;
  border-radius: 8px;
  font-size: 18px;
  background-color: ${(props) => (props.links ? "#3b3054" : "#6effff")};

`;
