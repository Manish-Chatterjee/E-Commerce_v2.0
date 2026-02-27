// import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <Container>
        <Section>
          <img src="" alt="logo" />
          <LogoName>ESNTL</LogoName>
        </Section>
        <Section>
          <Mid>Brands</Mid>
          <Mid>Shop</Mid>
          <Mid>Blog</Mid>
        </Section>
        <Section>
          <IoIosSearchStyled />
          <span>
            <AiOutlineShoppingCartStyled />
          </span>
          <Img
            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
            alt="profile-logo"
          />
        </Section>
      </Container>

      <Shop><p>Shop</p></Shop>
      
      {/* <div>Give All You Need</div> */}
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  border: 1px solid red;
  background-color: white;
  border-radius: 0 0 10px 10px;
  width: 85%;
  margin: auto;
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

const IoIosSearchStyled = styled(IoIosSearch)`
  padding: 5px;
  border: 1px solid gray;
  font-size: 20px;
`;

const AiOutlineShoppingCartStyled = styled(AiOutlineShoppingCart)`
  padding: 5px;
  border: 1px solid gray;
  font-size: 20px;
`;

const Img = styled.img`
  height: 40px;
  /* width: 40px; */
  border-radius: 100px;
`;

const Shop = styled.div`
  color: #ffffff;
  font-size: 200px;
  font-weight: 600;
  margin: 0;
  border: 1px solid gray;
  text-align: center;

  background-image: url("https://cdn.home-designing.com/wp-content/uploads/2022/03/modern-sofa.jpg");
  background-size: cover;
  background-position: center;
  /* background-repeat: no-repeat; */

  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
  /* margin: 0; */
  height: 400px;

  p {
    border: 2px solid black;
    margin: 0;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%);
    letter-spacing: 10px;
  }
`;
