import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type CartItem = {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  img: string;
};

type Props = {
  data: CartItem[];
};

const CarousalCard = ({ data }: Props) => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Wrapper>
      <CarouselStyled
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        nextIcon={
          <Next>
            <ArrowForwardIcon />
          </Next>
        }
        prevIcon={
          <Prev>
            <ArrowBackIcon />
          </Prev>
        }
      >
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <Card>
              <CardImg variant="top" src={item.img} />

              <Card.Body>
                <h3>{item.productName}</h3>
                <p>₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </CarouselStyled>
    </Wrapper>
  );
};

export default CarousalCard;

const Wrapper = styled.div`
  width: 400px;
  margin: auto;
  position: relative;
`;

const CarouselStyled = styled(Carousel)``;

const Next = styled.span`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  color: black;
`;

const Prev = styled.span`
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  color: black;
`;

const CardImg = styled(Card.Img)`
  object-fit: cover;
  aspect-ratio: 1/1;
`;
