import React from "react";
import InformationForm from "../components/FormInfo/InformationForm";
import FormInfo from "../components/FormInfo";
import Footer from "../../../shared/components/section/Footer";
import OrderReview from "../components/OrderReview";
import styled from "styled-components";
import SecondNavbar from "../../../shared/components/section/SecondNavbar";

const CheckoutPage = () => {
  return (
    <>
    <SecondNavbar logo={""}/>
    <PageContainer>
      <Header>Checkout</Header>
      <Checkout>
        <FormInfo />
        <OrderReview />
      </Checkout>

      {/* <Footer/> */}
    </PageContainer></>
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
