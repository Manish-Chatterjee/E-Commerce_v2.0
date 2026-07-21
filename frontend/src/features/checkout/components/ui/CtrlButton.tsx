import React from "react";
import styled from "styled-components";

type Props = {
  type?: "button";
  children: React.ReactNode;
  onClick: () => void
  disabled?: boolean
};

const CtrlButton = ({ type, children, onClick, disabled }: Props) => {
  return <ButtonContainer type={type} onClick={onClick} disabled={disabled}>{children}</ButtonContainer>;
};

export default CtrlButton;

const ButtonContainer = styled.button`
  aspect-ratio: 1/1;
  border-radius: 10px;
`;
