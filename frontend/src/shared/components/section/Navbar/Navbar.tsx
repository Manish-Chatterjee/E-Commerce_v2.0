import SearchIcon from "@mui/icons-material/Search";

import styled from "styled-components";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Cart from "./ui/Cart";
import SearchBar from "../../ui/SearchBar";
import Profile from "./ui/Profile";
import { useAuth } from "@/features/auth/hooks/useAuth";

type Props = {
  setSearchQuery: (value: string) => void;
};

const Navbar = ({ setSearchQuery }: Props) => {
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

  const displayName = sectionMap[sectionNameSpec] || "";

  const { isAuthenticated } = useAuth();

  return (
    <Container>
      <NavbarContainer>
        <Section>
          {/* <img src="" alt="logo" /> */}
          <LogoName>ESNTL</LogoName>
        </Section>
        <Section>
          {/* <StyledNavLink
            to="brands"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Brands
          </StyledNavLink> */}
          <StyledNavLink
            to="shop"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Shop
          </StyledNavLink>
          {/* <StyledNavLink
            to="blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </StyledNavLink> */}
        </Section>
        <Section>
          {/* <IoIosSearchStyled /> */}
          <SearchBtnContainer
            onClick={() => setSearchBarDisplay(!searchBarDisplay)}
          >
            <SearchIcon />
          </SearchBtnContainer>

          {isAuthenticated && (
            <Link to="/checkout">
              <Cart />
            </Link>
          )}

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
  padding: 5px 15px;
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

const StyledNavLink = styled(NavLink)`
  padding: 5px 10px;
  margin: 0;
  font-weight: 600;
  color: gray;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-decoration: none;

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

  &.active {
    color: #252525;
  }

  &.active::after {
    width: 100%;
  }
`;

const LogoName = styled.p`
  font-weight: 800;
  font-size: 24px;
  font-style: italic;
  margin: 0;
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

  @media screen and (max-width: 480px) {
    font-size: 80px;
    font-weight: 700;
    height: 200px;
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

// const StyledNavLink = styled(NavLink)`
//   &.active {
//     color: red;
//   }
// `
