import StyledSection from "./components/StyledSection";
import StyledDiv from "./components/StyledDiv";
import MotherDiv from "./components/MotherDiv";

function App() {
  return (
    <MotherDiv>
      <StyledSection width="100px" height="100px" />
      <StyledDiv width="100px" height="100px" />
      <StyledSection width="100px" height="100px" />
      <StyledDiv width="100px" height="100px" />
      <section style={{ width: "100px", height: "100px" }} />
      <StyledSection width="100px" height="100px" />
    </MotherDiv>
  );
}

export default App;
