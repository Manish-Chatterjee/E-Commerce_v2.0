import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import Button from "../../shared/components/ui/Button";
import SecondNavbar from "../../shared/components/section/SecondNavbar";

const OrderHistory = () => {
  return (
    <>
      <SecondNavbar logo="" />
      <CartHeader>
        <Greetings>
          <Greet>Good Morning</Greet>
          <Name>Manish</Name>
        </Greetings>
        <Button>icon Profile</Button>
        <Button>icon Wishlist</Button>
        <Button>icon My Order</Button>
        <Button>icon Saved Address</Button>
        <Button>icon Change Password</Button>
        <Button>icon Logout</Button>
      </CartHeader>

      <hr />

      <ProductContainer>
        <StatusContainer>
          <ButtonSidebar>
            On Shipping <Number>2</Number>
          </ButtonSidebar>
          <ButtonSidebar>
            Arrival <Number>10</Number>
          </ButtonSidebar>
          <ButtonSidebar>
            Cancelled <Number>5</Number>
          </ButtonSidebar>
        </StatusContainer>

        <ProductCard />
      </ProductContainer>
    </>
  );
};

export default OrderHistory;

const CartHeader = styled.div`
  /* background-color: gray; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Greetings = styled.span``;

const Greet = styled.p`
  color: gray;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const Name = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const StatusContainer = styled.div`
  border: 2px dotted gray;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const Number = styled.div`
  background-color: #e0e0e0;
  color: black;
  border-radius: 100px;
  display: inline-block;
  width: 10px;
  height: 10px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductContainer = styled.div`
  border: 2px dashed red;
  display: flex;
`;

const ButtonSidebar = styled(Button)`
  width: 150px;
`;
