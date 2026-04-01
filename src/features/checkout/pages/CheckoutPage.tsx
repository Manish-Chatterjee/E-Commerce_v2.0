import FormInfo from "../components/FormInfo";
import OrderReview from "../components/OrderReview";
import styled from "styled-components";
import SecondNavbar from "../../../shared/components/section/SecondNavbar";
import { useState } from "react";

const CheckoutPage = () => {
  const [deliveryType, setDeliveryState] = useState<number>(0);
  console.log(deliveryType, "deliveryType");
  return (
    <>
      <SecondNavbar logo={""} />
      <PageContainer>
        <Header>Checkout</Header>
        <Checkout>
          <FormInfo setDeliveryState={setDeliveryState}/>
          <OrderReview deliveryType={deliveryType}/>
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
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  gap: 60px;
`;
