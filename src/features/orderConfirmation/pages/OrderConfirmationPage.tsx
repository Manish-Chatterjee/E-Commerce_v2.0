import StatusDisplay from "../components/StatusDisplay";
import ShopInfo from "../components/ShopInfo";
import OrderDetails from "../components/OrderDetails";
import CustomerDetails from "../components/CustomerDetails";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

type OrderConfirmation = {
  subtotal: number;
  priceOff: number;
  discountedPrice: number;
  deliveryType: number;
  orderId: string;
};

const OrderConfirmationPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { subtotal, priceOff, discountedPrice, deliveryType, orderId } =
    location.state as OrderConfirmation;

  useEffect(() => {
    const handleBack = () => {
      navigate("/products", { replace: true });
    };
    window.addEventListener("popstate", handleBack);
    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, [navigate]);

  return (
    <>
      <Container>
        <StatusDisplay />
        <OrderDetails
          subtotal={subtotal}
          priceOff={priceOff}
          discountedPrice={discountedPrice}
          deliveryType={deliveryType}
          orderId={orderId}
        />
        <CustomerDetails />
        <ShopInfo />
      </Container>
    </>
  );
};

export default OrderConfirmationPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  width: 70%;
  max-width: 1200px;
  margin: auto;

  @media screen and (max-width: 480px) {
    width: 95vw;
  }
`;
