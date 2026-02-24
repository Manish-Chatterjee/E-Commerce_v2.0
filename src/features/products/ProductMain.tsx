// import React from 'react'
import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import Button from "./commonUI/Button";

const ProductMain = () => {
  return (
    <>
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

export default ProductMain;

const CartHeader = styled.div`
  /* background-color: gray; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Greetings = styled.span``;

// const Options = styled.span`
//   border: 1px solid gray;
//   border-radius: 100px;
//   padding: 5px 10px;

//   &:hover {
//     background-color: black;
//     color: aliceblue;
//   }
// `;

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

// const Status = styled.div`
//   border: 1px solid black;
//   /* width: fit-content; */
//   margin: auto;
//   border-radius: 100px;
//   padding: 5px 20px;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 10px;

//   &:hover {
//     background-color: black;
//     color: white;
//   }

//   width: 150px;
// `;

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
`