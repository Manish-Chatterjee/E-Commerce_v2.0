// import React from 'react'

import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <>
      <SubscribeContainer>
        <p>
          Ready to Get
          <br />
          Our New Stuff?
        </p>
        <SubscribeBtn>
          <input placeholder="Your Email" />
          <button>Send</button>
        </SubscribeBtn>
      </SubscribeContainer>

      <div>
        Lorem ipsum dolor sit amet.
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          eveniet quis ipsa quidem delectus ab saepe laboriosam ipsam expedita
          harum!
        </p>
      </div>

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

      <div>
        <p>Social Media</p>
        <SocialMediaContainer>
          <FaXTwitter className="socials" />
          <FaFacebookF className="socials" />
          <FaLinkedinIn className="socials" />
          <FaInstagram className="socials" />
        </SocialMediaContainer>
      </div>

<hr/>

      <div>
        Copyright &copy; {date} Uangku. All Rights Reserved.
        <div>
            <p>Teams of Service</p>
            <p>Privacy Policy</p>
        </div>
      </div>
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

  p {
    font-size: 36px;
    margin: 0;
  }
`;

const SubscribeBtn = styled.div`
  border-radius: 100px;

  width: 250px;
  /* margin-top: 30px; */
  padding: 7px 15px;
  border: none;
  background-color: white;
  display: flex;

  input {
    border: 1px solid black;
    outline: none;
    font-size: 18px;
    /* width: 200px; */
  }
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
  }
`;
