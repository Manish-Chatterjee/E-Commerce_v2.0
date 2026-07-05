import { Field, useFormikContext } from "formik";
import styled from "styled-components";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

type FormProp = {
  agree: boolean;
  appleId: string;
  cardNumber: string;
  deliveryType: string;
  paymentMethod: string;
  paypalEmail: string;
}

const PaymentForm = () => {
  const { values } = useFormikContext<FormProp>();
  console.log(values,'values')
  return (
    <>
      {/* Payment Options */}
      <h2>Payment</h2>
      <Container>
        {/* <PaymentStrips> */}
        <LabelHeader>
          <Label>
            {values.paymentMethod === "card" ? (
              <RadioButtonCheckedIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
            <HiddenCheckbox type="radio" name="paymentMethod" value="card" />
            <PaymentType>Card</PaymentType>
          </Label>
          <LogoContainer>
            <Img
              src="https://mma.prnewswire.com/media/2651665/visa_Logo.jpg?p=twitter"
              alt="data"
              width={20}
              height={20}
            />
            <Img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1280px-Mastercard_2019_logo.svg.png"
              alt="data"
              width={20}
              height={20}
            />
          </LogoContainer>
        </LabelHeader>
        {/* </PaymentStrips> */}

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

        {/* <PaymentStrips> */}
        <LabelHeader>
          <Label>
            {values.paymentMethod === "paypal" ? (
              <RadioButtonCheckedIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
            <HiddenCheckbox type="radio" name="paymentMethod" value="paypal" />
            <PaymentType>PayPal</PaymentType>
          </Label>
          <Img
            src="https://www.penguininc.com/wp-content/uploads/2025/06/paypal-logo.webp"
            alt="data"
            width={20}
            height={20}
          />
        </LabelHeader>
        {/* </PaymentStrips> */}

        {values.paymentMethod === "paypal" && (
          <div>
            <FieldStyled
              type="email"
              name="paypalEmail"
              placeholder="PayPal Email"
            />
          </div>
        )}

        {/* <PaymentStrips> */}
        <LabelHeader>
          <Label>
            {values.paymentMethod === "apple" ? (
              <RadioButtonCheckedIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
            <HiddenCheckbox type="radio" name="paymentMethod" value="apple" />
            <PaymentType>Apple Pay</PaymentType>
          </Label>
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1280px-Apple_Pay_logo.svg.png"
            alt="data"
            width={20}
            height={20}
          />
        </LabelHeader>
        {/* </PaymentStrips> */}

        {values.paymentMethod === "apple" && (
          <div>
            <FieldStyled type="text" name="appleId" placeholder="Apple ID" />
          </div>
        )}

        {/* Conditional Fields */}

        {/* <label>
          <Field type="checkbox" name="agree" />I agree to data processing
        </label> */}
        <CheckBtn>
          {values.agree ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          <HiddenCheckbox type="checkbox" name="agree" />
          &nbsp;I agree to data processing
          {/* <Field type="chec" /> */}
        </CheckBtn>
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
  /* align-items: center; */
  margin: 10px 0;
  /* gap: 30px; */
`;

const HiddenCheckbox = styled(Field)`
  display: none;
`;

const CheckBtn = styled.label`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const PaymentType = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0 10px;
`;

// const PaymentStrips = styled.div`
//   display: flex;
//   width: 100%;
//   border: 1px dashed black;
// `

const Label = styled.label`
  display: flex;
  align-items: center;
  /* border: 1px dashed black; */
`;

const Img = styled.img`
  width: fit-content;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 15px;
`;
