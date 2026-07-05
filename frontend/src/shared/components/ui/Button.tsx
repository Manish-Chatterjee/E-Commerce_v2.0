import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return <Status className={className} onClick={onClick}>{children}</Status>;
};

// className is passed because of the change in className using styled components to reflect the styles.

export default Button;

const Status = styled.div`
  border: 1px solid black;
  width: fit-content;
  /* margin: auto; */
  border-radius: 100px;
  padding: 5px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  /* width: 150px; */
`;
