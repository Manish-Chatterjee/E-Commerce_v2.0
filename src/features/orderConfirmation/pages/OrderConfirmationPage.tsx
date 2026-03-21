import StatusDisplay from "../components/StatusDisplay";
import ShopInfo from "../components/ShopInfo";
import OrderDetails from "../components/OrderDetails";
import CustomerDetails from "../components/CustomerDetails";
import styled from "styled-components";

const OrderConfirmationPage = () => {
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
`;
