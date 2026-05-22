import styled from "styled-components";

<<<<<<< Updated upstream
const OrderDetails = () => {
=======

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

>>>>>>> Stashed changes
  return (
    <div>
      <h3>Order details</h3>
      <DetailsContainer>
        <span>
          <p>Order number:</p>
<<<<<<< Updated upstream
          <p>86</p>
=======
          <p>{orderId}</p>
>>>>>>> Stashed changes
        </span>
        <span>
          <p>Date:</p>
          <p>May 6, 2026</p>
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
          <BoldPara>₹{subtotal.toFixed(1)}</BoldPara>
        </span>
        <span>
          <p>Taxes VAT({priceOff}%):</p>
          <BoldPara>₹{discountedPrice.toFixed(1)}</BoldPara>
        </span>
        {deliveryType !== 0 &&
        <span>
          <p>Delivery Charges:</p>
          <BoldPara>₹{deliveryType}</BoldPara>
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
