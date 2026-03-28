import { Formik } from "formik";
import InformationForm from "../components/FormInfo/InformationForm";
import DeliveryForm from "./FormInfo/DeliveryForm";
import PaymentForm from "./FormInfo/PaymentForm";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const FormInfo = () => {
  const navigate = useNavigate();
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
          localStorage.setItem("cart", JSON.stringify([])); // clears the cart when order is placed
          navigate("/orderConfirmed", { replace: true }); // replace: true, removes the last history page stored
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
