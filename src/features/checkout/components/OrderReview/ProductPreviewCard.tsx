import { useState } from "react";
import CarousalCard from "../ui/CarousalCard";
import styled from "styled-components";

type Product = {
  id: number;
  title: string;
  description: string;
  img: string;
};

const data: Product[] = [
  {
    id: 1,
    title: "Nike Air Max",
    description: "Comfortable running shoe",
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/t/d/3/-original-imahgbrrxy2nemrb.jpeg?q=90",
  },
  {
    id: 2,
    title: "Nike Zoom",
    description: "Lightweight trainer",
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/t/d/3/-original-imahgbrrxy2nemrb.jpeg?q=90",
  },
  {
    id: 3,
    title: "Nike Pro",
    description: "Premium sports shoe",
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/t/d/3/-original-imahgbrrxy2nemrb.jpeg?q=90",
  },
];

const ProductPreviewCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <CarousalCard data={data} onChange={setActiveIndex} />

      {/* ✅ Dynamic Product Info */}
      <Info>
        <h2>{data[activeIndex].title}</h2>
        <p>{data[activeIndex].description}</p>

        <div>
          <div>Size: XL</div>
          <div>Color: Red</div>
          <div>₹6900</div>
        </div>

        <Hr />

        <div>
          <div>Subtotal</div>
          <div>Discount</div>
          <div>Shipping</div>
        </div>

        <Hr />

        <div>Total</div>
      </Info>
    </Container>
  );
};

export default ProductPreviewCard;

const Container = styled.div`
  /* border: 2px dashed red; */
  width: fit-content;
  margin: 40px auto;
`;

const Info = styled.div`
  text-align: center;
`;

const Hr = styled.hr`
  width: 90%;
  margin: 15px auto;
`