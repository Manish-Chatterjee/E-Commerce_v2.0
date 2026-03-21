import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Product = {
  id: number;
  img: string;
};

type Props = {
  data: Product[];
  onChange: (index: number) => void;
};

const CarousalCard = ({ data, onChange }: Props) => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    onChange(selectedIndex); // 🔥 sync with parent
  };

  return (
    <Wrapper>
      <CarouselStyled
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        nextIcon={<Next><ArrowForwardIcon /></Next>}
        prevIcon={<Prev><ArrowBackIcon /></Prev>}
      >
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.img} />
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