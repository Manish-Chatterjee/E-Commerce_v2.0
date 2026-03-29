import { Formik } from "formik";
import InformationForm from "../components/FormInfo/InformationForm";
import DeliveryForm from "./FormInfo/DeliveryForm";
import PaymentForm from "./FormInfo/PaymentForm";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../shared/context/CartContext";

const FormInfo = () => {
  const navigate = useNavigate();

  const { clearCart } = useCart();

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(cart); // [] if empty
  console.log(cart.length); // 0 if empty
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
          // localStorage.setItem("cart", JSON.stringify([])); // clears the cart when order is placed
          clearCart();
          navigate("/orderConfirmed", { replace: true }); // replace: true, removes the last history page stored
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InformationForm />
            <DeliveryForm />
            <PaymentForm />

            <Button type="submit" disabled={cart.length === 0}>
              pay and place order
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormInfo;
