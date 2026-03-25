import React from "react";
import ProductsCard from "./ProductsCard";
// import products from "../products.json";
import products from "../../../shared/sampleData/shopPage.json"
import styled from "styled-components";

type ProductsGridProps = {
  onAddToCart: () => void;
};

const ProductsGrid = ({ onAddToCart }: ProductsGridProps) => {
  return (
    <ProductCardsContainer>
      {products.map((items) => (
        <ProductsCard items={items} onAddToCart={onAddToCart} />
      ))}
    </ProductCardsContainer>
  );
};

export default ProductsGrid;

const ProductCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding: 20px;
`;
