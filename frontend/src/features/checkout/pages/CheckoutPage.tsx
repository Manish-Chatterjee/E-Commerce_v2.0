import FormInfo from "../components/FormInfo";
import OrderReview from "../components/OrderReview";
import styled from "styled-components";
import SecondNavbar from "../../../shared/components/section/SecondNavbar";
import { useState } from "react";
import { useCart } from "../../../shared/context/Cart_Context/useCart";
import { calculateDiscount } from "../../../shared/utils/calculateDiscount";

const CheckoutPage = () => {
  const [deliveryType, setDeliveryState] = useState<number>(0);
  console.log(deliveryType, "deliveryType");

  const { cart: selectedData } = useCart(); // destructuring with alias or renaming

  const subtotal = selectedData.reduce((accu, item) => {
    return accu + item.price * item.quantity;
  }, 0);

  const discount = (subtotal: number, priceOff: number) =>
    calculateDiscount(subtotal, priceOff);

  const priceOff = 20;

  const discountedPrice: number = discount(subtotal, priceOff);

  return (
    <>
      <SecondNavbar logo={""} />
      <PageContainer>
        <Header>Checkout</Header>
        <Checkout>
          <FormInfoStyled
            setDeliveryState={setDeliveryState}
            subtotal={subtotal}
            priceOff={priceOff}
            discountedPrice={discountedPrice}
            deliveryType={deliveryType}
          />
          <OrderReviewStyled
            deliveryType={deliveryType}
            subtotal={subtotal}
            priceOff={priceOff}
            discountedPrice={discountedPrice}
          />
        </Checkout>

        {/* <Footer/> */}
      </PageContainer>
    </>
  );
};

export default CheckoutPage;

const PageContainer = styled.div`
  margin: 40px;
`;

const Header = styled.p`
  font-weight: 800;
  font-size: 70px;
  text-transform: uppercase;
  margin: 20px 0;
`;

const Checkout = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 60px;
  /* border: 2px solid black; */

  /* @media screen and (max-width: 840px) {
    grid-template-columns: 1fr;
    grid-template-areas: "orderReview" "formInfo";
  } */
`;

const FormInfoStyled = styled(FormInfo)`
  @media screen and (max-width: 840px) {
    order: 2;
  }
`;

const OrderReviewStyled = styled(OrderReview)`
  @media screen and (max-width: 840px) {
    order: 1;
  }
`;
