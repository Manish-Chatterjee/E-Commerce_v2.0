import styled from "styled-components";
import ProductPreviewCard from "./OrderReview/ProductPreviewCard";
<<<<<<< Updated upstream
import { calculateDiscount } from "../../../shared/utils/calculateDiscount";
import { useCart } from "../../../shared/context/useCart";
=======
import { useCart } from "../../../shared/context/Cart_Context/useCart";
>>>>>>> Stashed changes

// type CartItem = {
//   id: number;
//   productName: string;
//   price: number;
//   quantity: number;
//   img: string;
// };

type DeliveryTypeProps = {
  deliveryType: number;
  className?: string;
  subtotal: number;
  priceOff: number;
  discountedPrice: number;
};

const OrderReview = ({
  deliveryType,
  className,
  subtotal,
  priceOff,
  discountedPrice,
}: DeliveryTypeProps) => {
  // const selectedData = JSON.parse(localStorage.getItem("cart") || "[]");
  // Data from localStorage is changed and it's taking data from Context "cart"

  const { cart: selectedData } = useCart(); // destructuring with alias or renaming
  // const selectedData = cart

  // const subtotal = selectedData.reduce((accu, item) => {
  //   return accu + item.price * item.quantity;
  // }, 0);

  // const discount = (subtotal: number, priceOff: number) =>
  //   calculateDiscount(subtotal, priceOff);

  // const priceOff = 20;
  const shipping = deliveryType;

  // const discountedPrice: number = discount(subtotal, priceOff);

  return (
    <div className={className}>
      <H4>Final Check</H4>

      {/* <ProductPreviewCard selectedData={selectedData}/> */}
      <ProductPreviewCard selectedData={selectedData} />

      <Info>
        <div>
          <div>Subtotal: ₹{subtotal.toFixed(1)}</div>
          <div>
            Discount: ₹{discountedPrice.toFixed(1)} ({priceOff}%)
          </div>
          <div>
            Shipping: {shipping === 0 ? `free` : `₹${shipping.toFixed(1)}`}
          </div>
        </div>

        <Hr />

        <div>
          Grand Total: ₹{(subtotal - discountedPrice + shipping).toFixed(1)}
        </div>
      </Info>
    </div>
  );
};

export default OrderReview;

const Info = styled.div`
  text-align: center;
`;

const Hr = styled.hr`
  width: 90%;
  margin: 15px auto;
`;

const H4 = styled.h4`
  margin-left: 12%;
`;
