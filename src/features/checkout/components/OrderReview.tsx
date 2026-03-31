import styled from "styled-components";
import ProductPreviewCard from "./OrderReview/ProductPreviewCard";

const OrderReview = () => {
  const selectedData = JSON.parse(localStorage.getItem("cart") || "[]");
  // console.log(selectedData, "selectedData");

  return (
    <div>
      <H4>Final Check</H4>

      {/* <ProductPreviewCard selectedData={selectedData}/> */}
      <ProductPreviewCard selectedData={selectedData} />

      <Info>
        <div>
          <div>Subtotal: ₹ 500</div>
          <div>Discount: ₹ 50</div>
          <div>Shipping: Free</div>
        </div>

        <Hr />

        <div>Total: ₹ 450</div>
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
