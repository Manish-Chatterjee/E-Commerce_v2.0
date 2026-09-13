import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CtrlButton from "./CtrlButton";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useCart } from "../../../../shared/context/Cart_Context/useCart";
// import type { CartItem } from "../../../../shared/context/Cart_Context/CartTypes";

// type CartItem = {
//   id: number;
//   productName: string;
//   price: number;
//   quantity: number;
//   img: string;
// };

// const CarousalCard = ({ data }: Props) => {
const CarousalCard = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  // const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const {
    cart,
    cartCount,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  console.log(cartCount, "cart from carousal");
  console.log(cart, "quantity");

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
        {/* {data?.map((item) => ( */}
        {cart?.map((item) => (
          <Carousel.Item key={item.id}>
            <Card>
              <CardImg variant="top" src={item.variant.images[0]?.imageUrl} />

              <Card.Body>
                <h3>{item.product.productName}</h3>
                <p>₹{item.product.price}</p>
                <p>Size: {item.variant.size}</p>
                <p>Qty: {item.quantity}</p>
                <p>Total: ₹{(item.product.price ?? 0) * item.quantity}</p>

                {/* ///////////////////////////////////////////// */}
                <BtnGrp>
                  <CtrlButton
                    onClick={() => removeFromCart(item.variant.variantId)}
                  >
                    <DeleteForeverIcon />
                  </CtrlButton>
                  <CtrlButton
                    onClick={() => decrementQuantity(item.variant.variantId)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </CtrlButton>
                  <p>{item.quantity}</p>
                  <CtrlButton
                    onClick={() => incrementQuantity(item.variant.variantId)}
                  >
                    +
                  </CtrlButton>
                </BtnGrp>
                {/* /////////////////////////////////////////// */}
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
  object-fit: contain;
  aspect-ratio: 1/1;
`;

const BtnGrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 20px;
`;
