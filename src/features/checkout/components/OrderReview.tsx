import ProductPreviewCard from "./OrderReview/ProductPreviewCard";

const OrderReview = () => {
  const selectedData = JSON.parse(localStorage.getItem("cart") || "[]");
  // console.log(selectedData, "cart ");

  return (
    <div style={{ border: "2px dashed black" }}>
      <h4>Final Check</h4>

      <ProductPreviewCard selectedData={selectedData}/>
    </div>
  );
};

export default OrderReview;
