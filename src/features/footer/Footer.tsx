// import React from 'react'

import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Button from "../products/commonUI/Button";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <SubscribeContainer>
        <Sub>
          <p>
            Ready to Get
            <br />
            Our New Stuff?
          </p>
          <SubscribeBtn>
            <input placeholder="Your Email" />
            <ButtonStyled>Send</ButtonStyled>
          </SubscribeBtn>
        </Sub>

        <Info>
          Lorem ipsum dolor sit amet.
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            eveniet quis ipsa quidem delectus ab saepe laboriosam ipsam expedita
            harum!
          </p>
        </Info>
      </SubscribeContainer>

      <CustomerReachSection>
        <div style={{ display: "flex", gap: "60px" }}>
          <div>
            <h3>About</h3>
            <p>Blog</p>
            <p>Meet The Team</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Contact Us</p>
            <p>Shipping</p>
            <p>Return</p>
            <p>FAQ</p>
          </div>
        </div>

        <SocialContainer>
          <p>Social Media</p>
          <SocialMediaContainer>
            <FaXTwitter className="socials" />
            <FaFacebookF className="socials" />
            <FaLinkedinIn className="socials" />
            <FaInstagram className="socials" />
          </SocialMediaContainer>
        </SocialContainer>
      </CustomerReachSection>

      <HR />

      <FooterBottom>
        Copyright &copy; {date} Uangku. All Rights Reserved.
        <div>
          <p>Teams of Service</p>
          <p>Privacy Policy</p>
        </div>
      </FooterBottom>
    </>
  );
};

export default Footer;

const SubscribeContainer = styled.div`
  background: linear-gradient(#2a2a2a, #111111);
  color: white;
  margin: 0;
  padding: 20px;
  border-radius: 15px;
  display: flex;

  p {
    font-size: 36px;
    margin: 0;
  }
`;

const Sub = styled.div`
  flex: 1;
`;

const SubscribeBtn = styled.div`
  border-radius: 100px;

  width: 300px;
  margin-top: 30px;
  padding: 5px 5px 5px 12px;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  /* gap: 10px; */
  box-sizing: border-box;

  /* box-sizing: border-box; */

  input {
    border: none;
    outline: none;
    font-size: 18px;
    /* width: 200px; */
    flex: 1;
    min-width: 0; /* prevents overflow issue */
  }
`;

const ButtonStyled = styled(Button)`
  background-color: black;
  color: white;
  /* width: 250px; */
  flex-shrink: 0; /* prevents shrinking */
  /*width: 90px;*/ /* fixed width */
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 5px;

  & .socials {
    border-radius: 100px;
    background-color: black;
    padding: 5px;
    color: white;
    font-size: 20px;
  }

  & .socials:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Info = styled.div`
  font-size: 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;

  & p {
    font-size: 16px;
  }
`;

const CustomerReachSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  /* border: 1px solid black; */

  & div {
    display: flex;
    gap: 40px;
    margin: 0;
    align-items: center;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  & p {
    margin: 10px 0;
    font-size: 14px;
  }
`;

const HR = styled.hr`
  margin-top: 15px;
`