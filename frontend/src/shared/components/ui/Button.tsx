import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  selected?: boolean; // for datamode toggle
}

const Button = ({
  children,
  className,
  onClick,
  disabled,
  title,
  selected,
}: ButtonProps) => {
  return (
    <Status
      className={className}
      onClick={onClick}
      disabled={disabled}
      title={title}
      selected={selected}
    >
      {children}
    </Status>
  );
};

// className is passed because of the change in className using styled components to reflect the styles.

export default Button;

// const Status = styled.div`
const Status = styled.button<{ selected?: boolean }>`
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

  // for datamode toggle
  background-color: ${({ selected }) => (selected ? "black" : "")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  //

  &:not(:disabled):hover {
    // When the mouse is hovering over the button, apply these styles only if the button is NOT disabled.
    background-color: black;
    color: white;
  }

  /* width: 150px; */
`;
