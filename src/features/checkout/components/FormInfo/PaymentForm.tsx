import { Field, useFormikContext } from "formik";
import styled from "styled-components";

const PaymentForm = () => {
  const { values } = useFormikContext<any>();
  return (
    <>
      {/* Payment Options */}
      <Container>
        <LabelHeader>
          <label>
            <Field type="radio" name="paymentMethod" value="card" />
            Card
          </label>
          <img src="" alt="data" />
        </LabelHeader>

        {values.paymentMethod === "card" && (
          <InputContainer>
            <FieldStyled
              type="text"
              name="cardNumber"
              placeholder="Card Number"
            />
            <FieldStyled
              type="text"
              name="cardNumber"
              placeholder="Card Number"
            />
            <FieldStyled
              type="text"
              name="cardNumber"
              placeholder="Card Number"
            />
            <FieldStyled
              type="text"
              name="cardNumber"
              placeholder="Card Number"
            />
          </InputContainer>
        )}

        <LabelHeader>
          <label>
            <Field type="radio" name="paymentMethod" value="paypal" />
            PayPal
          </label>
          <img src="" alt="data" />
        </LabelHeader>

        {values.paymentMethod === "paypal" && (
          <div>
            <FieldStyled
              type="email"
              name="paypalEmail"
              placeholder="PayPal Email"
            />
          </div>
        )}

        <LabelHeader>
          <label>
            <Field type="radio" name="paymentMethod" value="apple" />
            Apple Pay
          </label>
          <img src="" alt="data" />
        </LabelHeader>

        {values.paymentMethod === "apple" && (
          <div>
            <FieldStyled type="text" name="appleId" placeholder="Apple ID" />
          </div>
        )}

        {/* Conditional Fields */}

        <label>
          <Field type="checkbox" name="agree" />I agree to data processing
        </label>

        {/* <button type="submit">Pay Now</button> */}
      </Container>
    </>
  );
};

export default PaymentForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldStyled = styled(Field)`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
`;

const InputContainer = styled.div`
  /* margin: 0; */
  /* padding: 0; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
