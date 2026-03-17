import { Field } from "formik";
import { formatPrice } from "../../../../shared/utils/formatPrice";

const DeliveryForm = () => {
  // const { values } = useFormikContext<any>();
  return (
    <>
      <h2>Delivery</h2>
      <div>
        <label>
          <Field type="radio" name="deliveryType" value="standard" />
          Standard Delivery
        </label>
        <span>{formatPrice(10)}</span>
        <p>Delivery within 5-7 days</p>
      </div>

      <div>
        <label>
          <Field type="radio" name="deliveryType" value="express" />
          Express Shipping
        </label>
        <span>{formatPrice(50)}</span>
        <p>Delivery within 1-3 days</p>
      </div>

      <label>
        <Field type="radio" name="deliveryType" value="pickup" />
        Pick up
      </label>
      <span>free</span>
    </>
  );
};

export default DeliveryForm;
