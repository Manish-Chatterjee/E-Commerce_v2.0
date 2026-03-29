import styled from "styled-components";

type ButtonProps = {
  type?: "submit" | "button";
  children: React.ReactNode;
  disabled?: boolean; // ✅ add this
};

const Button = ({ type = "button", children, disabled }: ButtonProps) => {
  return <ButtonContainer type={type} disabled={disabled}>{children}</ButtonContainer>;
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
