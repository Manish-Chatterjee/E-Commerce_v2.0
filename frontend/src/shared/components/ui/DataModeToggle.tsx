import styled from "styled-components";
import Button from "./Button";
import { useDataMode } from "../../context/DataMode_Context/useDataMode";

const Frontend = () => {
  return (
    <SubContainer>
      {/* <Status /> */}
      Frontend
    </SubContainer>
  );
};

const FullStack = () => {
  return (
    <SubContainer>
      {/* <Status /> */}
      Full Stack
    </SubContainer>
  );
};

const DataModeToggle = () => {
  const { mode, setMode } = useDataMode();
  console.log(mode, "mode");

  return (
    <Container>
      <Button
        onClick={() => setMode("frontend")}
        selected={mode === "frontend"}
        // disabled={mode === "frontend"}
      >
        <Frontend />
      </Button>
      <Button
        onClick={() => setMode("fullstack")}
        selected={mode === "fullstack"}
        // disabled={mode === "fullstack"}
      >
        <FullStack />
      </Button>
    </Container>
  );
};

export default DataModeToggle;

const Container = styled.div`
  border: 1px solid black;
  border-radius: 100px;
  width: fit-content;

  display: flex;
  gap: 10px;
  padding: 5px;

  position: absolute;
  top: 20px;
  right: 20px;
`;

const SubContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;

// const Status = styled.span`
//   display: inline-block;
//   width: 10px;
//   height: 10px;
//   border: 1px solid green;
//   box-shadow: 0 0 10px 5px green;
//   background-color: green;
//   border-radius: 100px;
//   margin: 0;
//   padding: 0;
// `;
