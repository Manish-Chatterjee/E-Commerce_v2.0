import React from "react";
import styled from "styled-components";

type Props = {
  type?: "button";
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const CtrlButton = ({ type, children, onClick, disabled }: Props) => {
  return (
    <ButtonContainer type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
};

export default CtrlButton;

const ButtonContainer = styled.button`
  min-width: 40px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  border: 0.5px solid gray;
  outline: none;
  transition: all 0.1s linear;
  font-weight: 600;
  font-size: 22px;

  &:hover {
    box-shadow: 0px 0px 7px 3px rgb(199, 199, 199);
    transition: all 0.1s linear;
  }

  &:disabled {
    box-shadow: none;
    opacity: 0.5;
  }
`;
