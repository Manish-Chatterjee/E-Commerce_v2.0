import styled from "styled-components";

type ButtonProps = {
  type?: "submit" | "button";
  children: React.ReactNode;
};

const Button = ({ type = "button", children }: ButtonProps) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>;
};

export default Button;

const ButtonContainer = styled.button`
  text-transform: uppercase;
  color: white;
  background-color: black;
  width: 100%;
  cursor: pointer;
  padding: 10px;
`;
