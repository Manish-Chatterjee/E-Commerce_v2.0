import styled from "styled-components";
// import {generateId as id} from "../../../shared/utils/randomID";


type OrderDetails = {
  subtotal: number;
  priceOff: number;
  discountedPrice: number;
  deliveryType: number;
  orderId: string;
};

const OrderDetails = ({
  subtotal,
  priceOff,
  discountedPrice,
  deliveryType,
  orderId
}: OrderDetails) => {
  const date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  console.log(priceOff, "priceOff");

  // const { cart: selectedData } = useCart();
  // console.log(selectedData,"cart")

  //   const subtotal = selectedData.reduce((accu, item) => {
  //   return accu + item.price * item.quantity;
  // }, 0);

  //   const discount = (subtotal: number, priceOff: number) =>
  //     calculateDiscount(subtotal, priceOff);

  //   const priceOff = 20;

  //     const discountedPrice: number = discount(subtotal, priceOff);

  return (
    <div>
      <h3>Order details</h3>
      <DetailsContainer>
        <span>
          <p>Order number:</p>
          <p>{orderId}</p>
        </span>
        <span>
          <p>Date:</p>
          <p>{date}</p>
        </span>
        <span>
          <p>Payment method:</p>
          <p>Credit card</p>
        </span>
      </DetailsContainer>
      <hr />
      <DetailsContainer>
        <span>
          <p>Subtotal:</p>
          <p>₹{subtotal.toFixed(1)}</p>
        </span>
        <span>
          <p>Discount ({priceOff}%):</p>
          <p>₹{discountedPrice.toFixed(1)}</p>
        </span>
        {deliveryType !== 0 &&
        <span>
          <p>Delivery Charges:</p>
          <p>₹{deliveryType}</p>
        </span>}
        <span>
          <p>Total:</p>
          <BoldPara>
            ₹{(subtotal - discountedPrice + deliveryType).toFixed(1)}
          </BoldPara>
        </span>
      </DetailsContainer>
    </div>
  );
};

export default OrderDetails;

const DetailsContainer = styled.div`
  span {
    display: flex;
    justify-content: space-between;

    p {
      margin: 0;
    }
  }
`;

const BoldPara = styled.p`
  font-weight: 700;
`;
