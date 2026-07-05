import React from "react";
import styled from "styled-components";

type Props = {
  type?: "button";
  children: React.ReactNode;
  onClick: () => void
};

const CtrlButton = ({ type, children, onClick }: Props) => {
  return <ButtonContainer type={type} onClick={onClick}>{children}</ButtonContainer>;
};

export default CtrlButton;

const ButtonContainer = styled.button`
  aspect-ratio: 1/1;
  border-radius: 10px;
`;
