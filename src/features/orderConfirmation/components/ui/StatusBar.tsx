// NOT USED

import { useState } from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const StatusBar = () => {
  const [step, setStep] = useState(1); // 1, 2, 3

  return (
    <Wrapper>
      <StatusBarStyled>
        <Step>
          {step >= 1 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </Step>

        <Line $active={step >= 2} />

        <Step>
          {step >= 2 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </Step>

        <Line $active={step >= 3} />

        <Step>
          {step >= 3 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </Step>
      </StatusBarStyled>
    </Wrapper>
  );
};

export default StatusBar;

const Wrapper = styled.div`
  padding: 20px;
`;

const StatusBarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 28px;
    color: green;
  }
`;

const Line = styled.div<{ $active: boolean }>`
  flex: 1;
  height: 2px;
  margin: 0 8px;
  background-color: ${({ $active }) => ($active ? "green" : "#ccc")};
`;
