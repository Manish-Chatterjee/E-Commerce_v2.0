import { Field, useFormikContext } from "formik";
import { formatPrice } from "../../../../shared/utils/formatPrice";
import styled from "styled-components";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

type ChildProps = {
  setDeliveryState: React.Dispatch<React.SetStateAction<number>>;
};

type ValueProp = {
  agree: boolean;
  appleId: string;
  cardNumber: string;
  deliveryType: string;
  paymentMethod: string;
  paypalEmail: string;
};

const DeliveryForm = ({ setDeliveryState }: ChildProps) => {
  const { values } = useFormikContext<ValueProp>();
  console.log(values, "VALUES");
  const { setFieldValue } = useFormikContext<{ deliveryType: number }>();

  const handleClick = (value: number) => {
    setFieldValue("deliveryType", value); // Formik
    setDeliveryState(value); // parent state
  };
  return (
    <>
      <h2>Delivery</h2>

      <DeliveryStrips>
        <Label>
          {values.deliveryType === "pickup" ? (
            <RadioButtonCheckedIcon />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
          <HiddenCheckbox
            type="radio"
            name="deliveryType"
            value="pickup"
            onClick={() => handleClick(0)}
          />
          <DeliveryInfo>
            <DeliveryType>Pick up</DeliveryType>
            <div>free</div>
          </DeliveryInfo>
        </Label>
      </DeliveryStrips>
      <hr />
      <DeliveryStrips>
        <Label>
          {values.deliveryType === "standard" ? (
            <RadioButtonCheckedIcon />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
          <HiddenCheckbox
            type="radio"
            name="deliveryType"
            value="standard"
            onClick={() => handleClick(10)}
          />

          <DeliveryInfo>
            <div>
              <DeliveryType>Standard Delivery</DeliveryType>
              <DeliveryDuration>Delivery within 5-7 days</DeliveryDuration>
            </div>
            <div>{formatPrice(10)}</div>
          </DeliveryInfo>
        </Label>
      </DeliveryStrips>
      <hr />
      <DeliveryStrips>
        <Label>
          {values.deliveryType === "express" ? (
            <RadioButtonCheckedIcon />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
          <HiddenCheckbox
            type="radio"
            name="deliveryType"
            value="express"
            onClick={() => handleClick(50)}
          />
          <DeliveryInfo>
            <div>
              <DeliveryType>Express Shipping</DeliveryType>
              <DeliveryDuration>Delivery within 1-3 days</DeliveryDuration>
            </div>
            <div>{formatPrice(50)}</div>
          </DeliveryInfo>
        </Label>
      </DeliveryStrips>
    </>
  );
};

export default DeliveryForm;

const DeliveryStrips = styled.div`
  margin: 10px 0;
`;

const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DeliveryType = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0 10px;
`;

const DeliveryDuration = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0 10px;
`;

const Label = styled.label`
  display: flex;
`;

const HiddenCheckbox = styled(Field)`
  display: none;
`;
