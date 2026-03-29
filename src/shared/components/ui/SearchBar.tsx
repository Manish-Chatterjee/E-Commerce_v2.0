import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// type SearchBarProps = {
//   searchText: string;
// };
type SearchBarProps = {
  isOpen: boolean;
  setSearchQuery: (value: string) => void;
};

// const SearchBar = ({ searchText }: SearchBarProps) => {
const SearchBar = ({ isOpen, setSearchQuery }: SearchBarProps) => {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchQuery(search);   // 🔥 THIS WAS MISSING
      setSearchText(search);
      setSearch("");
    }
  };

  return (
    <Container isOpen={isOpen}>
      <InputStyled
        ref={inputRef}
        type="text"
        value={search}
        placeholder={
          searchText ? `searches for "${searchText}"` : "what's in your mind"
        }
        onChange={handleChange}
        onKeyDown={handleClick}
      />
    </Container>
  );
};

export default SearchBar;

const Container = styled.div<{ isOpen: boolean }>`
  width: 60%;
  /* width: ${({ isOpen }) => (isOpen ? "250px" : "0px")}; */
  /* opacity: ${({ isOpen }) => (isOpen ? 1 : 0)}; */
  /* overflow: hidden; */
  /* transition: all 1s ease; */
  height: fit-content;
  border-radius: 20px 20px 0 0;
  padding: 15px 20px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;

  /* transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-20px)"}; */

  /* opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 1s ease; */
`;

const InputStyled = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 18px;
  background-color: transparent;

  &::placeholder {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
  }
`;
