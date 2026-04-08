import StatusDisplay from "../components/StatusDisplay";
import ShopInfo from "../components/ShopInfo";
import OrderDetails from "../components/OrderDetails";
import CustomerDetails from "../components/CustomerDetails";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OrderConfirmationPage = () => {
  const navigate = useNavigate();

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
        <OrderDetails />
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
