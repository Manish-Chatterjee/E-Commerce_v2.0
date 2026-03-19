import { Formik } from "formik";
import InformationForm from "../components/FormInfo/InformationForm";
import DeliveryForm from "./FormInfo/DeliveryForm";
import PaymentForm from "./FormInfo/PaymentForm";
import Button from "./ui/Button";

const FormInfo = () => {
  return (
    <>
      <Formik
        initialValues={{
          agree: false,
          deliveryType: "",
          paymentMethod: "",
          cardNumber: "",
          paypalEmail: "",
          appleId: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InformationForm />
            <DeliveryForm />
            <PaymentForm />

            <Button type="submit">pay and place order</Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormInfo;
