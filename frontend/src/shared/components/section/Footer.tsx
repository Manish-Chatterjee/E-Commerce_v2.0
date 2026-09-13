import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Button from "../ui/Button";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <SubscribeContainer>
        <Sub>
          <p>
            Ready to Get
            <br />
            Our New Stuff ?
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
        <LeftContainer>
          <span>
            <h3>About</h3>
            <p>Blog</p>
            <p>Meet The Team</p>
            <p>Contact Us</p>
          </span>
          <span>
            <h3>Support</h3>
            <p>Contact Us</p>
            <p>Shipping</p>
            <p>Return</p>
            <p>FAQ</p>
          </span>
        </LeftContainer>

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
        Copyright &copy;{year} Uangku. All Rights Reserved.
        <div>
          <p>Teams of Service</p>
          <p>Privacy Policy</p>
        </div>
      </FooterBottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-inline: 15px;

  @media screen and (max-width: 840px) {
    margin: 0;
  }
`;

const SubscribeContainer = styled.div`
  background: linear-gradient(#2a2a2a, #111111);
  color: white;
  margin: 0 0 40px 0;
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
    color: #525252;
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
  gap: 15px;

  & .socials {
    border-radius: 100px;
    background-color: black;
    padding: 5px;
    color: white;
    font-size: 35px;
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

const LeftContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));

  & span {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & p {
    margin: 0;
    font-weight: 600;
    font-size: 18px;
    color: #5b5b5b;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;

  /* border: 1px solid green; */

  & div {
    display: flex;
    gap: 40px;
    margin: 0;
    align-items: center;

    & p {
      margin: 0;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  & p {
    margin: 10px 0;
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    color: #a2a2a2;
  }
`;

const HR = styled.hr`
  margin-top: 15px;
`;
