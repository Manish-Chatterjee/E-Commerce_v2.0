import Button from "../../../shared/components/ui/Button";
import styled from "styled-components";

const ShopInfo = () => {
  return (
    <div>
      <h3>Shop Information</h3>
      <Container>
        <SubContainer>
          <Image
            src="https://marketplace.canva.com/EAGtrPC4Xiw/1/0/1600w/canva-black-and-white-artistic-woman-portrait-instagram-profile-picture-dUziP3tUikw.jpg"
            alt="img"
            width={100}
            height={100}
          />
          <div>
            <Para>Tanalee</Para>
            <Para>
              Owner of <br /> <Company>ESNTL</Company>
            </Para>
            <Para>Northern, Kentucky</Para>
          </div>
        </SubContainer>
        <Button>Help with order</Button>
      </Container>
    </div>
  );
};

export default ShopInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 5px;
  /* width: 80%; */
  margin: auto;
  padding: 10px 20px;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Para = styled.p`
  margin: 0;
`;

const Image = styled.img`
  /* border: 1px solid gray; */
  border-radius: 50%;
`;

const Company = styled.span`
  font-weight: 700;
`;
