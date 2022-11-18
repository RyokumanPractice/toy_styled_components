import styled from "styled-components";
import StyledSection from "./StyledSection";

const MotherDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};

  & ${StyledSection} {
    background-color: bisque;
    :nth-of-type(1) {
      background-color: black;
    }
    :nth-of-type(2) {
      background-color: grey;
    }
  }

  & section {
    background-color: violet;
  }

  & div {
    :nth-of-type(1) {
      background-color: red;
    }
    :nth-of-type(2) {
      background-color: pink;
    }
  }
`;

export default MotherDiv;
