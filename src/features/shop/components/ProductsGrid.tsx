import ProductsCard from "./ProductsCard";

import products from "../../../shared/sampleData/shopPage.json";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

type ProductsGridProps = {
  onAddToCart: () => void;
};

type ContextType = {
  searchQuery: string;
};

const ProductsGrid = ({ onAddToCart }: ProductsGridProps) => {
  const { searchQuery } = useOutletContext<ContextType>();

  return (
    <ProductCardsContainer>
      {products
        .filter((item) =>
          item.productName.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((items) => (
          <ProductsCard
            key={items.id}
            items={items}
            onAddToCart={onAddToCart}
            disabled={items.stockAvailability === "out of stock"}
          />
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

  justify-content: center;
  align-items: center;
  place-items: center;
`;
