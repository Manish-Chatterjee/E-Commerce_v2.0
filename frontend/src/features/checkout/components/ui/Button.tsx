import styled from "styled-components";

type ButtonProps = {
  type?: "submit" | "button";
  children: React.ReactNode;
  disabled?: boolean; // ✅ add this
  className?: string;
  onClick?: () => void
};

const Button = ({
  type = "button",
  children,
  disabled,
  className,
  onClick
}: ButtonProps) => {
  return (
    <ButtonContainer type={type} disabled={disabled} className={className} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  text-transform: uppercase;
  color: white;
  background-color: black;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  border-radius: 7px;

  &:disabled {
    background-color: gray;
    border: none;
    cursor: default;
  }
`;
