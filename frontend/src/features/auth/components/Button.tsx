import styled from "styled-components";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
};

export const Button = ({ type = "button", children, disabled }: ButtonProps) => {
  return <ButtonStyled type={type} disabled={disabled}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  width: fit-content;
  border: none;
  background-color: #fcc520;
  margin: auto;
  padding: 10px 20px;
  border-radius: 5px;

  cursor: pointer;
  position: relative;
  overflow: hidden;

  /* Button shimmer effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      110deg,
      transparent,
      rgba(255, 255, 255, 0.397),
      transparent
    );

    transition: left 1s ease;
  }

  &:hover::after {
    left: 100%;
  }
`;
