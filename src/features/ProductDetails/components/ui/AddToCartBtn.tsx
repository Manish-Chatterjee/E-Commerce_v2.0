import React from "react";
import styled from "styled-components";
import LocalMallIcon from "@mui/icons-material/LocalMall";

type ProductsGridProps = {
  onAddToCart: () => void;
};

const AddToCartBtn = ({ onAddToCart }: ProductsGridProps) => {
  return (
    <Button onClick={onAddToCart}>
      <LocalMallIcon />
      Add to cart
    </Button>
  );
};

export default AddToCartBtn;

const Button = styled.button`
  flex: 1;
  background-color: black;
  border-radius: 7px;
  color: white;
  padding: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
