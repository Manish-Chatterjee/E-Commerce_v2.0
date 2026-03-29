// import React from 'react'
// import { IoIosSearch } from "react-icons/io";
import SearchIcon from "@mui/icons-material/Search";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cart from "./ui/Cart";
import SearchBar from "../../ui/SearchBar";
import Profile from "./ui/Profile";

// type SectionName = {
//   sectionName: string;
// };

type Props = {
  setSearchQuery: (value: string) => void;
};

// const Navbar = ({ sectionName }: SectionName) => {
const Navbar = ({ setSearchQuery }: Props) => {
  // const [sectionName, setSectionName] = useState("Brands");
  const [searchBarDisplay, setSearchBarDisplay] = useState(false);

  const location = useLocation();

  const sectionMap: Record<string, string> = {
    brands: "Brands",
    shop: "Shop",
    blog: "Blog",
  };

  // get the last segment of the path
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const sectionNameSpec = pathSegments[pathSegments.length - 1]; // "brands" or "shop" etc.
  // console.log(sectionNameSpec)

  const displayName = sectionMap[sectionNameSpec] || "";

  return (
    <Container>
      <NavbarContainer>
        <Section>
          <img src="" alt="logo" />
          <LogoName>ESNTL</LogoName>
        </Section>
        <Section>
          <Link to="brands">
            <Mid>Brands</Mid>
          </Link>
          <Link to="shop">
            <Mid>Shop</Mid>
          </Link>
          <Link to="blog">
            <Mid>Blog</Mid>
          </Link>
        </Section>
        <Section>
          {/* <IoIosSearchStyled /> */}
          <SearchBtnContainer
            onClick={() => setSearchBarDisplay(!searchBarDisplay)}
          >
            <SearchIcon />
          </SearchBtnContainer>

          <Link to="/checkout">
            {/* <span>
              <AiOutlineShoppingCartStyled />
            </span> */}

            <Cart />
          </Link>
          {/* <Img
            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
            alt="profile-logo"
          /> */}
          <Profile />
        </Section>
      </NavbarContainer>

      <SectionName>
        <p>{displayName}</p>
      </SectionName>

      {/* <div>Give All You Need</div> */}
      {searchBarDisplay ? (
        <SearchBar isOpen={searchBarDisplay} setSearchQuery={setSearchQuery} />
      ) : null}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: relative;
  display: block;
  height: fit-content;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  /* border: 3px solid red; */
  background-color: white;
  border-radius: 0 0 10px 10px;
  width: 85%;
  /* margin: 0px auto; */
  padding: 0 15px;
  box-sizing: border-box;

  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  /* border: 1px solid green; */
`;

const Mid = styled.p`
  padding: 5px 10px;
  font-weight: 600;
  color: gray;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 3px;
    background-color: #252525;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #252525;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LogoName = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

const Img = styled.img`
  height: 40px;
  /* width: 40px; */
  border-radius: 100px;
  margin-inline: 5px;
`;

const SectionName = styled.div`
  color: #ffffff;
  font-size: 200px;
  font-weight: 600;
  margin: 0;
  /* border: 1px solid gray; */
  text-align: center;

  background-image: url("https://cdn.home-designing.com/wp-content/uploads/2022/03/modern-sofa.jpg");
  background-size: cover;
  background-position: center;
  /* background-repeat: no-repeat; */

  /* position: absolute; */
  width: 100%;
  z-index: -1;
  /* top: 0; */
  /* margin: 0; */
  height: 400px;

  p {
    /* border: 2px solid black; */
    margin: 0;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%);
    letter-spacing: 10px;

    backdrop-filter: blur(2px);
    border-radius: 15px;
  }
`;

const SearchBtnContainer = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
