import styled from "styled-components";
import {generateId as id} from "../../../shared/utils/randomID";

const OrderDetails = () => {

  const date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div>
      <h3>Order details</h3>
      <DetailsContainer>
        <span>
          <p>Order number:</p>
          <p>{id()}</p>
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
          <BoldPara>$69.00</BoldPara>
        </span>
        <span>
          <p>Taxes VAT(20%):</p>
          <BoldPara>$16.00</BoldPara>
        </span>
        <span>
          <p>Total:</p>
          <BoldPara>$87.00</BoldPara>
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
