import { Formik } from "formik";
import InformationForm from "../components/FormInfo/InformationForm";
import DeliveryForm from "./FormInfo/DeliveryForm";
import PaymentForm from "./FormInfo/PaymentForm";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../shared/context/Cart_Context/useCart";
import React from "react";
import { generateId } from "../../../shared/utils/randomID";

type FormInfoProps = {
  setDeliveryState: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  subtotal: number;
  priceOff: number;
  discountedPrice: number;
  deliveryType: number;
};

const FormInfo = ({
  setDeliveryState,
  className,
  subtotal,
  priceOff,
  discountedPrice,
  deliveryType
}: FormInfoProps) => {
  const navigate = useNavigate();

  const { clearCart, cart } = useCart();

  // const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  // console.log(cart); // [] if empty
  console.log(cart.length, 'cart length'); // 0 if empty

  return (
    <div className={className}>
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
          navigate("/orderConfirmed", { replace: true , state: {subtotal, priceOff, discountedPrice, deliveryType, orderId: generateId()}}); // replace: true, removes the last history page stored
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InformationForm />
            <DeliveryForm setDeliveryState={setDeliveryState} />
            <PaymentForm />

            <Button type="submit" disabled={cart.length === 0}>
              pay and place order
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormInfo;
